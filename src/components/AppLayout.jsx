import React from 'react'

export default function AppLayout({children}) {
  return (
    <div className="
      container-app 
      grid grid-cols-1 
      place-content-center 
      place-items-center
    ">
      <main className="
        overflow-hidden
        py-8
        px-6
        w-full
        h-screen
        bg-gray-50
        bg-[url('/public/bg-opthree.svg')]
        bg-contain
        bg-no-repeat
        bg-bottom
        md:max-w-lg
        md:w-5/6
        md:rounded-xl 
        md:shadow-lg">
        {children}
      </main>
    </div>
  )
}
