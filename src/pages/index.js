import React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/Footer'
import photo1 from '../images/scuba-banner.png'
import photo2 from '../images/tubing-banner.png'
import photo3 from '../images/snorkelling-banner.png'
import photo4 from '../images/boat-banner.png'
import photo from '../images/LOGO-Mariana.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={0}>
      <Grid className='index-picture' item xs={12}><img className='logo' src={photo} alt=""/></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/diving/"><img src={photo1} alt=""/><div className='headings'><p>Diving</p></div> </Link></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/watersports/"><img src={photo2} alt=""/><div className='headings'><p>Water Sports</p></div> </Link></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/boats/"><img src={photo4} alt=""/><div className='headings'><p>Boat Rentals</p></div> </Link> </Grid>
      <Grid className='index-picture' item xs={12}><Link to="/snorkeling/"><img src={photo3} alt=""/><div className='headings'><p>Snorkeling</p></div> </Link> </Grid>
    </Grid>
    <Footer/>

  </Layout>
)

export default IndexPage
