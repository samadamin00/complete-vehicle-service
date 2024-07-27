import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
const ServiceTwo = ({ img1, head, p, img2, img3, head2, head3, color }) => {
    return (
        <>
            <Grid container rowSpacing={5} columnSpacing={5} className="bot" sx={{
                pt: { sm: 3, md: 5 },
                pb: { sm: 3, md: 5 }
            }} >
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img1} alt="icon" />
                        <h4>{head}</h4>
                        <Box component='h5' style={{ color: `var(--dGray)`, fontWeight: '400' }}>{p}</Box>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img2} alt="" />
                        <h4>{head2}</h4>
                        <h5 style={{ color: `var(--dGray)`, fontWeight: '400' }}>{p}</h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img3} alt="" />
                        <h4>{head3}</h4>
                        <h5 style={{ color: `var(--dGray)`, fontWeight: '400' }}>{p}</h5>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default ServiceTwo
