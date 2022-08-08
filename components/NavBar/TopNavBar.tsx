import React from 'react'
import { topNavItems } from '../../constants/navBarItems'

const TopNavBar = () => {
  return (
    <div className="text-base text-white bg-green">
      <div className="flex items-center justify-between max-w-screen-lg py-3 mx-auto">
        <p>Order Online Or Call Us: (001) 2222-55555</p>
        <ul className="flex items-center">
          {topNavItems.map((item) => (
            <li key={item} className="px-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopNavBar
