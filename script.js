console.log("Laboratoire prêt !");
const nom = "Caroleo";
let age = 17;
// nom = "Tom"
age = 18;
console.log(age);

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345";
motDePasseUtilisateur = "secret123"
if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length <8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}
const moi = {
    prenom: "Tom",
    nom: "Caroleo",
    age: 17,
    phrase:  "Je m'appelle Tom Caroleo.",
    competences: ["HTML", "CSS"]
};
console.log(moi);
console.log(moi.prenom);
console.log(moi.phrase);
moi.age = 19;
moi.ville = "paris";
console.log(moi);

 const notes = [12, 15, 9, 18];
 console.log(notes[0]); 
 console.log(notes[1]);
 console.log(notes.length);
 for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}
const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
]
;console.log(classe);
for (let i =0; i < classe.length; i++){
    if (classe[i].age >= 18){
        console.log(classe[i].prenom)
    }
}
function saluer(prenom) {
    const message = "Bonjour " + prenom;
    return message;
}

const salutationPourAlice = saluer("Alice");
console.log(salutationPourAlice);
const addition = (a, b) => a + b;
console.log(addition(10, 5))

//function estMajeur(age) {
 //   return age >= 18;
//}
const estMajeur = age => age >= 18;

function calculerMoyenne(tableauDeNotes) {
    let somme = 0; 
    for (let i = 0; i < tableauDeNotes.length; i++) {
        somme += tableauDeNotes[i]; 
    }
    let moyenne = somme / tableauDeNotes.length;

    return moyenne; 
}
let somme = [12, 15, 18, 10, 14];
console.log(calculerMoyenne(somme)); 
