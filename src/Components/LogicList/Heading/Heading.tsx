import React from 'react'

const Heading = ({children}: React.ReactNode) => {
  return (
    <div className="mb-3 text-[26px] flex  gap-3 ">
      <span className="text-red-800 border-2 border-[#e0f4e3] rounded-lg "></span>
      <h2 className="">{children}</h2>
    </div>
  )
}

export default Heading