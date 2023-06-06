import React from 'react'

export default function Button(props) {
  return (
    <div className={`${props.style}`}>
      <a className={`button + ${props.style}`} href={props.link}>{props.text}</a>
    </div>
  )
}
