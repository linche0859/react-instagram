import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import IGStoryItem from './Item'
import 'swiper/css'

const IGStory: React.FC = () => {
  const data = Array.from({ length: 10 }).map((item, index) => {
    return { id: index, name: 'che.lin', avatar: '/images/avatars/a1.png' }
  })

  return (
    <div className="h-[110px] rounded-md shadow-md lg:my-8">
      <Swiper spaceBetween={22} slidesPerView={'auto'} className="!px-[11px]">
        {data?.map((item) => {
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
