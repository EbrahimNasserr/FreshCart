import React, { useContext } from 'react'
import { WishlistContext } from '../WishListContext/WishListContext'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

export default function WishList() {
 
  const{ getWishList, addProductToWishList, data, isLoading, isError, deleteWishListItem }=useContext(WishlistContext)
  const {addProductToCart}=useContext(CartContext)



return (
  <>
{isLoading? <Loader/> :
  <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
    <h2 className=" text-3xl  mb-10 font-bold text-[#AFCBFF] capitalize  ">My WishList</h2>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
     {data.data.map((item)=>  <div key={item.id} className=" border p-2 rounded-lg">
        <Link to={`/productsdetails/${item.id}`}> <img src={item.imageCover} alt={item.title} className="aspect-square w-full rounded-lg bg-gray-200 object-cover hover:opacity-75 xl:aspect-7/8" /></Link>
        <h3 className="mt-4 text-md text-main">{item.category.name}</h3>
        <h3 className="mt-1  text-xl text-black">{item.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className='flex justify-between items-center my-1'>
        <p className="mt-1 text-xl font-medium text-gray-900">{item.price} EGP</p>
        <i className='fa fa-star text-yellow-500'><span className='text-black font-medium ps-1'>{item.ratingsAverage}</span></i>
        </div>
        <div className='flex justify-between items-center mt-2'>
        <button onClick={()=> addProductToCart(item.id)} type="button" className="focus:outline-none text-white bg-[#4F46E5]  hover:bg-[#726EEB] font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Add To Cart</button>
        <button onClick={()=>deleteWishListItem(item.id)} type="button" className="focus:outline-none bg-red-500 text-white hover:text-red-500 hover:bg-white border-red-500 border font-medium rounded-lg text-sm px-5 py-2.5 mb-2"><i className='fa fa-trash '></i></button>
        </div>
      </div> )}
    </div>
  </div>
</div>}
  </>
);
}