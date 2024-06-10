import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <Link to='/'>Go back home</Link>
      <h2>Page not found</h2>
    </div>
  )
}
