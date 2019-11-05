export class Dialog {
  doubleDamageTo: string;
  doubleDamageFrom: string;
  halfDamageTo: string;
  halfDamageFrom: string;
  noDamageFrom: string;
  noDamageTo: string;


  static fromObject(data: any): Dialog {
    const model = new Dialog();
    model.doubleDamageTo = data.doubleDamageTo;
    model.doubleDamageFrom = data.doubleDamageFrom;
    model.halfDamageTo = data.halfDamageFrom;
    model.noDamageFrom =  data.noDamageFrom;
    model.noDamageTo = data.noDamageTo;
    return model;
  }
}
