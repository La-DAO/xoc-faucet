'use client'
import React from 'react';
import XocFaucet from '../../../deployments/XocFaucet.json'
import { useContractWrite, usePrepareContractWrite, useNetwork, useAccount } from 'wagmi'

const InputBox = () => {
  const { address } = useAccount()
  const { config } = usePrepareContractWrite({
    address: XocFaucet.address,
    abi: XocFaucet.abi,
    functionName: 'dripMeXoc',
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  const { write } = useContractWrite(config)
  const { chain } = useNetwork()

  const checkChainAndWrite = () => {
    console.log("chain.id", chain.id)
    if (chain && (chain.id == 11_155_111 || chain.id == 5 || chain.id == 80_001)) {
      return write?.()
    } else {
      alert("Switch Network to Sepolia, Goerli, or Mumbai")
    }
  }

  return (
    <div className='w-full h-[15rem] bg-[#FCF0E4]'>
      <div className='flex flex-col justify-center h-full'>
        <p
          style={{
            color: '#F15B41',
            marginLeft: '2rem',
            fontFamily: 'Istok Web',
            fontSize: '3rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          send me some "choc"
        </p>
        <div className='px-6 py-2 flex gap-6 text-center'>
          <p
            className='bg-[#D9D9D9] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
          {address}
          </p>
          <button
            className='bg-[#F15B41] rounded-full block text-gray-700  y-2 text-2xl font-bold text-white w-[10rem]'
            onClick={checkChainAndWrite} 
          >
            eat
          </button>
          
        </div>
        <p
          className='text-sm text-gray-700 text-center'
          >
            1,250 XOC / day
          </p>
      </div>
    </div>
  );
};

export default InputBox;
