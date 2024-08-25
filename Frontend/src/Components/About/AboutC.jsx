import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Heading = ({ heading, peragraph }) => {
  return (
    <div className="">
      <div className='md:flex md:justify-between mt-14 gap-5'>
        <div className="flex items-center ">
          <div className='md:w-4 md:bg-secondary md:h-4'></div>
          <div className="w-12 md:h-1 md:bg-secondary"></div>
        </div>
        <h1 className='text-center flex-1 text-2xl md:text-4xl text-extrabold py-3'>{heading}</h1>
        <div className="flex items-center flex-1">
          <div className="w-12 md:h-1 md:bg-secondary"></div>
          <div className='md:w-4 md:bg-secondary md:h-4'></div>
        </div>
      </div>
      <p className='text-xl mt-5'>{peragraph}</p>
    </div>
  )
}




const AboutC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mt-48  mx-auto md:px-20 px-4 ">
        <Heading heading="Welcome to our Bookstore!!" peragraph="
        We are dedicated to bringing the world of literature closer to you with just a few clicks. Our mission is to provide a diverse range of books, from timeless classics to contemporary bestsellers, all delivered directly to your doorstep. Whether you're an avid reader, a student, or someone looking for a specific genre, our store offers a wide selection to cater to every taste and need." />

        <Heading heading="Educational Resources:" peragraph="In addition to a wide range of literature, we offer comprehensive educational resources for students. Our store provides school and college books, including KG to 12 notes, practical books, guides, and diaries. These resources are designed to support students throughout their academic journey, making it easier for them to access the materials they need for success." />

        <Heading heading="Our Story:" peragraph="Our bookstore was born out of a love for reading and a desire to make books accessible to everyone, everywhere. What began as a small idea has grown into a thriving online community for book lovers. We started with a simple goal: to connect readers with the books they love, and we've been expanding ever since." />

        <Heading heading="Our Values and Future Goals:" peragraph="At our bookstore, we are committed to providing quality literature that is accessible to all, fostering a love for reading in every home. Our core values of customer satisfaction, diversity, and accessibility guide everything we do. We are also dedicated to expanding our impact and services. 
        
         '''Our future goals include not only expanding our book collection and services but also enhancing our offerings by launching an online stationery app before 2025. This new platform will provide a convenient way to access a wide range of stationery products, further enriching our customers' experience and supporting their educational and professional needs.'''"/>

        <Heading heading="Free for the Poor and Orphaned:" peragraph="At our bookstore, we believe that everyone should have access to the joy of reading, regardless of their financial situation. That’s why we offer free books to the poor and orphaned, ensuring that literature and education are accessible to those who need them the most. We are proud to support these vulnerable groups and provide them with the opportunity to explore the world of books." />
      <div className="flex justify-between">
      <Link to ="/" className='btn text-white bg-secondary hover:bg-success mt-5 px-5'>Back</Link>
      <Link to ="/book" className='btn text-white bg-secondary hover:bg-success mt-5 px-5'>Next</Link>
      </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutC