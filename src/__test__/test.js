import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician', () => {
  const magician = new Magician();
  magician.attack = 100;
  // При разных значениях дистанции
  it('Расчет атаки при дистанции 1', () => {
    magician.distanceInstall = 1;
    expect(magician.attack).toBe(100);
  });

  it('Расчет атаки при дистанции 2', () => {
    magician.distanceInstall = 2;
    expect(magician.attack).toBe(90);
  });

  it('Расчет атаки при дистанции 5', () => {
    magician.distanceInstall = 5;
    expect(magician.attack).toBe(60);
  });

  it('Расчет атаки при дистанции 2 и дурмане', () => {
    magician.distanceInstall = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });

  it('Расчет атаки при дистанции 2 и дурмане', () => {
    magician.distanceInstall = 4;
    magician.stoned = true;
    expect(magician.attack).toBe(60);
  });
});

describe(' Daemon', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  // При разных значениях дистанции
  it('Расчет атаки при дистанции 1', () => {
    daemon.distanceInstall = 1;
    expect(daemon.attack).toBe(100);
  });

  it('Расчет атаки при дистанции 2', () => {
    daemon.distanceInstall = 2;
    expect(daemon.attack).toBe(80);
  });

  it('Расчет атаки при дистанции 5', () => {
    daemon.distanceInstall = 5;
    expect(daemon.attack).toBe(20);
  });

  it('Расчет атаки при дистанции 2 и дурмане', () => {
    daemon.distanceInstall = 2;
    daemon.stoned = true;
    expect(daemon.attack).toBe(75);
  });

  it('Расчет атаки при дистанции 2 и дурмане', () => {
    daemon.distanceInstall = 4;
    daemon.stoned = true;
    expect(daemon.attack).toBe(30);
  });
});
