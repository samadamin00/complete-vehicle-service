import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import ContactImg from '../../assets/img/Contact form.png';
import style from './Contact.module.css';
const Contact = () => {
  return (
    <>
      <section className={style.Contact}>
        <Container maxWidth={'lg'}>
          <Grid sx={{
            zIndex: '1', position: 'relative', paddingTop: { xs: 10, md: 15, }, paddingBottom: { xs: 5, md: 10, },
          }} container>
            <Grid

              xs={12} sm={12} md={12} lg={12} xl={12}>
              <h6 className={style.top}>CONTACT US</h6>
              <h1 className={style.heading}>Contact information</h1>
            </Grid>
            <Grid rowGap={5} container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                <Box sx={{ borderTopRightRadius: { xs: '1.5rem', sm: '1.5rem', md: '0px' }, borderBottomRightRadius: { xs: '10px', sm: '10px', md: '0px' } }} className={style.information}>
                  <h3>Write us a message</h3>
                  <div className={style.inp}>
                    <label>Your Name</label>
                    <input type="text" />
                  </div>
                  <div className={style.inp}>
                    <label>Your Email</label>
                    <input type="email" />
                  </div>
                  <div className={style.inp}>
                    <label>Your Message</label>
                    <textarea rows={15} type="message" ></textarea>
                  </div>
                  <button type="submit" className='btn btn-orange'>Submit</button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box className={style.img}>
                  <Box sx={{ borderTopLeftRadius: { xs: '1.5rem', sm: '1.5rem', md: '0px' }, borderBottomLeftRadius: { xs: '1.5rem', sm: '1.5rem', md: '0px' } }} component="img" src={ContactImg} alt="car" ></Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Contact
