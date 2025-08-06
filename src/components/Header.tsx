import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
  <header className='sticky w-full z-50 top-0 border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>
    <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link to={'/'}>
        <img 
        className='h-14'
        src='/DarkMode.png' alt='darkMode' />
        </Link>
  
    <div>
        {/** For Search */}
        {/** For Toggle Theme */}
    </div>
      </div>
  </header>
  )
}

export default Header