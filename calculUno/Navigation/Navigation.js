import { createStackNavigator } from 'react-navigation'

import Accueil from "../Accueil"
import CreerPartie from "../Components/CreerPartie"
import AfficherPartie from "../Components/AffichePartie"

export default createAppContainer(PartieStackNavigator)

const PartieStackNavigator = createStackNavigator
(
    {
        creationPartie : 
        {
            screen : CreerPartie,
            navigationOptions:
            {
                title: "Créer partie"
            }
        },
        Accueil :
        {
            screen: Accueil,
            navigationOptions:
            {
                title: "Accueil"
            }
        },
        AfficherPartie :
        {
            screen: AfficherPartie,
            navigationOptions:
            {
                title: "Afficher partie"
            }
        }
    }
)