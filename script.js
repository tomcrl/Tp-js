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

