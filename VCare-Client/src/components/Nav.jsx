import React from 'react'

const Nav = () => {
  return (
    <React.Fragment>
      <div>
        <ul id="navlinks" class="flex justify-center m-4 pl-6 pr-6 bg-[#84cccb] rounded-[200px] text-lg bg-opacity-45 font-500">
          <li class="m-2">Home</li>
          <li class="m-2">About Us</li>
          <li class="m-2">Services</li>
          <li class="m-2">Contact</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Nav