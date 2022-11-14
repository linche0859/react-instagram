import React from 'react'
import IGHeader from '@/components/IGHeader'
import IGContainer from '@/components/IGContainer'
import IGStory from './components/IGStory'
import IGPost from './components/IGPost'
import IGProfile from './components/IGProfile'

const IGPostList: React.FC = () => {
  const data = [
    {
      id: 1,
      location: '布魯斯前端',
      account: 'bruce_1234',
      avatar: '/images/avatars/a1.png',
      photo: '/images/posts/main1.png',
      likes: 999,
      description: '我的老天鵝！',
      hashTags: '#鵝鵝',
      createTime: '1 HOURS AGO'
    },
    {
      id: 2,
      location: '布魯斯前端',
      account: 'bruce_1234',
      avatar: '/images/avatars/a1.png',
      photo: '/images/posts/main1.png',
      likes: 999,
      description: '我的老天鵝！',
      hashTags: '#鵝鵝',
      createTime: '1 HOURS AGO'
    }
  ]

  return (
    <>
      {data.map((item) => {
        const {
          id,
          location,
          account,
          avatar,
          photo,
          likes,
          description,
          hashTags,
          createTime
        } = item
        return (
          <IGPost
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        )
      })}
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="lg:flex lg:justify-center">
          <div className="lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  )
}

export default Home
