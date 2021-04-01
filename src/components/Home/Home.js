import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeMenu from "./HomeMenu";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import About from "./About";
import Help from "./Help";
import FooterContact from "./FooterContact";

const Home = () => {
    return (
        <>
            <HomeMenu />
            <HomeHeader/>
            <ThreeColumns/>
            <FourSteps/>
            <About/>
            <Help/>
            <FooterContact/>
        </>
    );
};

export default Home;