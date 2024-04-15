"use client"
import React, { useState } from 'react'
import { AddPokemon } from '../actions/clientActions'
import { InputPokemon } from '@/Type'

const Page = () => {
    const [input, setInput] = useState<InputPokemon>({
        name: "",
        description: "",
        weight: 0,
        image: "",
        type: ""
    })

    const handleInput = (event: any) => {


        const { value, name } = event.target;

        setInput({
            ...input,
            [name]: value
        })

        console.log(input);

    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log(input);

        await AddPokemon(input)
    }
    return (
        <>
            <div className='h-screen w-screen'>
                <div className='p-6 mt-6'>
                    <div className='font-semibold text-xl'>
                        Add new Pokemon
                    </div>
                    <form onSubmit={handleSubmit} className='w-[95%] ml-5'>
                        <div className='mt-5'>
                            <div className="label">
                                <span className="label-text font-semibold">Name</span>
                            </div>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" name='name' value={input.name}
                                onChange={handleInput} />
                        </div>
                        <div className='mt-5'>
                            <div className="label">
                                <span className="label-text font-semibold">Description</span>
                            </div>
                            <textarea placeholder="Description" className="textarea textarea-bordered textarea-sm w-full" name='description' value={input.description}
                                onChange={handleInput} />
                        </div>
                        <div className='mt-3'>
                            <div className="label">
                                <span className="label-text font-semibold">Weight</span>
                            </div>
                            <input type="text" placeholder="Weight" className="input input-bordered w-full" name='weight'
                                value={input.weight}
                                onChange={handleInput} />
                        </div>
                        <div className='mt-5'>
                            <div className="label">
                                <span className="label-text font-semibold">Image</span>
                            </div>
                            <input type="text" placeholder="Image" className="input input-bordered w-full" name='image'
                                value={input.image}
                                onChange={handleInput} />
                        </div>
                        <div className='mt-3'>
                            <div className="label">
                                <span className="label-text font-semibold">Type</span>
                            </div>
                            <select className="select select-bordered w-full" name='type' onChange={handleInput} >
                                <option disabled selected>Select Type</option>
                                <option value='water'>Water</option>
                                <option value='grass'>Grass</option>
                                <option value='fire'>Fire</option>
                            </select>
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className="btn bg-yellow-200 text-red-900 w-full hover:bg-yellow-700 hover:text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page