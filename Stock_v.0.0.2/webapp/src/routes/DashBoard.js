import React from 'react'
import UserList from '../components/UserList'

export default function DashBoard() {
  return (
      <UserList to='/addUser' toEdit='/edit' toStop='/stopUser' toDel='/delete' toInfo='/userInfo'/> 
  )
}
