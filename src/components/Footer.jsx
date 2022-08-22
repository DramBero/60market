import { Paper } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <Paper elevation={0}>
        <footer className="footer">
            <div className="inner-wrapper footer-wrapper">
            <div className="footer-section">
                <h5 className="footer-section__header">Информация</h5>
                <ul className="footer-section-list">
                    <li className="footer-section-list__element">О компании</li>
                    <li className="footer-section-list__element">Оплата и доставка</li>
                    <li className="footer-section-list__element">Условия партнерства</li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-section__header">Служба поддержки</h5>
                <ul className="footer-section-list">
                    <li className="footer-section-list__element">Связаться с нами</li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-section__header">Дополнительно</h5>
                <ul className="footer-section-list">
                    <li className="footer-section-list__element">Подарочные сертификаты</li>
                    <li className="footer-section-list__element">Партнерская программа</li>
                </ul>
            </div>
            <div className="footer-section">
                <h5 className="footer-section__header">Личный кабинет</h5>
                <ul className="footer-section-list">
                    <li className="footer-section-list__element">Личный кабинет</li>
                    <li className="footer-section-list__element">История заказов</li>
                    <li className="footer-section-list__element">Закладки</li>
                    <li className="footer-section-list__element">Рассылка</li>
                </ul>
            </div>
            </div>
        </footer>
        <div className="copyright">60market.ru © 2022</div>
        </Paper>
    )
}

export default Footer