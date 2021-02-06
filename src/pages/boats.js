import React, { useState } from 'react';
import Layout from "../components/layout"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import boatsInfo from "../data/boats"

function Boats() {

    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width: '65vw'
        },
      }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const handleOpen = (title, description, price) => {
        setOpen(true);
        setTitle(title)
        setDescription(description)
        setPrice(price)

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Layout>
            <div className="carousel-wrapper-home">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infiniteLoop
                stopOnHover={false}
                transitionTime={700}
                showStatus={false}
            >
                {boatsInfo.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.img} alt="Scuba Diving Punta Cana"/>
                            <p className="legend" onClick={()=>handleOpen(item.text, item.description, item.price)}>{item.text}</p>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                <div className={classes.paper}>
                                    <h2 id="transition-modal-title">{title}</h2>
                                    <p id="transition-modal-description">{description}</p>
                                    <p id="transition-modal-description">${price} p/p</p>
                                </div>
                                </Fade>
                            </Modal>
                        </div>
                        
                    )
                })}
                
                
            </Carousel>
            </div>

        </Layout>
        </>
    )
}

export default Boats
