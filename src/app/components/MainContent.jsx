import Image from 'next/image'
import React from 'react'
import XOC2 from '../../../public/Images/XOC2.svg'
import Chocolate from '../../../public/Images/Chocolate.svg'
import Vitalik from '../../../public/Images/Vitalik.png'
import InputBox from './InputBox'
const MainContent = () => {
  return (
    <>
    <div className='w-[100%] px-[12rem]'>
        <div className='flex w-[100%]'>
            <div className='w-[100%] bg-[#FCF0E4] h-[13rem]' style={{borderRadius: '0px 0px 2000px 0px'}}>
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
                <Image src={XOC2} className='w-[5rem] mr-2'/>
            </div>
        </div>
        <div className='flex w-full'>
            <div className='w-[25%]'>
                <Image src={Vitalik} className='h-[35rem] object-cover'/>
            </div>
                <div className='w-full'>
                    <div className='h-[8rem] flex gap-6 w-full'>
                        <div className='w-full '></div>
                        <div className='flex flex-col'>
                            <Image src={XOC2} className='w-[5rem] h-[5rem]'/>
                        </div>
                        <div className='flex flex-col justify-end mb-4'>
                            <Image src={XOC2} className='w-[5rem] h-[5rem]'/>
                        </div>
                    </div>
                    <InputBox/>
                    <div className='max-w-[40rem] m-auto mt-6 font-700'>
                        <p className='text-[#F15B41] text-[1.5rem] text-center'>
                        Xocolatl (XOC) is a decentralized stablecoin system that is minted by collateralizing with other cryptocurrencies (or assets) and with soft peg to the Mexican peso (MXN).
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[13rem] bg-[#FCF0E4] flex justify-between px-[12rem]'>
            <div className='flex flex-col p-12'>
                <Image src={XOC2} className='w-[8rem]'/>
            </div>
            <div className=' relative bottom-[4rem]'>
                <Image src={Chocolate} className='w-[16rem]'/>
            </div>
        </div>
    </>
  )
}

export default MainContent