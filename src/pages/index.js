import React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={1}>
      <Grid className='index-picture2' item xs={6}><Link to="/diving/"><img src="https://i.ibb.co/qmX8Wwc/20190501-093335.jpg" alt=""/></Link><p>Diving</p> </Grid>
      <Grid className='index-picture2' item xs={6}><Link to="/watersports/"><img src="https://i.ibb.co/fkCx3L6/franklin-aboutus2.jpg" alt=""/></Link><p>Water Sports</p></Grid>
      <Grid className='index-picture' item xs={6}><Link to="/boats/"><img src="https://i.ibb.co/Gc9Ynwg/JHO-0831-Editar.jpg" alt=""/></Link><p>Boat Rentals</p> </Grid>
      <Grid className='index-picture' item xs={6}><Link to="/snorkeling/"><img src="https://i.ibb.co/cDVsNzx/IMG-0466.jpg" alt=""/></Link> <p>Snorkeling</p> </Grid>
    </Grid>

  </Layout>
)

export default IndexPage
