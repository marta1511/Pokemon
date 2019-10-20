export interface Pokemon {
  name: string;
  types: Types;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Array<Abilities>;
}


export interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}
