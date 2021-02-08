import React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={0}>
      <Grid className='index-picture' item xs={12}><img src="https://i.ibb.co/qmX8Wwc/20190501-093335.jpg" alt=""/></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/diving/"><img src="https://i.ibb.co/qmX8Wwc/20190501-093335.jpg" alt=""/><div className='headings'><p>Diving</p></div> </Link></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/watersports/"><img src="https://i.ibb.co/fkCx3L6/franklin-aboutus2.jpg" alt=""/><div className='headings'><p>Water Sports</p></div> </Link></Grid>
      <Grid className='index-picture' item xs={12}><Link to="/boats/"><img src="https://i.ibb.co/Gc9Ynwg/JHO-0831-Editar.jpg" alt=""/><div className='headings'><p>Boat Rentals</p></div> </Link> </Grid>
      <Grid className='index-picture' item xs={12}><Link to="/snorkeling/"><img src="https://i.ibb.co/cDVsNzx/IMG-0466.jpg" alt=""/><div className='headings'><p>Snorkeling</p></div> </Link> </Grid>
    </Grid>

  </Layout>
)

export default IndexPage
