import React from "react";

import { CCard, CCardBody, CCardHeader, CCardGroup } from "@coreui/react";
import {
    CChartBar
  } from '@coreui/react-chartjs'

const BarChart = () => {
    return (
  <>
   
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Bar Chart
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'Salary Track',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
      </CCardGroup>
  </>)
};

export default BarChart;


