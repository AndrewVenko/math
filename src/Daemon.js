import Character from './Character';

export default class Daemon extends Character {
  // Наследуем от класса Math и задаем множитель дальности 20
  constructor() {
    super();
    this.attackDistanceMultiplier = 20;
  }

  set distanceInstall(value) {
    if (value <= 1) {
      this.distance = 1;
    } else if (value > 10) {
      this.distance = 11;
    } else {
      this.distance = value;
    }
  }

  get distanceInstall() {
    return this.distance;
  }
}
