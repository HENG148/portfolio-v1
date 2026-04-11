import LatestPosts from '@/src/components/LastPost'
import { BreadCrumb } from '@/src/components/ui/Breadcrump'
import { Suspense } from 'react'

export const dynamic = "force-dynamic"

export default function BlogSection() {
  return (
    <section
      // id='blog'
      className='w-full '
    >
      <div className='mx-auto max-w-7xl font-sans antialiased py-20 px-6 md:px-10'>
        <div className='mb-16 text-center'>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Blog
          </h2>
          <BreadCrumb postTitle="" />

          <div>
            <Suspense
              fallback={
                <div className="text-[#555] px-8 py-16 font-mono">
                  Loading posts…
                </div>
              }
            >
              <LatestPosts />
            </Suspense>
          </div>
        </div>
      </div> 
    </section>
  )
}
