import ProjectPage from '../../components/ProjectPage'

import itchioIcon from '../../assets/images/itchioIcon.png'
import githubIcon from '../../assets/images/github_icon.png'
import ss1 from '../../assets/images/projectIcons/ct_ss1.png'
import ss2 from '../../assets/images/projectIcons/ct_ss2.png'
import ss3 from '../../assets/images/projectIcons/ct_ss3.png'

function ChromaThief() {
    return (
        <ProjectPage
            title="Chroma Thief"
            skills={["C#", "Unity Engine", "Team Collaboration", "Git / Version Control", "Cross-Disciplinary Communication", "Scope Management", "Gameplay Design"]}
            description="Chroma Thief is a 2D action platformer where your mission is to restore color to a desaturated world by destroying the alchemists' color machines.
                Traverse spider-ridden jungles, flooded caves, and active volcanoes as you fight to bring vibrancy back to the land."
            reflections="Chroma Thief was developed during the Pirate Software Game Jam, a two-week challenge where I collaborated with a team of five.
                I was responsible for all gameplay programming, while my teammate focused on UI code. The rest of our team brought the game to life through sound design, music composition, and visual art.
                GitHub note: Both Robert-T1 and Kaz010 are me."
            links={[
                { icon: githubIcon, href: "https://github.com/Robert-T1/Chroma-Thief", alt: "Chroma Thief on GitHub" },
                { icon: itchioIcon, href: "https://relt-games.itch.io/chroma-thief", alt: "Chroma Thief on Itch.io" },
            ]}
            gallery={[
                { src: ss1, alt: "Water cave in Chroma Thief" },
                { src: ss2, alt: "Jungle in Chroma Thief" },
                { src: ss3, alt: "Volcano in Chroma Thief" },
            ]}
        />
    );
}

export default ChromaThief;
