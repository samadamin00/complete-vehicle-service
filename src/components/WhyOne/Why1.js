import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import ContentOne from '../../assets/img/ContentOne.png';
import check from '../../assets/img/Check.png'
import './Why1.css'
const Why1 = () => {
    return (
        <>
            <section className='backgroundOne'>
                <Container maxWidth={'lg'}>
                    <Grid container rowGap={{ xs: 3, md: 6 }} direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row', xl: 'row', }} sx={{ zIndex: 1, position: 'relative', paddingTop: { xs: 3, md: 5,lg:12 }, paddingBottom: { xs: 3, md: 5,lg:9 } }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className="content1">
                                <h5>WHY US</h5>
                                <h2>24/7 towing services is what we do</h2>
                                <p>We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service.</p>
                                <Box className='parent'>
                                    <div className="one">
                                        <img src={check} alt="Check" />
                                        <div className="tow">
                                            <h4>We can tow any vehicle</h4>
                                            <p>We operate new, clean and professional towing vehicles and equipment.</p>
                                        </div>
                                    </div>
                                    <div className="two">
                                        <img src={check} alt="Check" />
                                        <div className="tow">
                                            <h4>Fast, safe and affordable</h4>
                                            <p>We provide a fast, affordable, friendly, and reliable car towing service.</p>
                                        </div>
                                    </div>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end' } }} className="content1Img">
                                <img src={ContentOne} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Why1



