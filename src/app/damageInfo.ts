export class DamageInfo {
  name = '';
  height = 0;
  weight = 0;
  type = '';
  signatureAbility = '';
  doubleDamageTo = [];
  doubleDamageFrom = [];
  halfDamageTo = [];
  halfDamageFrom = [];
  noDamageFrom = [];
  noDamageTo = [];


  static fromObject(data: any): DamageInfo {
    const model = new DamageInfo();
    model.name = data.name;
    model.height = data.height;
    model.weight = data.weight;
    model.type = data.type;
    model.signatureAbility = data.signatureAbility;
    model.doubleDamageTo = data.damage_relations.double_damage_from;
    model.doubleDamageFrom = data.damage_relations.double_damage_from;
    model.halfDamageTo = data.damage_relations.half_damage_to;
    model.halfDamageFrom = data.damage_relations.half_damage_from;
    model.noDamageFrom =  data.damage_relations.no_damage_from;
    model.noDamageTo = data.damage_relations.no_damage_to;
    return model;
  }
}
