const contacts = [
  {
    name: "John",
    lastname: "Doe",
    phone: "123-456-7890",
    email: "asd@bu.it",
  },
  {
    name: "Jane",
    lastname: "Smith",
    phone: "123-456-7890",
    email: "dsa.ub.it",
  },
  {
    name: "Jane",
    lastname: "Doe",
    email: "dsa.ub.it",
    address: "123 Main St.",
  },
  {
    name: "Doey",
    lastname: "Smith",
    phone: "123-456-7890",
    email: "dsa.ub.it",
  },
];

// v1
/*
for(let i = 0; i < contacts.length; i++) {
    console.log(contacts[i].name, contacts[i].lastname);
    console.log(contacts[i]);
    if(contacts[i].name === 'Jane') {
        console.log('Found Jane');
        if(contacts[i].hasOwnProperty('phone')) {
            console.log('Found phone', contacts[i]['phone']);
        }
    }
}
*/

// v2
/*
for(let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    console.log(contact.name, contact.lastname);
    console.log(contact);
    if(contact.name === 'Jane') {
        console.log('Found Jane');
        if(contact.hasOwnProperty('phone')) {
            console.log('Found phone', contact['phone']);
        }
    }
}
*/

// v3

function findJanePhone() {
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    console.log(contact.name, contact.lastname);
    if (contact.name === "Jane") {
      console.log("Found Jane");
      if (contact.hasOwnProperty("phone")) {
        return contact["phone"];
      }
    }
  }
}

const janePhone = findJanePhone();
console.log(janePhone);

// v4
/*
function findPhoneOf(name) {
    for(let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        console.log(contact.name, contact.lastname);
        if(contact.name === name) {
            console.log('Found', name);
            if(contact.hasOwnProperty('phone')) {
                return contact['phone']
            }
        }
    }
}

const doeyPhone = findPhoneOf('Doey');
console.log(doeyPhone)
*/

// V5
/*
function findPropOf(name, prop) {
    let acheiApessoa = false;
    for(let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        if(contact.name === name) {
            acheiApessoa = true;
            if(contact.hasOwnProperty(prop)) {
                return contact[prop]
            }
        }
    }
    if(!acheiApessoa) {
        return 'Não achei a pessoa que procurava'
    } else {
        return 'Não achei a propriedade que procurava'
    }
}

const janeAddress = findPropOf('Mark', 'address');
console.log(janeAddress)
*/

function findPropOf(name, prop) {
  let acheiApessoa = false;
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (contact.name === name) {
      acheiApessoa = true;
    }
    if (contact.name === name && contact.hasOwnProperty(prop)) {
      return contact[prop];
    }
  }
  if (!acheiApessoa) {
    return "Não achei a pessoa que procurava";
  } else {
    return "Não achei a propriedade que procurava";
  }
}

//Solution in FCC

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (name == contact.firstName) {
      if (contact.hasOwnProperty(prop)) {
        return contact[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
