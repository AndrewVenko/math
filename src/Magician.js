import Character from './Character';

export default class Magician extends Character {
  // Наследуем от класса Math и задаем множитель дальности 10
  constructor() {
    super();
    this.attackDistanceMultiplier = 10;
  }

  // Устанавливаем дистанцию
  set distanceInstall(value) {
    if (value <= 1) {
      this.distance = 1;
    } else if (value > 10) {
      this.distance = 11;
    } else {
      this.distance = value;
    }
  }

  // Возвращаем ее
  get distanceInstall() {
    return this.distance;
  }
}
