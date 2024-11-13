import React from 'react'

export default function Display({children: child}) {
    child = child || "0.00";
    return (
    <div className='w-full text-3xl font-mono font-semibold flex items-center justify-end p-10 bg-slate-200 rounded-2xl mb-10'>
            {child}
    </div>
  )
}
