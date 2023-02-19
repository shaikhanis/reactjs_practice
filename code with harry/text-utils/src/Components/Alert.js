import React from 'react'

function Alert(props) {
    const capitlization = (world) =>{
        let lower = world.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-warning alert- ${props.alert.type}`} role="alert">
        <strong>{capitlization(props.alert.type)}</strong>{props.alert.smg}
      </div>
  )
}

export default Alert
