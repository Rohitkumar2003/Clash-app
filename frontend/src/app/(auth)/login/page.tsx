import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function login() {
    return (
        <div className='bg-slate-50'>

            <h1 className='flex justify-center items-center h-screen'>
                <div className="w-[550px] bg-white rounded-xl px-10 shadow-md py-5">
                    <h1
                        className="text-3xl md:text-4xl lg:text-6xl font-medium 
        bg-gradient-to-t from-pink-500 to bg-purple-700 bg-clip-text text-center text-transparent"
                    >Clash</h1>
                    <h1 className='text-3xl font-bold '>Login</h1>
                    <p className='text-bold mt-2'>Welcome Clash </p>

                    <form>
                        <div className="mt-4 ">
                            <Label htmlFor='email'>Email</Label>
                            <Input id='email' type='email' name='email' placeholder='Enter Your Email...'/>
                        </div>

                        <div className="mt-4 ">
                            <Label htmlFor='Password'>Password</Label>
                            <Input id='Password' name='Password' placeholder='Enter Your Password...'/>
                        </div>

                            <div className="text-right font-bold">
                                
                            <Link href="forget-password" >Forget Passoward</Link>
                            </div>

                            <div className="mt-4 ">
                                <Button className='w-full'>Submit</Button>
                            </div>
                    </form>
                        <p className='text-center mt-2 '>Don't have an Account ? <strong>
                            <Link href="/register"> Register </Link>
                             </strong></p>

                </div>
            </h1>

        </div>
    )
}
