import BlogSection from '@/components/BlogSection'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-4xl tracking-wider font-bold  text-center py-7 bg-gray-600 text-white'>
          <p className='animate-bounce'>
          Latest Blog
          </p>
        </h1>
        <BlogSection/>
    </div>
  )
}

export default page