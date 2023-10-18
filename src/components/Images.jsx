import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {

  const {response,isLoading,searchImage} = useContext(ImageContext);
  return (
    <>
    <h1 className='text-3xl font-semibold text-gray-900 tracking-tight capitalize text-center mt-4'>Results for {searchImage || 'cars'}</h1>
    <div className='grid sm:grid:cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-6xl mx-auto px-4'>
       {isLoading ? <Skeleton item={12}/> : response.map((data,key) => <Image key={key} data={data} />)}
    </div>
    </>
  )
}

export default Images
