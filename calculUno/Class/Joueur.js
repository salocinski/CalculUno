export class Joueur 
{
    nomJoueur = null;
    score = 0;

    ajouterNom(nom)
    {
      this.nomJoueur = nom;
    }

    loggerInfoJoueur ()
    {
      console.log("Le joueur '" + this.nomJoueur + "' va être ajouté à la partie avec un score de " + this.score);
    }
}