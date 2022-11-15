import React from 'react'
import { useDispatch } from 'react-redux'
import { follow, unfollow } from '@/slices/followerSlice'

type IGUserProps = {
  id?: number
  avatar?: string
  account?: string
  location?: string
  showFollow?: boolean
  isFollowing?: boolean
  size?: 'medium' | 'small'
}

const IGUser: React.FC<IGUserProps> = ({
  id,
  avatar,
  account,
  location,
  showFollow = false,
  isFollowing = false,
  size = 'small'
}) => {
  const dispatch = useDispatch()
  const clickFollowingHandler = () => {
    if (id === undefined || id === null) return
    if (isFollowing) return dispatch(unfollow(id))
    dispatch(follow(id))
  }

  return (
    <div className="flex h-[70px] items-center px-4">
      <img
        src={avatar}
        alt={account}
        className={`rounded-full object-cover ${
          size === 'small' ? 'h-10 w-10' : 'h-[60px] w-[60px]'
        }`}
      />
      <div className="ml-4">
        <p className="text-sm font-bold">{account}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
      {showFollow && (
        <button
          className={`ml-auto text-xs font-bold ${
            isFollowing ? 'text-gray-700' : 'text-blue-400'
          }`}
          onClick={clickFollowingHandler}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      )}
    </div>
  )
}

export default IGUser
