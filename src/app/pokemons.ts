export class Pokemon {
  name: string;
  type: string;
  height: number;
  weight: number;
  signatureAbility: string;
  baseExperience: string;


  static fromObject(data: any): Pokemon {
    const model = new Pokemon();
    model.name = data.name;
    model.type = data.types;
    model.height = data.height;
    model.weight = data.weight;
    model.signatureAbility = data.abilities;
    model.baseExperience = data.base_experience;
    return model;
  }
  }


