import React from 'react'
import LogoLaDao from '../../../public/Images/LogoLaDao.svg'
import MXFlag from '../../../public/Images/MXFlag.svg'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
  return (
    <>
    <div className='flex  justify-between w-full sticky top-0 bg-white z-40 py-8'>
      <Link href='https://ladao.club/'>
        <Image src={LogoLaDao} className='h-[4rem]'></Image>
      </Link>
      <h1 className='text-6xl text-black'>Testnet Faucet</h1>
      <Image src={MXFlag} className='h-[4rem]'></Image>
    </div>
    </>
  )
}

export default Header