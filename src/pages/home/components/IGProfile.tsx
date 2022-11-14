import IGUser from '@/components/IGUser'
import React from 'react'

const IGProfile: React.FC = () => {
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
    <div className="mt-8 ml-8 rounded-md p-2 shadow-lg">
      <IGUser
        account="che.lin"
        location="Taiwan"
        avatar="/images/avatar.png"
        size="medium"
      />
      <p className="mx-4 mt-4 mb-3 text-sm font-bold text-gray-400">
        You are following
      </p>
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
  )
}

export default IGProfile
