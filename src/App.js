import "./App.css";
import logodeliveroo from "./assets/img/deliveroo-logo.svg";
import TopCard from "./components/Topcard";
import Minicards from "./components/Minicard";

// Import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
    return (
        <div className="App">
            <header>
                <div className="nav">
                    <div className="container">
                        <img
                            className="logo-deliveroo"
                            src={logodeliveroo}
                            alt="logo-deliveroo"
                        />
                    </div>
                </div>
                <div>
                    <TopCard />
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="bloc-main">
                        <div>
                            <Minicards />
                        </div>
                        <div>
                            <div className="validate-container">
                                <button className="validate">
                                    Valider mon panier
                                </button>
                                <span>Votre panier est vide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
