import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12' >
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' img={clock} />
            <InfoCard cardTitle='Opening Location' bgClass='bg-accent' img={marker} />
            <InfoCard cardTitle='Contact Us' bgClass='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' img={phone} />
        </div >
    );
};

export default Info;