import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE YOU ARE LOST</h1>
          <p>We can't seem to find the page you are looking for</p>
          <Link to={'/'}>Back To Home{" "} <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
