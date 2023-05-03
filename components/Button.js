import React from 'react'

export default function Button(props) {
  return (
    <div>
      <a class="button" href={props.link}>{props.text}</a>
    </div>
  )
}
