import React from 'react'

function Cards({item}) {
    // console.log(item)
    return (
        <>
            <div className="mt-5 my-5 p-3 ">
                <div className="card   bg-base-100  ml-2 md:ml-0  shadow-xl hover:scale-95 " style={{width:"320px"}}>
                    <figure>
                        <img
                            src={item.image}
                            alt="image"  />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title hover:text-success cursor-pointer">
                            {item.name}
                            <div className="badge badge-secondary hover:border-none cursor-pointer hover:bg-success">{item.category}</div>
                        </h2>
                        {/* <p>{item.title}</p> */}
                        <div className="card-actions justify-between p-2">
                            <div className="border[2px black] bg-secondary cursor-pointer  rounded-full py-4 px-5 duration-300 text-white  hover:bg-success">{item.price}</div>
                            <div className="border[2px black] bg-secondary cursor-pointer mt-2  rounded-full py-2 px-5 duration-300 text-white hover:bg-success">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cards