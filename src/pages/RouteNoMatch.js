import React from 'react';
import { Button, Result } from 'antd';
import { Box } from '@mui/material';
const NotFound = () => (
  <Box sx={{margin:'10rem 0rem'}}>
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
  </Box>
);
export default NotFound;