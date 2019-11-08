export class Pokemon {
  name: string;
  type: string = '';
  height: number;
  weight: number;
  signatureAbility: string = '';
  baseExperience: string;


  static fromObject(data: any): Pokemon {
    const model = new Pokemon();
    model.name = data.name;
    for ( let j = 0; j < data.types.length; j++) {
      // console.log(data.types);
      model.type += data.types[j].type.name;
      if (j < data.types.length - 1 ) {
        model.type += ', ';
      }
      // console.log(model.type);
    }

    model.height = data.height;
    model.weight = data.weight;

    for (let i = 0; i < data.abilities.length; i++) {
      // console.log(data.abilities);
      model.signatureAbility += data.abilities[i].ability.name;
      if (i < data.abilities.length - 1 ) {
        model.signatureAbility += ', ';
      }
      // console.log(model.signatureAbility);
    }
    model.baseExperience = data.base_experience;
    return model;

  }

}


