import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActions, Rating, Typography, CardActionArea, Paper, IconButton } from '@mui/material'
import '@fontsource/roboto/400.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function priceFormat(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function ProductBlock({ id, name, images, price, discount }) {
    const [value, setValue] = React.useState(3)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items)
    const priceWithDiscount = Math.floor(price - (price * discount * 0.01))

    return (
            <Card 
            variant="outlined"
            sx={{
                margin: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between'
                }}>
                <Paper elevation={2}>
                <CardActionArea sx={{flexGrow: 1}}>
                    <Link to={{ pathname: `/product/${id}` }}>
                        <CardMedia
                            component="img"
                            height="170px"
                            width="170px"
                            image={images[0]}
                            alt=""
                        />
                        <CardContent>
                            <Typography height="60px" variant="body2" color="text.primary">
                            {name}
                            </Typography>
                        </CardContent>
                    </Link>
                    <div className="card-info">
                        <Rating
                        size="small"
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {priceFormat(priceWithDiscount)} ₽
                        </Typography>
                    </div>
                </CardActionArea>

                <CardActions sx={{
                    display: 'flex', 
                    justifyContent: 'space-between'
                    }}>
                    {cart.includes(id) ?
                    <>
                        <IconButton color="primary"
                        onClick={() => dispatch(removeFromCart({productId: id, productPrice: priceWithDiscount}))}
                        >
                            <IndeterminateCheckBoxIcon />
                        </IconButton>
                        <Typography variant="body1">
                            {cart.filter((item) => (item === id)).length}
                        </Typography>
                        <IconButton color="primary"
                        onClick={() => dispatch(addToCart({productId: id, productPrice: priceWithDiscount}))}
                        >
                            <AddBoxIcon />
                        </IconButton>
                    </> :
                    <IconButton color="primary" sx={{margin: "0 auto"}}
                    onClick={() => dispatch(addToCart({productId: id, productPrice: priceWithDiscount}))}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>

                    }
                </CardActions>
                </Paper>
            </Card>
    )
}

export default ProductBlock
