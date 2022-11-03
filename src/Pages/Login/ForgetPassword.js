import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ForgetPassword = () => {

    /*   const forgetLoad = async (req, res) => {
          try {
              res.render('forget');
          } catch (error) {
              console.log(error.message);
          }
      } */




    const { register, formState: handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Forget Password</h2>
                    <form >

                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    }
                                },
                                    {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                            />

                        </div>

                    </form>

                    <button
                        className="btn btn-outline mb-2" type='submit'>Send OTP</button>

                    <button className="btn btn-outline"><Link to='/'>Back</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;