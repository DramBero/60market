import { Chip, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { ProductBlock } from '../components'
import '@fontsource/roboto/400.css';

function Home({ products }) {

    return (
        <div className="section-wrapper">
            
            <nav>
                <ul className="categories">
                    <li className="categories-element">
                        <Chip label="Ножи и мультитулы" />
                    </li>
                    <li className="categories-element">
                        <Chip label="Походы и путешествия" />
                    </li>
                    <li className="categories-element">
                        <Chip label="Одежда и аксессуары" />
                    </li>
                    <li className="categories-element">
                        <Chip label="Электроника" />
                    </li>
                </ul>
            </nav>

            <section className="section">
                <Paper elevation={2}>
                    <Typography variant="h5" sx={{padding: 2}}>Новые поступления</Typography>
                    <Divider />
                    <div className="shelf">

                        {products.slice(-5).map((obj) => 
                            <ProductBlock key={obj.id} {...obj}/>
                        )}

                    </div>
                </Paper>
            </section>

            <section className="section">
                <Paper elevation={2}>
                    <Typography variant="h5" sx={{padding: 2}}>Рекомендуем</Typography>
                    <Divider />
                    <div className="shelf">

                        {products.map((obj) => 
                            <ProductBlock key={obj.id} {...obj}/>
                        )}

                    </div>
                </Paper>
            </section>
        </div>
    )
}

export default Home