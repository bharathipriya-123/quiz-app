import React from 'react'

export default function ChildComp(props) {
    
  return (
    <div>
        <h2>Child component</h2>
        <h2>{props.name}</h2>
        <h2>{props.ages}</h2>
        <h2>{props.mail}</h2>
        <h2>{props.contact}</h2>
    </div>
  )
}
