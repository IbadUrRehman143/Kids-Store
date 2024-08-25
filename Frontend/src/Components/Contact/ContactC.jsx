import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const ContactC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl  container mt-16 mx-auto md:px-20 px-4">
        <div >
          <div className='py-8 '>
            <label>
              <span className=''>Name</span> <br />
              <input
                type="text"
                placeholder=" Enter Your Full Name"
                className="input  input-secondary w-full md:w-3/6" />
            </label>
          </div>
          <div  className='py-8 '>
            <label>
              <span className=''>Phone Number</span> <br />
              <input
                type="text"
                placeholder="Enter your Phone Number with Country Code"
                className="input input-bordered input-secondary w-full md:w-3/6 " />
            </label>
          </div>
          <div  className='py-8 '>
            <label>
              <span className=''>Email</span> <br />
              <input
                type="text"
                placeholder="Enter Your Email "
                className="input input-bordered input-secondary w-full md:w-3/6" />
            </label>
          </div>
          <div  className='py-8 '>
            <label>
              <span className=''>Message</span> <br />
              <textarea
                type="text"
                placeholder="Enter your Message"
                className="textarea textarea-secondary w-full md:w-3/6" />
            </label>
          </div>
  
          <Link to="" className=" btn btn-outline btn-secondary  text-white hover:btn-success duration-300 py-2 px-10 rounded-md cursor-pointer ">Send</Link>
  
        </div>
      </div>
    </>
  )
}

export default ContactC