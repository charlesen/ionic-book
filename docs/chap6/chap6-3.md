## Les Classes et les méthodes

Un des gros avantages de TypeScript est la possibilité de créer des classes, ce qui n'est pas tout à fait le cas \(au sens strict\) en JavaScript, où l'on passe alors par l'attribut prototype.

Les méthodes de classe elles sont équivalentes aux fonctions JavaScript, mais sans le mot clé "function".

```js
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
classeLPMim.getIntervenant() // Retourne L'intervenant actuel s'appelle charles
```



