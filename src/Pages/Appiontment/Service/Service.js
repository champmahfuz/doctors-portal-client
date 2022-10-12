import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div className="card-body ">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p >
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-500'>No slot available</span>
                    }
                </p>
                <p >{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn btn-secondary text-white uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;