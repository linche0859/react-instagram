import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useGetIGStoriesQuery } from '@/services/home-service'
import Loading from '@/components/Loading'
import IGStoryItem from './Item'

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery('')

  return (
    <div className="rounded-md shadow-md lg:my-8">
      {isLoading && (
        <div className="flex h-[110px] items-center justify-center">
          <Loading />
        </div>
      )}
      <Swiper spaceBetween={22} slidesPerView={'auto'} className="!px-[11px]">
        {!isLoading &&
          data?.map((item) => {
            const { id, name, avatar } = item
            return (
              <SwiperSlide className="!w-auto" key={id}>
                <IGStoryItem name={name} avatar={avatar} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default IGStory
