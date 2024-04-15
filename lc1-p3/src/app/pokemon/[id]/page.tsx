"use server"
import { BASE_URL } from '@/constant';
import React from 'react'

async function fetchDataDetail(id: string) {
    const res = await fetch(`${BASE_URL}?id=${id}`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        console.log('error');
        return

    }

    return await res.json()
}

const Page = async ({ params }: { params: { id: string } }) => {
    console.log(params);
    const data = await fetchDataDetail(params.id)
    const pokemon = data[0]
    // console.log(pokemon);



    return (
        <>
            <div className='w-full p-8 mt-8'>
                <div className="card lg:card-side bg-base-100 shadow-xl border">
                    <div className='grid grid-row w-full'>
                        <div className='p-4 text-3xl font-semibold border-b' >
                            Detail Pokemon
                        </div>
                        <div className=' flex flex-row w-full'>
                            <div className='w-96 h-96'>
                                <figure><img src={pokemon.image} alt="Album" /></figure>
                            </div>
                            <div className="card-body">
                                <div className="flex flex-row justify-between mr-20">
                                    <div className='text-gray-500'>
                                        Pokemon Name
                                        <div className='mt-4 text-black'>
                                            {pokemon.name}
                                        </div>
                                    </div>
                                    <div className='text-gray-500'>
                                        Pokemon Weight
                                        <div className='mt-4 text-black'>
                                            {pokemon.weight}
                                        </div>
                                    </div>
                                    <div className='text-gray-500'>
                                        Pokemon Type
                                        <div className='mt-4 text-black'>
                                            {pokemon.type}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 text-gray-500'>
                                    Pokemon Description
                                    <div className='mt-4 text-black'>{pokemon.description}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page