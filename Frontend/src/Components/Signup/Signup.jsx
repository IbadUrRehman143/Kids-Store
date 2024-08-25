import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen items-center justify-center   '>
             <div className="w-[600px]">
                        <div className="modal-box">
                            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            
                            <h3 className="font-bold text-2xl ">Sigup</h3>
                            
                           <div className="mt-5 space-y-3 ">
                           <div >
                                <span>Name</span>
                                <br />
                                <input {...register("name", { required: true })} type="name" name="name" placeholder='Enter Your Name ' className='w-96 px-3 py-2 border rounded-md outline-none ' />
                                <br />
                           </div>
                           <div >
                                <span>Email</span>
                                <br />
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Enter Your Email ' className='w-96 px-3 py-2 border rounded-md outline-none ' />
                                {errors.email && <span>This field is required</span>}
                                <br />
                           </div>
                            <div className='mt-6 space-y-3'>
                                <span>Password</span>
                                <br />
                                <input {...register("password", { required: true })} type="text" name="password " placeholder='Enter Your password ' className='w-96 px-3 py-2 border rounded-md outline-none ' />
                                {errors.password && <span>This field is required</span>}
        
                            </div>
                            <div className="mt-5  flex justify-between">
                            <Link to="" className="bg-secondary text-white hover:bg-success  duration-300 py-2 px-4 rounded-md cursor-pointer ">Signup</Link>
                            <p className='mr-20'>Have account <Link to="/" onClick={()=>document.getElementById("my_modal_3").showModal()} className='underline text-blue-700'>Login</Link></p>
                            </div>
                            <div className="">
                            <Link to="" className=" btn btn-outline btn-secondary text-white  hover:btn-success duration-300 py-2 px-4 mt-5 rounded-3xl cursor-pointer ">Continue With Google</Link><br />
                            <Link to="" className=" btn btn-outline btn-secondary text-white  hover:btn-success duration-300 py-2 px-4 mt-5 rounded-3xl cursor-pointer ">Continue With Fcaebook</Link><br />
                            <Link to="" className=" btn btn-outline btn-secondary text-white  hover:btn-success duration-300 py-2 px-4 mt-5 rounded-3xl cursor-pointer ">Continue With Instagram</Link><br />
                            <Link to="" className=" btn btn-outline btn-secondary text-white  hover:btn-success duration-300 py-2 px-4 mt-5 rounded-3xl cursor-pointer ">Continue With TikTok</Link>

                            </div>
                           </div>
                           </form>
                        </div>
                    </div>
    
        </div>
    </>
  )
}

export default Signup