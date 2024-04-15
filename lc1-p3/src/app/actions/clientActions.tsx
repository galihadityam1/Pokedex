"use client"
import { InputPokemon } from "@/Type";
import { BASE_URL } from "@/constant";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { fetchData } from "../page";

export async function AddPokemon(newPoke: InputPokemon) {
    // const router = useRouter()
    // console.log(newPoke);
    const { name, description, weight, image, type } = newPoke
    if (!name) {
        return Swal.fire({
            icon: 'error',
            title: 'Nama pokemon tidak boleh kosong'
        })
    }
    if (!description) {
        return Swal.fire({
            icon: 'error',
            title: 'Description pokemon tidak boleh kosong'
        })
    }
    if (!weight) {
        return Swal.fire({
            icon: 'error',
            title: 'weight pokemon tidak boleh kosong'
        })
    }
    if (!image) {
        return Swal.fire({
            icon: 'error',
            title: 'image pokemon tidak boleh kosong'
        })
    }
    if (!type) {
        return Swal.fire({
            icon: 'error',
            title: 'type pokemon tidak boleh kosong'
        })
    }

    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoke)
    })

    // console.log(res.ok);

    if (res.ok) {
        // console.log('masuk');
        Swal.fire({
            icon: 'success',
            timer: 1500,
            title: 'berhasil menambahkan pokemon',
            showConfirmButton: false
        })
        return res.ok
    }
}

export async function deletePokemon(id: any) {
    console.log(id);


    const res = await fetch(`${BASE_URL}/${id.id.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    })
    console.log(res.ok);
    

    if (res.ok) {
        //    throw new Error("error")
        return Swal.fire({
            icon: 'success',
            timer: 1500,
            title: 'success delete',
            showConfirmButton: false
        })

    }

}