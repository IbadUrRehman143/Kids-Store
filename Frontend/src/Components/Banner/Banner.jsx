import React from 'react'
import banner from "../../assets/Banner.png"
const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl gap-12 container my-4 mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
                <div className=" w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                    <div className='space-y-14'>
                        <h1 className='text-4xl font-bold '>Hello, welcomes here to learn somethings <span className='text-secondary hover:text-success cursor-pointer'>new everyday!!!!</span> </h1>
                        <p className='text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus ut veniam a! Temporibus nob
                            is et perferendis voluptate voluptatem exercitationem, doloribus sed. Praesentium, inventore voluptatem!</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow " placeholder="Email" />
                        </label>
                        <button className=' btn bg-secondary text-white duration-300 hover:bg-success font-bold py-3 px-10 '>Login </button>
                    </div>

                </div>
                <div className="order-1 w-full md:order-2 md:w-1/2">
                <img src={banner} className=' mt-20 md:mt-24 ' alt="" style={{height:"80%" , width:"92%"}}/>
                </div>
            </div>

        </>
    )
}

export default Banner