import React, { useState } from 'react'
import Pad from './Pad'
import Display from './Display'

export default function Calculator() {

    const [display, setDisplay] = useState("0.00");
    const getPad = (val) => {setDisplay(val)};
  return (
    <div className='p-10 rounded-2xl max-w-fit mx-auto bg-gray-300  shadow-lg'>
        <Display>{display}</Display>
        <Pad getPad={getPad} />


    </div>
  )
}
