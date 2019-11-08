export class DamageInfo {
  doubleDamageTo: string;
  doubleDamageFrom: string;
  halfDamageTo: string;
  halfDamageFrom: string;
  noDamageFrom: string;
  noDamageTo: string;


  static fromObject(data: any): DamageInfo {
    const model = new DamageInfo();

    model.doubleDamageTo = data.damage_relations.double_damage_from;
    model.doubleDamageFrom = data.damage_relations.double_damage_from;
    model.halfDamageTo = data.damage_relations.half_damage_to;
    model.halfDamageFrom = data.damage_relations.half_damage_from;
    model.noDamageFrom =  data.damage_relations.no_damage_from;
    model.noDamageTo = data.damage_relations.no_damage_to;
    return model;
  }
}
