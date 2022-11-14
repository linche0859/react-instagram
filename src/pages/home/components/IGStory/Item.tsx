import React from 'react'
type ItemProps = {
  name: string
  avatar: string
}

const IGStoryItem: React.FC<ItemProps> = ({ name, avatar }) => {
  return (
    <div className="flex-shrink-0 py-[17px] text-center">
      <img
        className="inline-block h-[56px] w-[56px] rounded-full border-2 border-white object-cover p-[3px] ring-2 ring-red-500"
        src={avatar}
        alt={name}
      />
      <p className="mt-1 text-xs">{name}</p>
    </div>
  )
}

export default IGStoryItem
