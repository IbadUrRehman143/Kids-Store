import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <>
            <div >
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                       
                        <h3 className="font-bold text-2xl ml-8 ">Login</h3>
                       <div className="mt-5 space-y-3 ml-8">
                        <span>Email</span>
                        <br />
                        <input type="email" {...register("email", { required: true })}  name="email" placeholder='Enter Your Email ' className='w-96 px-3 py-2 border rounded-md outline-none ' />
                        {errors.email && <span>This field is required</span>}
                        <br />
                        <div className='mt-6 space-y-3'>
                            <span>Password</span>
                            <br />
                            <input type="text" {...register("password", { required: true })}  name="password " placeholder='Enter Your password ' className='w-96 px-3 py-2 border rounded-md outline-none ' />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="mt-5 ml-5 flex justify-between">
                        <Link to="" className="bg-secondary text-white hover:bg-success  duration-300 py-2 px-4 rounded-md cursor-pointer "  >Login</Link>
                        <p className='mr-14'>Not registered? <Link to="/signup" className='underline text-blue-700'>Signup</Link></p>
                        </div>
                       </div>
                       </form>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Login