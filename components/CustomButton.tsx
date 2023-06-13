'use client'

import { CustomButtonProps } from '@/types'


const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || 'button'}
    className={`cutsom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton