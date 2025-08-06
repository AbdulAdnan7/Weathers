import React, { type PropsWithChildren } from 'react'

const Layout = ( { children }: PropsWithChildren ) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        header
        <main className='min-h-screen mx-auto px-4 py-8 container'>
      {children}

        </main>
       <footer className='border-t backdrop-blur py-12'>
        <div className='container mx-auto px-4 text-center'>
            <p>Made with love by Techxom</p>
        </div>
       </footer>
    </div>
  )
}

export default Layout
