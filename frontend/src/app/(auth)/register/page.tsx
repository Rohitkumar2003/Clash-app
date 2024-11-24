import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label, } from '@radix-ui/react-label'

import Link from 'next/link'

import React from 'react'

export default function register() {
  return (
    <div className='bg-slate-50'>

            <h1 className='flex justify-center items-center h-screen'>
                <div className="w-[550px] bg-white rounded-xl px-10 shadow-md py-5">
                    <h1
                        className="text-3xl md:text-4xl lg:text-6xl font-medium 
        bg-gradient-to-t from-purple-500 to bg-pink-700 bg-clip-text text-center text-transparent"
                    >Clash</h1>
                    <h1 className='text-3xl font-bold '>Register</h1>
                    <p className='text-bold mt-2'>Welcome to Clash </p>

                    <form>

                    <div className="mt-4 ">
                            <Label htmlFor='name'>Name</Label>
                            <Input id='name' type='name' name='email' placeholder='Enter Your Name...'/>
                        </div>

                        <div className="mt-4 ">
                            <Label htmlFor='email'>Email</Label>
                            <Input id='email' type='email' name='email' placeholder='Enter Your Email...'/>
                        </div>

                        <div className="mt-4 ">
                            <Label htmlFor='Password'>Password</Label>
                            <Input id='Password' name='Password' placeholder='Enter Your Password...'/>
                        </div>

                        <div className="mt-4 ">
                            <Label htmlFor='cPassword'>Confirm Password</Label>
                            <Input id='Password' name='Password' placeholder='Enter Confirm Password...'/>
                        </div>


                            <div className="mt-4 ">
                                <Button className='w-full'>Submit</Button>
                            </div>
                    </form>
                        <p className='text-center mt-2 '>Already have an Account ? <strong>
                            <Link href="/login"> Login Here </Link>
                             </strong></p>

                </div>
            </h1>

        </div>

  )
}
