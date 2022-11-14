import React from 'react'
import IGHeader from '@/components/IGHeader'
import IGContainer from '@/components/IGContainer'
import IGUser from '@/components/IGUser'

const Following: React.FC = () => {
  const friends = [
    {
      id: 0,
      account: 'che.lin',
      avatar: '/images/avatars/a1.png',
      isFollowing: false,
      location: 'US'
    }
  ]
  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="my-8 px-4 text-2xl font-bold">Following</p>
        <div className="mx-2 mt-8 rounded-md shadow-md">
          {friends.map((item) => {
            const { id, account, avatar, isFollowing, location } = item
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            )
          })}
        </div>
      </IGContainer>
    </>
  )
}

export default Following
