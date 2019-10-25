export class Pokemons {
  name: string;
  type: string;
  height: number;
  weight: number;
  signatureAbility: string;
  baseExpirience: string;

  static fromObject(data: any): Pokemons {
    const model = new Pokemons();
    model.name = data.name;
    model.type = data.type;
    model.height = data.height;
    model.weight = data.weight;
    model.signatureAbility = data.signatureAbility;
    model.baseExpirience = data.baseExpirience;
    return model;
  }
}

