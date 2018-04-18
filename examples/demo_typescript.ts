function ditBonjour(person) {
    return "Bonjour, " + person;
}

let user = "Raphael";

document.body.innerHTML = ditBonjour(user);



// Liste de blocs
let block1 = [
  {
    'sender': 'charles',
    'recipient': 'maxime',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'raphael',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'doreen',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'louis-joseph',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'elise',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'germain',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'anthony',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'pol',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'vincent',
    'amount': 100,
  }
],

block2 = [
  {
    'sender': 'charles',
    'recipient': 'nicolas',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'kevin',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'willy',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'elodie',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'adrien',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'romain',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'quentin',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'jean-etienne',
    'amount': 100,
  },
  {
    'sender': 'charles',
    'recipient': 'gael',
    'amount': 100,
  }
];


let fullName: string = `Charles EDOU NZE`;
let age: number = 30;
let sentence: string = `Salut, mon name est ${ fullName }.
                J'aurai ${ age + 1 } ans à la fin de l'année.`;


// Classe MMI
class classeMmi {
    intervenant: string;
    etudiants: string[];
    constructor(intervenant: string, etudiants:string[]) {
      this.intervenant = intervenant;
      this.etudiants = etudiants;
    }
    getIntervenant() {
      return "L'intervenant actuel s'appelle " + this.intervenant;
    }
    getEtudiants() {
      return this.etudiants;
    }
}

let classeLPMim = new classeMmi("charles", ['etudiant1','etudiant_n']);
classeLPMim
