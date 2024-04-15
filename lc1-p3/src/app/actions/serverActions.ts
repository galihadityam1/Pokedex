"use server"

import { BASE_URL } from "@/constant";
import { error } from "console";

export async function fetchDataType(type: string) {
    console.log(type);

    const res = await fetch(`${BASE_URL}?type=${type}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        return console.log(error);
        
    }

    return await res.json()

}