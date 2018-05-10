## Les Classes et les méthodes

Un des gros avantages de TypeScript est la possibilité de créer des classes, ce qui n'était pas tout à fait \(au sens strict\) en JavaScript, même s'il était possible de créer un genre de classe avec l'attribut prototype.

Les méthodes elles sont équivalentes aux fonctions JavaScript, mais le mot clé "function".

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
