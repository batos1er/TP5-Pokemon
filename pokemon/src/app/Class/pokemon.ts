type PokemonType = 
    "EAU" | "FEU" | "PLANTE" | "ACIER" | "POISON" | "VOL" | "DRAGON" | "ROCHE" | "SOL" | "FEE" | "ELECTRIQUE" | "PSY" | "TENEBRE" | "SPECTRE" | "NORMAL" | "COMBAT" | "INSECTE" | "GLACE"
;

class Pokemon {
    name: string;
    attack: number;
    defense: number;
    hp: number;
    luck: number;
    types: PokemonType[];
    evolutions: Pokemon[];

    constructor(nomPoke:string, attackPoke:number, defensePoke:number, hpPoke:number, luckPoke:number, typesPoke:PokemonType[], evolutions:Pokemon[]) {
        this.name = nomPoke;
        this.attack = attackPoke;
        this.defense = defensePoke;
        this.hp = hpPoke;
        this.luck = luckPoke;
        this.types = typesPoke;
        this.evolutions = evolutions;
    }

    isLucky(): boolean{
        const testLuck = Math.random();
        if(testLuck < this.luck){
            return true;
        }
        return false;
    }

    attackPokemon(poke2:Pokemon): number{
        if(this.isLucky()){
            const degats = this.attack - poke2.defense;
            if(degats > 0){
                poke2.hp -= degats;
                return degats;
            }
        }
        return 0;
    }
}

const Jungko = new Pokemon("Jungko", 85, 65, 70, 0.9, ["PLANTE"], []);
const Massko = new Pokemon("Massko", 65, 45, 50, 0.7, ["PLANTE"], [Jungko]);
const Arcko = new Pokemon("Arcko", 45, 35, 40, 0.6, ["PLANTE"], [Massko, Jungko]);
const Brasegali = new Pokemon("Brasegali", 120, 70, 80, 0.9, ["FEU", "COMBAT"], []);
const Galifeu = new Pokemon("Galifeu", 85, 60, 60, 0.8, ["FEU", "COMBAT"], [Brasegali]);
const Poussifeu = new Pokemon("Poussifeu", 60, 40, 45, 0.7, ["FEU"], [Galifeu, Brasegali]);
const Laggron = new Pokemon("Laggron", 110, 90, 100, 0.9, ["EAU", "SOL"], []);
const Flobio = new Pokemon("Flobio", 85, 70, 70, 0.8, ["EAU", "SOL"], [Laggron]);
const Gobou = new Pokemon("Gobou", 70, 50, 50, 0.7, ["EAU"], [Flobio, Laggron]);

while(poke1.hp > 0 && poke2.hp > 0){
    const degatsRecu = poke1.attackPokemon(poke2);
    console.log(poke2.name + " a pris : " + degatsRecu + " dégats, il lui reste " + poke2.hp + " PV");
    const degatsRecu2 = poke2.attackPokemon(poke1);
    console.log(poke1.name + " a pris : " + degatsRecu2 + " dégats, il lui reste " + poke1.hp + " PV");
}
if(poke1.hp <= 0){
    console.log(poke1.name + " a été mis KO par  " + poke2.name + ", " + poke2.name + " gagne le combat!!");
}
else{
    console.log(poke2.name + " a été mis KO par  " + poke1.name + ", " + poke1.name + " gagne le combat!!");
}

