export class Partie 
{
  /*Initialisation de la liste des joueurs*/
  listeJoueur = null;

  /*Fonction d'ajout d'un joueur dans la liste de la partie */
  ajouterJoueur(joueur)
  {
    this.listeJoueur.push(joueur)
  }
  
  afficherListeJoueur()
  {
    console.log(this.listeJoueur.toString())
  }
}