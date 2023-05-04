import React from 'react'

export default function Button(props) {
  return (
    <div>
      <a className="button" href={props.link}>{props.text}</a>
    </div>
  )
}
