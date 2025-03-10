import { auth, signOut, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//This is a NavigationBar
const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadown-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black text-xl">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                'use server';

                                await signOut({ redirectTo: '/' })
                            }}>
                                <button type="submit">Logout</button>
                            </form>
                            <Link href={'/user/${session?.id}'}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) :
                        (
                            <form action={async () => {
                                'use server';
                                await signIn('github')
                            }}>
                                <button type="submit">
                                    <span>Login</span>
                                </button>
                            </form>
                        )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar