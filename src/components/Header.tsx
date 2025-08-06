import { useTheme } from '@/context/theme-provider';
import { Moon, Sun } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  
   const {theme, setTheme} = useTheme();
   const isDark = theme === 'dark'

  return (
  <header className='sticky w-full z-50 top-0 border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>
    <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link to={'/'}>
        <img 
        className='h-14'
        src={ isDark ? '/DarkMode.png' : '/LightModes.png'} alt='LogoMode' />
        </Link>
  
    <div>
        {/** For Search */}
        {/** For Toggle Theme */}
        <div
        className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}
        onClick={() => setTheme(isDark ? "light" : "dark")}>{
      isDark ? <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' /> : <Moon className='h-6 w-6 text-rose-500 rotate-0 transition-all' /> 
}
</div>
    </div>
      </div>
  </header>
  )
}

export default Header