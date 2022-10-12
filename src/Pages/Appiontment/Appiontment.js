import React, { useState } from 'react';
import AppiontmentBanner from '../AppiontmentBanner/AppiontmentBanner';
import Footer from '../Shared/Footer/Footer';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appiontment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppiontmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
            <Footer />
        </div>
    );
};

export default Appiontment;