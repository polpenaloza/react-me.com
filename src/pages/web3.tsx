import { BigNumber } from '@ethersproject/bignumber'
import { MaxUint256 } from '@ethersproject/constants'
import dynamic from 'next/dynamic'
import {
  erc20ABI,
  useAccount,
  useConnect,
  useContract,
  useDisconnect,
  useSigner,
} from 'wagmi'

import { logger } from '~/core/logger'

const delegate = '0x68b1d87f95878fe05b998f19b66f4baba5de1aed'

const log = logger.extend('pages:web3')

const LayoutAuthenticated = dynamic(
  () => import('~/components/Layout/Authenticated')
)
const NavBar = dynamic(() => import('~/components/NavBar'))

const Web3 = () => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: signer } = useSigner()

  const contract = useContract({
    address,
    abi: erc20ABI,
    signerOrProvider: signer,
  })

  async function handleApprove() {
    try {
      const approved = await contract?.approve(delegate, MaxUint256, {
        gasLimit: BigNumber.from('500000'),
      })

      return approved?.wait(1)
    } catch (error) {
      log('approve error %o', { error })
    }
  }

  return (
    <LayoutAuthenticated>
      <div className='h-14'>
        <NavBar />
      </div>
      <div className='flex h-full flex-col items-center justify-between'>
        {isConnected ? (
          <div className='flex flex-col gap-4'>
            Connected to {address}
            <button className='btn-primary btn' onClick={() => disconnect()}>
              Disconnect
            </button>
            <button className='btn-primary btn' onClick={handleApprove}>
              Approve
            </button>
          </div>
        ) : (
          <button className='btn-primary btn' onClick={() => connect()}>
            Connect Wallet
          </button>
        )}
      </div>
    </LayoutAuthenticated>
  )
}

export default Web3
