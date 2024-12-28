import BlogSection from '@/components/BlogSection'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-3xl font-semibold  text-center py-9 bg-gray-600 text-white'>Latest Blog</h1>
        <BlogSection/>
    </div>
  )
}

export default page