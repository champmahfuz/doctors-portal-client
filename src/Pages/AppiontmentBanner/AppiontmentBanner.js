import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppiontmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bg})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist' />
                <div className='gap-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppiontmentBanner;