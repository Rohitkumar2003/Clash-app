import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <Image src="/404.svg" height={400} width={400} alt='error' />
      <Link href="/">
        <Button>Get Home </Button>
      </Link>
    </div>
  )
}