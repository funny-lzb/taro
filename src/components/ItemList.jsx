import React from 'react'
import Item from './Item'
import user from '../data/user.json'

export default function ItemList() {
  return (
    <>
      {user.map(u => (
        <Item key={u.id} {...u} />
      ))}
    </>
  )
}
