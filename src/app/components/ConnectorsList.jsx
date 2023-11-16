import { useConnect } from 'wagmi'

export default function ConnectorsList() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  return (
    <div className='text-lg text-gray-500 text-center pt-4 pb-4'>
      {connectors.map((connector) => (
        <button
          className='bg-[#FCF0E4] pl-10 pr-10 pt-2 pb-2 rounded-2xl'
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
