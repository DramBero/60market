import { IconButton, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function CartProduct({id, name, amount, priceTotal, priceSingle}) {
    const dispatch = useDispatch()
    const productAmountIncrement = (obj) => dispatch(addToCart({productId: id, productPrice: priceSingle}))
    const productAmountDecrement = (obj) => dispatch(removeFromCart({productId: id, productPrice: priceSingle}))

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton role={undefined} dense sx={{paddingRight: 4}}>
                <ListItemText 
                    id={id} 
                    primary={name} 
                    sx={{minHeight: "50px", display: "flex", alignItems: "center", wordBreak: "break-all"}}
                />
                    <div className="cart-actions">
                        <IconButton 
                            role={undefined} 
                            onClick={productAmountDecrement} 
                        >
                            <IndeterminateCheckBoxIcon color="secondary" sx={{fontSize: 30}}/>
                        </IconButton>

                        <Typography sx={{
                            width: 20, 
                            marginLeft: 1, 
                            marginRight: 1
                            }}
                        >
                            {amount}
                        </Typography>

                        <IconButton
                            role={undefined} 
                            onClick={productAmountIncrement} 
                        >
                            <AddBoxIcon color="secondary" sx={{fontSize: 30}}/>
                        </IconButton>
                        
                        <Typography 
                            sx={{width: 30, marginLeft: 1, whiteSpace: "nowrap", textAlign: "right"}}
                        >
                            {priceTotal} ₽
                        </Typography>
                    </div>
                </ListItemButton>
        </ListItem>
    )
}

export default CartProduct
