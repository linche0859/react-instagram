import React from 'react'

const IGContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="lg:mx-auto lg:max-w-[1024px]">{children}</div>
}

export default IGContainer
