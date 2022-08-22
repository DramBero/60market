import { Container, Divider, List, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartProduct } from '../components'

export default function Cart({ products }) {
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.price)

    const priceWithDiscount = (price, discount) => 
        Math.floor(price - (price * discount * 0.01)
    )

    const countItems = (items) => {
        const groupedItems = {}
        items.forEach(item => 
            {groupedItems[item] = (groupedItems[item] || 0) + 1 }
        )
        return groupedItems
    }

    const productAmount = (obj) => countItems(cartItems)[obj["id"]]
    const productPriceTotal = (obj) => priceWithDiscount(countItems(cartItems)[obj["id"]] * obj["price"], obj["discount"])
    const productPriceSingle = (obj) => priceWithDiscount(obj["price"], obj["discount"])


    return (
        <Container disableGutters>
            <Paper sx={{padding: 1, margin: "100px 0 50px 0"}}>
            <Typography variant="h4" sx={{margin: 2}}>Корзина</Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper1' }}>
                {Object.keys(countItems(cartItems)).map(cartItem => 
                    products.filter(productObject => 
                        productObject["id"] === parseInt(cartItem)).map(obj => 
                    <>
                    <CartProduct 
                        key={obj["id"]} 
                        id={obj["id"]} 
                        name={obj["name"]} 
                        amount={productAmount(obj)} 
                        priceTotal={productPriceTotal(obj)}
                        priceSingle={productPriceSingle(obj)}
                    />
                    <Divider />
                    </>

                ))}
                </List>
                <Typography sx={{padding: 2, textAlign: "right"}}>Итого: {totalPrice} ₽</Typography>
            </Paper>
        </Container>
    )
}
