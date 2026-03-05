import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
import News from "../News/News";
import Awards from "../Awards/Awards";
import Publications from "../Publications/Publications";
import FeaturedPublications from "../FeaturedPublications/FeaturedPublications";
import Services from '../Services/Services';
import VisitorMap from '../VisitorMap/VisitorMap';

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <News />
            <Awards />
            <FeaturedPublications />
            <Publications />
            <Services />
            <VisitorMap />
        </div>
    );
};

export default Container;
