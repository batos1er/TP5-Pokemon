type PokedexQueryArgs = {
    types: PokemonType[];
    nom: string;
}

class Pokedex {
    listePoke: Pokemon[];

    constructor(){
        this.listePoke = [];
    }

    add(...pokes:Pokemon[]): void{
        this.listePoke.push(...pokes);
    }

    search(argument:PokedexQueryArgs, fieldsToUpdate: Partial<PokedexQueryArgs>): Pokemon{
        
    }


}
new Pokedex().add(...pokemons)