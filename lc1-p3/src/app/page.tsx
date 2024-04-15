"use server"
import { Pokemon } from "@/Type";
import Pokecard from "@/components/Pokecard";
import { BASE_URL } from "@/constant";

async function fetchData() {
  const res = await fetch(`${BASE_URL}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return console.log('error');

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
        <div className="w-screen">
          <div className="flex flex-row w-[70%] ml-8 gap-3 justify-between">
            {data && data.map((poke: Pokemon, i: number) => (
              <Pokecard key={i} pokemon={poke} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
