/* eslint-disable func-names */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
const file = path.join(__dirname, '../../data/aliens.json');

function Alien(object) {
  this.id = uuid.v1();
  this.name = object.name;
  this.photo = object.photo;
  this.planet = object.planet;
}

module.exports = Alien;

Alien.prototype.save = function () {
  fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
};

Alien.find = function (id) {
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  data.pop();
  const aliens = data.map(d => JSON.parse(d));
  if (id) {
    return aliens.filter(n => n.id === id)[0];
  }
  return aliens;
};

Alien.delete = function (id) {
  const aliens = Alien.find();
  fs.writeFileSync(file, '');
  for (const o of aliens) {
    if (o.id !== id) {
      const alien = new Alien(o);
      alien.save();
    }
  }
};
