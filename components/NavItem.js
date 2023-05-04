import React from 'react'
import Link from 'next/link'

export default function NavItem(props) {
  return (
    <Link href={props.link} scroll={false} className="nav-list-computer block py-2 pl-3 pr-4 md:border-0 md:p-0">{props.message}</Link>
  )
}
