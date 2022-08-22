import { Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from '../redux/cartSlice';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function priceFormat(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function ProductPage({ products }) {
    const { id } = useParams();
    const { price, discount, name, description, images } = products[id]
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items)
    const priceWithDiscount = Math.floor(price - (price * discount * 0.01))

    return (
        <Container>
            <Paper elevation={1} sx={{padding: 1, margin: "100px 0 50px 0"}}>
                <div className="details">
                    <div className="details-gallery">
                        <img className="details-gallery__img" src={ images[0] } alt="" />
                    </div>
                    <div className="details-info">
                        <Typography variant="h4">{ name }</Typography>
                        <div className="details-info__price">
                            <span className="product__price">{priceFormat(Math.floor(price - (price * discount * 0.01)))} ₽</span>
                            <span className="product__oldprice">{discount ? priceFormat(price) + ' ₽' : ''}</span>
                        </div>
                        <Typography variant="body1">{ description }</Typography>

                        {cart.includes(parseInt(id)) ?
                        <Box sx={{display: "flex", alignItems: "center", textAlign: "center"}}>
                            <IconButton color="primary"
                            onClick={() => dispatch(removeFromCart({productId: parseInt(id), productPrice: priceWithDiscount}))}
                            >
                                <IndeterminateCheckBoxIcon />
                            </IconButton>
                            <Typography 
                                variant="body1" 
                                sx={{
                                    width: 20, 
                                    marginLeft: 1, 
                                    marginRight: 1
                                }}
                            >
                                {cart.filter((item) => (item === parseInt(id))).length}
                            </Typography>
                            <IconButton color="primary"
                            onClick={() => dispatch(addToCart({productId: parseInt(id), productPrice: priceWithDiscount}))}
                            >
                                <AddBoxIcon />
                            </IconButton>
                        </Box> :
                        <Button size="large" 
                        onClick={() => dispatch(addToCart({productId: parseInt(id), productPrice: priceWithDiscount}))}
                        >
                            В корзину
                        </Button>

                        }

                    </div>
                </div>
            </Paper>
        </Container>
    )
}

export default ProductPage