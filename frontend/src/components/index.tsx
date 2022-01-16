import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './Navbar/styles.css';


function Navbar() {

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>            
                <a href="https://github.com/AssisAraujo" target="blank" rel="AssisAraujo">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>

    );
      
}


export default Navbar;