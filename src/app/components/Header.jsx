import React from 'react'
import LogoLaDao from '../../../public/Images/LogoLaDao.svg'
import MXFlag from '../../../public/Images/MXFlag.svg'
import Image from 'next/image'



const Header = () => {
  return (
    <>
    <div className='flex h-[6rem] justify-between w-full'>
        <Image src={LogoLaDao} className='h-[4rem]'></Image>
        <h1 className='text-6xl text-black'>Testnet Faucet</h1>
        <Image src={MXFlag} className='h-[4rem]'></Image>
    </div>
    </>
  )
}

export default Header