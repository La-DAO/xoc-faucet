import { React, useState } from 'react'
import LogoLaDao from '../../../public/Images/LogoLaDao.svg'
import MXFlag from '../../../public/Images/MXFlag.svg'
import Image from 'next/image'
import Link from 'next/link'
import ConnectModal from './ConnectModal'
import { useAccount, useEnsName, useDisconnect } from 'wagmi'
import truncateAddress from '../utils/truncateAddress'

const Header = () => {
  let [isOpen, setIsOpen] = useState()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function displayConnectButtonOrConnectedAddress() {
    if (!isConnected) {
      return (
        <button
          className='bg-[#F15B41] rounded-full block text-gray-700 text-center py-2 text-2xl font-bold text-white w-[10rem]'
          onClick={openModal}
        >
          Connect
        </button>
      )
    } else {
      return (
        <div className='text-center text-gray-700'>
          <div>{ensName ? `${ensName}` : truncateAddress(address)}</div>
          <button
            className='bg-[#F15B41] rounded-full block text-gray-700 text-center text-white w-[10rem]'
            onClick={disconnect}
          >Disconnect</button>
        </div>
      )
    }
  }

  return (
    <>
      <div className='flex  justify-between w-full sticky top-0 bg-white z-40 py-8 px-[11.9rem]'>
        <Link href='https://ladao.club/'>
          <Image src={LogoLaDao} className='h-[4rem]'></Image>
        </Link>
        <h1 className='text-6xl text-black'>Testnet Faucet</h1>
        <Image src={MXFlag} className='h-[4rem]'></Image>
        {displayConnectButtonOrConnectedAddress()}
        <ConnectModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  )
}

export default Header