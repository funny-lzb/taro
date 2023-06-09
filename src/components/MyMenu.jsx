import React from 'react'
import { Link } from 'react-router-dom'

export default function MyMenu() {
  return (
    <div className='myMenu'>
      <div className='menu'>
        <Link to='/'>推荐</Link>
        <Link to='/focus' className='dot-on-right'>
          关注
        </Link>
        <Link to='/topic'>话题</Link>
        <Link to='/bookfriend'>书友</Link>
        <Link to='/feat'>武侠</Link>
        <Link to='/booksim'>书摘</Link>
      </div>
      {/* <Link to='/bookbuying'>买书</Link> */}
      <span className='expand-span'>
        <svg
          t='1681614484206'
          className='icon'
          viewBox='0 0 1024 1024'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          p-id='4584'
          width='30'
          height='30'
        >
          <path
            d='M789.333333 362.666667H234.666667c-12.8 0-21.333333-8.533333-21.333334-21.333334s8.533333-21.333333 21.333334-21.333333h554.666666c12.8 0 21.333333 8.533333 21.333334 21.333333s-8.533333 21.333333-21.333334 21.333334zM789.333333 531.2H234.666667c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333334h554.666666c12.8 0 21.333333 8.533333 21.333334 21.333334s-8.533333 21.333333-21.333334 21.333333zM789.333333 704H234.666667c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333334h554.666666c12.8 0 21.333333 8.533333 21.333334 21.333334s-8.533333 21.333333-21.333334 21.333333z'
            fill='#9d9a9a'
            p-id='4585'
          ></path>
        </svg>
      </span>
    </div>
  )
}
