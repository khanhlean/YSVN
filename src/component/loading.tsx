import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className='z-50 bg-[rgba(0,0,0,0.4)] fixed h-screen w-screen left-0 right-0 bottom-0 p-auto'>
        <img  className='fixed left-0 right-0 mx-auto rounded-full top-[40%] h-32 w-2h-32' src='https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/assets/img/loading.gif' alt='' />
    </div>
  )
}