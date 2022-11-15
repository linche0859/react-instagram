import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import IGUser from '@/components/IGUser'

const IGProfile: React.FC = () => {
  const followers = useSelector((state: RootState) => state.follower.followers)
  const renderFollowers = followers.slice(0, 4)

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
      {renderFollowers.map((item) => {
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
