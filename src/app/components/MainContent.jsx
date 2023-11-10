import Image from 'next/image'
import React from 'react'
import XOC2 from '../../../public/Images/XOC2.svg'
import Vitalik from '../../../public/Images/Vitalik.png'
import InputBox from './InputBox'
const MainContent = () => {
  return (
    <>
    <div className='w-[100%]'>
        <div className='flex w-[100%]'>
            <div className='w-[75%] bg-[#FCF0E4] h-[13rem]' style={{borderRadius: '0px 0px 2000px 0px'}}>
                <p style={{color: '#F15B41',
                    textAlign: 'center',
                    fontFamily: 'Istok Web',
                    fontSize: '5rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal'}}>$XOC the $MXN</p>
                         <p style={{color: '#F15B41',
                    textAlign: 'right',
                    fontFamily: 'Istok Web',
                    fontSize: '3.5rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    width:'80%'}}>Stablecoin</p>
            </div>
            <div className='flex flex-col justify-end'>
                <Image src={XOC2} className='w-[5rem]'/>
            </div>
        </div>
        <div className='flex'>
            <div className='w-[25%]'>
                <Image src={Vitalik} className='h-[70vh] object-cover'/>
            </div>
            <div>
            <div className='h-[8rem] flex gap-6'>
                <div className='w-[30rem]'></div>
                <div className='flex flex-col'>
                    <Image src={XOC2} className='w-[5rem]'/>
                </div>
                <div className='flex flex-col justify-end'>
                    <Image src={XOC2} className='w-[5rem]'/>
                </div>
            </div>
            <InputBox/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainContent