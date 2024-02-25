import React from 'react'
import { images } from "../constants"

const Header = () => {
  return(<sectio>
    <Header className="container mx-auto px-5 flex justify-between">
      <div>
          <img src={images.Logo} alt ="logo" />
      </div>
      <div className="flex gap-x-9">
        <ul className="flex gap-x-5">
          <li>
            <a herf="/">Home</a>
          </li>
          <li>
            <a herf="/">Articales</a>
          </li>
          <li>
            <a herf="/">Pages</a>
          </li>
          <li>
            <a herf="/">Pricing</a>
          </li>
          <li>
            <a herf="/">Faq</a>
          </li>
        </ul>
        <butten>Sign in</butten>
      </div>
    </Header>
  </sectio>) 
}

export default Header;