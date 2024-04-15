'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="drawer w-96 bg-white text-black h-screen sticky left-0 font-semibold border-r">
                <div className='px-5'>
                    <div className="drawer-content flex flex-col items-center justify-center p-4 mt-3">
                        {/* Page content here */}
                        <div className='text-4xl mt-5 w-96'>Pokedex</div>

                    </div>
                    <div className=" mt-4">
                        {/* <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> */}
                        <ul className="menu p-4 w-80 min-h-full flex flex-col gap-10 text-black">
                            {/* Sidebar content here */}
                            <li ><Link href="/">Home</Link></li>
                            <li ><Link href="/create-pokemon">Add</Link></li>
                            <li><Link href="/fire">Fire</Link></li>
                            <li><Link href="/water">Water</Link></li>
                            <li><Link href="/grass">Grass</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar