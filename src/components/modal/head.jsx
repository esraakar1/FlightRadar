import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../redux/slices/detailSlice'
import c from '../../utils/nullCheck'

const Head = ({info}) => {

    const dispatch = useDispatch();

  return (
    <div className='head'>
        <div>
            <h3 title='call sign'>{c(info?.identification?.callsign, "white")}
           </h3>

            <span title='uçuş numarası'>{c(info?.identification?.number?.default, "white")}
           </span>

            <span title='Aircraft IATA/ICAO type code'>{c(info?.aircraft?.model?.code, "white")}
           </span>
        </div>

        <button onClick={() => dispatch(close())}>X</button>
    </div>
  )
}

export default Head