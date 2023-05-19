export default class Character {
  // Констуктор определяет дистанцию до цели и степень дурмана, по умолчанию она отключена
  constructor() {
    this.distance = 1;
    this.stoned = false;
  }

  // Вычисление атаки
  get attack() {
    // Атака = базовой атаки персонажа - дистанции умноженный на множитель дальности
    let attack = this.baseAttack - ((this.distance - 1) * this.attackDistanceMultiplier);
    // Если на персонажа наведен дурман, то его атака расчитывается по формуле
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  // Базовая атака равна переданному значению
  set attack(value) {
    this.baseAttack = value;
  }
}
