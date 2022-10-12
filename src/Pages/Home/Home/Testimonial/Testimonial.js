import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from '../../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'Good Service. Doctor are very specializes',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Joe Bieden',
            review: 'Enviroment is very good. Doctors are friendly',
            location: 'verginia',
            img: people2
        },
        {
            _id: 3,
            name: 'Barak Obama',
            review: 'Feers are resoniable. Everything is neat and clean',
            location: 'pencilvenia',
            img: people3
        }
    ];
    return (
        <section className='my-28 p-5' >
            <div className='flex justify-between' >
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl' > What are Patients Says</h2 >
                </div >
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div >
        </section >
    );
};

export default Testimonial;