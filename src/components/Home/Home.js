import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeMenu from "./HomeMenu";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import About from "./About";
import WhoDoWeHelp from "./WhoDoWeHelp";
import FooterContact from "./FooterContact";

const Home = () => {
    return (
        <>
            <HomeMenu />
            <HomeHeader/>
            <ThreeColumns/>
            <FourSteps/>
            <About/>
            <WhoDoWeHelp/>
            <FooterContact/>
        </>
    );
};

export default Home;