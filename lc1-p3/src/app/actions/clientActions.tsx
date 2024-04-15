"use client"
import { InputPokemon } from "@/Type";
import { BASE_URL } from "@/constant";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AddPokemon(newPoke: InputPokemon) {
    console.log(newPoke);
    const { name, description, weight, image, type } = newPoke

    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoke)
    })

    console.log(res.ok);
    
    if (res.ok) {
        // console.log('masuk');
        revalidatePath('/')
        redirect('/')
    }
}