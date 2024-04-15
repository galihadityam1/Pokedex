"use server"
import React from 'react'
import { fetchDataType } from '../actions/serverActions'
import Pokecard from '@/components/Pokecard'
import { Pokemon } from '@/Type'

const Page = async ({params}: {params: {type: string}}) => {
    // console.log(params);
    let data = await fetchDataType(params.type)
    
    return (
        <>
            <div className="p-8 flex flex-col gap-4">
        <div className="text-xl font-semibold">
          Pokemon List
        </div>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-14">
          {data && data?.map((poke: Pokemon, i: number) => (
            <Pokecard key={i} pokemon={poke} />
          ))}
        </div>
      </div>
        </>
    )
}

export default Page