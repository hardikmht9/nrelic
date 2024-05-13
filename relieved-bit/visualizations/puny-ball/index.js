import React from "react";
 
import { AreaChart, LineChart, PieChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"> <h1> custom visualizer </h1>
 
<Grid>
   
<GridItem columnSpan={6}>
    <AreaChart
            accountId={4438271}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI3MXxJTkZSQXxOQXw0MzYzODAxMDM0OTg1OTYxMjY') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
 
<GridItem columnSpan={6}>
    <AreaChart
            accountId={4438271}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3MXxJTkZSQXxOQXw0MzYzODAxMDM0OTg1OTYxMjY') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<AreaChart
            accountId={4438271}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3MXxJTkZSQXxOQXw0MzYzODAxMDM0OTg1OTYxMjY') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<PieChart
          accountId={4438271}
          query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3MXxJTkZSQXxOQXw0MzYzODAxMDM0OTg1OTYxMjY') TIMESERIES AUTO"
          fullWidth
          />
</GridItem></Grid>
 
 
 
   
    </div>
  );
};
 
export default index;
