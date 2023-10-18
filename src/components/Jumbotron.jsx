import React from "react"

const Jumbutron = (props) => {
    return (
      <div className="bg-gray-700 flex items-center py-10 bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className='max-w-md mx-auto w-full'>
          <h1 className='text-white text-center text-2xl font-bold mb-5'>Find Images</h1>
          {props.children}
        </div>
      </div>
    )
  }
export default Jumbutron