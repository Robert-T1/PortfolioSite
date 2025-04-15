import Button from './Button'
import { Link } from "react-router-dom";

function Header() { 
    return (
        <header className="header">
            <div>
                <h1>Robert Thompson</h1>
                <nav>
                    <Link to="/about">
                        <Button >ABOUT</Button>
                    </Link>
                    <Link to="/Projects">
                        <Button >PROJECTS</Button>
                    </Link>
                    <Link to="/Skills">
                        <Button >SKILLS</Button>
                    </Link>
                    <Link to="/Employment">
                        <Button >EMPLOYMENT</Button>
                    </Link>
                    <Link to="/Timeline">
                        <Button >TIMELINE</Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;