"use server"
import { Pokemon } from "@/Type";
import Pokecard from "@/components/Pokecard";
import { BASE_URL } from "@/constant";

async function fetchData() {
  const res = await fetch(`${BASE_URL}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    console.log('error');
    return

  }

  return await res.json()
}


export default async function Home() {
  const data = await fetchData()

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
  );
}
