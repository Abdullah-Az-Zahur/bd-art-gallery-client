import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BD Art Gallery | Home</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;