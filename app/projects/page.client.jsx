'use client'

import { Skeleton } from '@/components/ui/skeleton'
import dynamic from 'next/dynamic'

const ProjectSection = dynamic(() => import('@/components/projects/ProjectSection'), {
  ssr: false,
  loading: () => (
    <>
      <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
        {[1, 2, 3, 4, 5].map((key, index) => (
          <Skeleton key={key + index} className="h-8 w-36" />
        ))}
      </div>

      <div className="mt-7 flex w-full items-center justify-between">
        <Skeleton className="size-[54px] rounded-full max-sm:hidden" />

        <Skeleton className="h-[646px] w-3/4 rounded-md max-sm:w-full" />

        <Skeleton className="size-[54px] rounded-full max-sm:hidden" />
      </div>
    </>
  ),
})

export default ProjectSection
