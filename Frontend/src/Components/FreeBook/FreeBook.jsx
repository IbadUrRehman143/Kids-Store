import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Cards/Cards';
function FreeBook() {
  const filterData1 = list.filter((data) => data.category === "A");
  const filterData2 = list.filter((data) => data.category === "B");
  const filterData3 = list.filter((data) => data.category === "C");
  const filterData4 = list.filter((data) => data.category === "D");
  const filterData5 = list.filter((data) => data.category === "E");
  const filterData6 = list.filter((data) => data.category === "F");
  const filterData7 = list.filter((data) => data.category === "G");
  const filterData8 = list.filter((data) => data.category === "H");
  const filterData9 = list.filter((data) => data.category === "I");
  const filterData10 = list.filter((data) => data.category === "J");
  const filterData11 = list.filter((data) => data.category === "K");
  const filterData12= list.filter((data) => data.category === "L");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 overflow-hidden">
        <div >
          <h1 className='font-bold text-xl pb-3 text-center md:text-left mt-2'>We Are Offered  To Kids Grocery </h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero vitae  inventore quas praesentium asperiores ex cum.Vero vitae magni alias minima soluta inventore quas praesentium asperiores ex cum.</p>

        </div>

        <div className=''>
          <h1 className='text-center md:text-left mt-3'>Category A </h1>
          <Slider {...settings} className='mb-12'>
            {filterData1.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='text-center md:text-left'>  Category B </h1>
          <Slider {...settings} className='mb-12'>
            {filterData2.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className="md:ml-4 text-center md:text-left"  >Category C </h1>
          <Slider {...settings} className='mb-12'>
            {filterData3.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className="md:ml-4 text-center md:text-left "  >Category D </h1>
          <Slider {...settings} className='mb-12'>
            {filterData4.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className="md:ml-4 text-center md:text-left "  >Category E </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData5.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className="md:ml-4 text-center md:text-left "  >Category F </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData6.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='md:ml-4 md:text-left  text-center '>Category G </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData7.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='md:ml-4 md:text-left  text-center '>Category H </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData8.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='md:ml-4 md:text-left text-center '>Category I </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData9.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='md:ml-4 text-center md:text-left'>Category J </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData10.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='text-center md:ml-4 md:text-left  '>Category K </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData11.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
        <div className=''>
          <h1 className='text-center md:ml-4 md:text-left '>Category L </h1><br />
          <Slider {...settings} className='mb-12'>
            {filterData12.map((item)=>(
              <Cards item={item} key ={item.id}/>
            ))}
          </Slider>
        </div>
    
      </div>
    </>
  )
}

export default FreeBook