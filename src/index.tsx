import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import LoginOrCreateAccount from './components/LoginOrCreateAccount/LoginOrCreateAccount';
import BemVindo from './components/BemVindo/BemVindo';
import Divisor from './components/Divisor/Divisor';
import Carousel from './components/Carousel/Carousel';
import Services from './components/Services/Services';
import BestOpportunities from './components/BestOpportunities/BestOpportunities';
import ModalProduct from './components/ModalProduct/ModalProduct';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

export const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (localStorage.getItem("firstVisit")) {
    localStorage.setItem('usersJson', JSON.stringify(require('./data/users.json')));
}

root.render(
    <React.StrictMode>
    <Header />
    {/*<Carousel />*/}
    {/*<Services />*/}
    {/*<BestOpportunities />*/}
    {/*<ModalProduct />*/}
    {/*<Footer />*/}
    <Divisor>
        <LoginOrCreateAccount />
        <BemVindo />
    </Divisor>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
