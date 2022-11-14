import React from 'react'
import IGUser from '@/components/IGUser'
import IGPostComment from './Comment'

type IGPostProps = {
  account: string
  location: string
  avatar: string
  photo: string
  likes: number
  description: string
  hashTags: string
  createTime: string
}

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime
}) => {
  return (
    <div className="rounded-md pb-4 shadow-md lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} alt={description} />
      <IGPostComment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  )
}

export default IGPost
