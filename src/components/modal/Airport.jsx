import React from 'react'
import c from '../../utils/nullCheck'

const Airport = ({data}) => {

  return (
    <div className='airport'>
      <div>
        <h2>{c(data.origin?.code?.iata)} </h2>
        <h4>{c(data.origin?.position?.region?.city)} </h4>
        <span>({c(data.origin?.timezone?.abbr)}) <br /> ({c(data.origin?.timezone?.name)}) 
        </span>
      </div>

      <div className='icon'>
        <img src="/plane_icon.png" alt="plane" />
      </div>

      <div>
        <h2>{c(data.origin?.code?.iata)} </h2>
        <h4>{c(data.origin?.position?.region?.city)} </h4>
        <span>({c(data.origin?.timezone?.abbr)}) <br /> ({c(data.origin?.timezone?.name)}) 
        </span>
      </div>
    </div>
    
  )
}

export default Airport;