import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
import Cards from "../../Components/Cards/Cards"

function Course() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4">
        <div className="items-center mt-28  justify-center">
          <h1 className='text-center text-2xl md:text-4xl py-7'>We're Delighted to have you <span className='text-secondary hover:text-success cursor-pointer '>Here ! :--)</span></h1>
          <p className='mt-12 '>
          I've developed a real application focused on home delivery services, initially catering to books. This app is designed to provide a seamless experience for users looking to get books delivered to their doorstep. By incorporating a user-friendly interface, customers can easily browse through a wide variety of books, select their favorites, and place an order with just a few clicks. The delivery system is optimized for efficiency, ensuring that the books reach the customers swiftly and safely. Additionally, I've integrated features like order tracking, payment gateways, and customer support to enhance the overall user experience. The app is built to scale, allowing for the inclusion of other items in the future, expanding beyond books to cater to a broader market. My goal is to create a reliable and efficient delivery service that meets the needs of users looking for convenience and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {
            list.sort((a, b) => a.category.localeCompare(b.category)).map((item, ibad) => (
              <Cards item={item} key={ibad}/>
            ))
          }
        </div>
         <div className='flex justify-between'>
            <Link to ="/about" className=';btn text-white bg-secondary hover:bg-success mt-5 px-5'>Back</Link>
            <Link to ="/search" className='btn text-white bg-secondary hover:bg-success mt-5 px-5'>Next</Link>
         </div>
      </div>
      <Footer />

    </>
  )
}

export default Course