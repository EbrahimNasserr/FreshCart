import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Usercontext } from '../../Context/UserContext'
import Logo from '../../assets/logo.png'
import { CartContext } from '../../Context/CartContext';


export default function Navbar() {
  const [ isOpen,setIsOpen]=useState(false);
  let{userToken ,setUserToken ,setEmail}=useContext(Usercontext)
  let{data}=useContext(CartContext)
  let navigat=useNavigate()




  function logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName')
    setUserToken(null);
    navigat('login')

  }
  return <>
  <header className="fixed inset-x-0 top-0 z-[1111] bg-[#afcbff] shadow-md">
  <nav className="flex items-center justify-between p-6 py-2 lg:px-8" aria-label="Global">
    <div className="flex me-5">
      <NavLink to={'/'} className="">
        <img className="w-16" src={Logo} alt='maui logo' />
      </NavLink>
    </div>
    <div className="flex lg:hidden">
      <button onClick={()=> setIsOpen(true)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    {userToken &&     <div className="hidden lg:flex flex-grow justify-end me-20 gap-x-6">
      <NavLink to={'/'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Home</NavLink>
      <NavLink to={'/categories'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Categories</NavLink>
      <NavLink to={'/brands'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Brands</NavLink>
      <NavLink to={'/products'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Products</NavLink>
      <NavLink to={'/allorders'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Orders</NavLink>
      <NavLink to={'/wishlist'} className={({ isActive }) => `text-sm/6 font-bold hover:text-[#f9fbf2] ${isActive ? "text-white " : "text-[#0e1c36]"}`}>Wishlist</NavLink>
    </div>}
    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">

    {userToken && <NavLink to={'cart'} className='group mx-4 mt-1'> <span className="relative inline-block fa-stack fa-1x ">
    <i className="fa fa-shopping-cart text-3xl text-[#726EEB] group-hover:text-white" />
    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-[#726EEB] bg-white border-2 border-[#726EEB] group-hover:text-white group-hover:border-white group-hover:bg-[#726EEB] rounded-full  -mt-2">
    {data?.numOfCartItems}
    </span></span></NavLink> }
    {userToken && <NavLink to={'profile'}><button className='bg-[#4F46E5] w-9 h-9 me-3 text-[#fff] rounded-full hover:bg-[#f9fbf2] hover:text-[#0e1c36] duration-100'><i className="fa-regular fa-user"></i></button></NavLink>}

      {userToken ? <span onClick={logout} className='text-sm/6 font-semibold text-gray-900 mx-2'><button className='bg-[#4F46E5] p-2 m-0 text-[#fff] rounded-lg hover:bg-[#f9fbf2] hover:text-[#0e1c36] duration-100'>Logout</button></span> :
            <NavLink to={'login'} className="text-sm/6 font-semibold text-gray-900 m-0"><button className='bg-[#4F46E5] p-2 m-0 text-[#fff] rounded-lg hover:bg-[#f9fbf2] hover:text-[#0e1c36] duration-100'>Log in / Sign up</button></NavLink>}
    </div>
  </nav>
  {/* Mobile menu, show/hide based on menu open state. */}
  <div className={isOpen ? 'lg:hidden' : 'hidden'} role="dialog" aria-modal="true">
    {/* Background backdrop, show/hide based on slide-over state. */}
    <div className="fixed inset-0 z-50" />
    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#d7f9ff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <NavLink to={'/'} className="-m-1.5 p-1.5">
          <img className="h-8 w-auto" src={Logo} alt='maui logo' />
        </NavLink>
        <button onClick={()=> setIsOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
        {userToken && <div className="space-y-2 py-6">
            <NavLink onClick={()=> setIsOpen(false)} to={'/'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Home</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/cart'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Cart <span className='text-[#4F46E5] inline-flex items-center justify-center w-5 h-5 text-xs font-bold  bg-white border-2 border-[#726EEB] rounded-full m-0 p-0'>{data?.numOfCartItems}</span></NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/categories'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Categories</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/brands'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Brands</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/products'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Products</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/allorders'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Orders</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/wishlist'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">WishList</NavLink>
            <NavLink onClick={()=> setIsOpen(false)} to={'/profile'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Profile</NavLink>
          </div>}
          <div className="py-6">
          {userToken ? <span onClick={() => { logout(); setIsOpen(false); }}  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]'>Logout</span> :
            <NavLink onClick={()=> setIsOpen(false)} to={'login'} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-[#f9fbf2]">Log in / Sign up</NavLink>}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </>
}
