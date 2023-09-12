import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';
import './index.css';

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Laurels />
        <FindUs />
        <Chef />
        <Intro />
        <Gallery />
        <Footer />
    </div>
);

export default App;