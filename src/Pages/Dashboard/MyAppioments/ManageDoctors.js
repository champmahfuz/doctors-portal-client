// import React from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../../Shared/Loading/Loading';

// const ManageDoctors = () => {
//     const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => res.json));

//     if (isLoading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//             <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
//         </div>
//     );
// };

// export default ManageDoctors;

import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <br />
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;