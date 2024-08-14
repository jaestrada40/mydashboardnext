
import Image from 'next/image';

import { error } from "console";
import { notFound } from "next/navigation";
import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response';
import { PokemonGrid } from '@/pokemons/components/PokemonGrid';






const getPokemos = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    // throw new Error('Esto es un erro que no se debería de estar mostrando')
    // throw notFound();

    return pokemons;
}

export default async function PokemosPage() {

    const pokemons = await getPokemos(151);

    return (
        <div className="fles flex-col">

            <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>

            <PokemonGrid pokemons={ pokemons }/>
        </div>
    );
}