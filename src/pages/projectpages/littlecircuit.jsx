import ProjectPage from '../../components/ProjectPage'

import trackIcon from '../../assets/images/trackicon.png'
import steamIcon from '../../assets/images/steamIcon.png'
import ss1 from '../../assets/images/projectIcons/lc_ss1.jpg'
import ss2 from '../../assets/images/projectIcons/lc_ss2.jpg'
import ss3 from '../../assets/images/projectIcons/lc_ss3.jpg'

function LittleCircuit() {
    return (
        <ProjectPage
            title="Little Circuit"
            skills={["C#", "Unity Engine", "Version Control", "Boolean Logic", "Marketing", "Art", "Sound Design", "Steam Integration", "Design"]}
            description="Little Circuit is a logic simulation sandbox game where you can use a variety of components to create complex circuitry.
                Click to place components and build anything from a piano to a computer in an open-ended sandbox environment."
            reflections="Little Circuit was the first game I published on Steam, and for me, it was a complete success—earning over 100 downloads.
                I chose to start with something small and simple, aiming for a niche category, which led me to create Little Circuit.
                Development took a little over six months, with more than 750 hours invested and over 9,000 lines of code written. Aside from the music, I built the entire game solo."
            links={[
                { icon: steamIcon, href: "https://store.steampowered.com/app/2207640/Little_Circuit/", alt: "Little Circuit on Steam" },
                { icon: trackIcon, href: "https://www.youtube.com/watch?v=MRL6DW1qNUw&list=OLAK5uy_mg7W9L2_-TlhMni-jt5g-QyqtcJ7xxQew", alt: "Little Circuit soundtrack" },
            ]}
            gallery={[
                { src: ss1, alt: "Circuit building in Little Circuit" },
                { src: ss2, alt: "An ALU built in Little Circuit" },
                { src: ss3, alt: "Connecting wires in Little Circuit" },
            ]}
        />
    );
}

export default LittleCircuit;
