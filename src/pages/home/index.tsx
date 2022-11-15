import React from 'react'
import { useGetIGPostsQuery } from '@/services/home-service'
import Loading from '@/components/Loading'
import IGHeader from '@/components/IGHeader'
import IGContainer from '@/components/IGContainer'
import IGStory from './components/IGStory'
import IGPost from './components/IGPost'
import IGProfile from './components/IGProfile'

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery('')

  return (
    <>
      {isLoading && (
        <div className="mt-20 flex justify-center">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
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
