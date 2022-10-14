const inventory = {
  weapon: {
    type: "sword",
    dmg: 15,
  },
  healtpotion: 5,
  items: ["skin", "legs"],
};

// accessig nested object
console.log(inventory.weapon.dmg);

// accessig array within object
console.log(inventory.items[1]);

const box = [
  {
    type: "sword",
    dmg: 15,
    materials: ["wood", "leather"],
  },
  {
    type: "bow",
    dmg: 11,
    materials: ["wood", "rope"],
  },
];

// accessig nested array (rope)
console.log(box[1].materials[1]);
