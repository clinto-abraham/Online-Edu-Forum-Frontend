import react, { useState } from "react";
import { useHistory } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import {
  CInput,
  CSelect,
  CInputGroupAppend,
  CInputGroupText,
  CInputGroup,
} from "@coreui/react";

const StudentUpdate = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <Card>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">Roll no:</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Number of class done</TableCell>
                    <TableCell>Period (hours)</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Date of completion</TableCell>
                    <TableCell>Roll Number</TableCell>
                    <TableCell>Class</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Roll no.</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Typography color="textPrimary" variant="body1">
                          {}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{}</TableCell>
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
                      <CInputGroup className="input-prepend">
                        <CInput id="class" placeholder="6" type="number" />
                        <CInputGroupAppend>
                          <CInputGroupText>Hours</CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>
                      <CInput
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        </Card>
      )}
    </>
  );
};

export default StudentUpdate;
