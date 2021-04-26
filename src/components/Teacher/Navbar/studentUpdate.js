import { useState } from 'react';
import PropTypes from 'prop-types';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

import { CInput, CSelect, CInputGroupAppend, CInputGroupText, CInputGroup} from "@coreui/react";


const StudentUpdate = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
      console.log(newSelectedCustomerIds);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
    setLimit(null);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Number of class done
                </TableCell>
                <TableCell>
                  Period (hours)
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Date of completion
                </TableCell>
                <TableCell>
                Roll Number
                </TableCell>
                <TableCell>
                Class
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                  <CSelect custom name="select" id="select">
                    <option value="0">Select</option>
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3</option>
                    <option value="1">4 </option>
                    <option value="2">5 </option>
                    <option value="3">6</option>
                  </CSelect>
                   
                  </TableCell>
                  <TableCell>
                  <CInputGroup className="input-prepend" > 
                  <CInput id="class" placeholder="6" type="number" /> 
                  <CInputGroupAppend>
                      <CInputGroupText>Hours</CInputGroupText>
                  </CInputGroupAppend>
                  </CInputGroup>

                  </TableCell>
                  <TableCell>
                  {customer.phone}
                  </TableCell>
                  <TableCell>
                  <CInput
                    type="date"
                    id="date-input"
                    name="date-input"
                    placeholder="date"
                  />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      
    </Card>
  );
};

StudentUpdate.propTypes = {
  customers: PropTypes.array.isRequired
};

export default StudentUpdate;
