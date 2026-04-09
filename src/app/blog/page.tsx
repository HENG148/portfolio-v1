import LatestPosts from '@/src/components/LastPost'
import React, { Suspense } from 'react'

export default function BlogSection() {
  return (
    <section
      id='blog'
      className='w-full '
    >
      <div className='mx-auto max-w-7xl font-sans antialiased py-20 px-6 md:px-10'>
        <div className='mb-16 text-center'>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Blog
          </h2>


          <div>
            <Suspense fallback={<div style={{ color: "#555", padding: "4rem 2rem" }}>Loading posts…</div>}>
              <LatestPosts />
            </Suspense>
          </div>
        </div>
      </div> 
    </section>
  )
}
