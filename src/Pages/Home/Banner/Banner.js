import React from 'react';
import chair from '../../../assets/images/chair2.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12" >
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Explore the word</h1>
                    <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
                    <PrimaryButton>Get Started</PrimaryButton>
                </div >
            </div >
        </div >
    );
};

export default Banner;