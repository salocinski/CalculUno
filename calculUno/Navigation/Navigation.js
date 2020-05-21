import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import Accueil from '../Accueil'
import CreerPartie from '../Components/CreerPartie'
import AfficherPartie from '../Components/AfficherPartie'
import Accueil from '../Components/AfficherAccueil'
import AjouterJoueur from '../Components/AjouterJoueur'

/*
    Définition des écrans vers lesquels la navigation est possible
    Le premier élément est l'écran affiché par défaut.
*/
const ecrans = 
{
    Accueil :
    {
        screen: Accueil
    },
    CreerPartie : 
    {
        screen : CreerPartie
    },
    AfficherPartie :
    {
        screen: AfficherPartie
    },
    AjouterJoueur:
    {
        screen: AjouterJoueur
    }
}

const PartieStackNavigator = createStackNavigator(ecrans);

export default createAppContainer(PartieStackNavigator);