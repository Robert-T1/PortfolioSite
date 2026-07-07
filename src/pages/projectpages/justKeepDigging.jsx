import ProjectPage from '../../components/ProjectPage'

import youtubeIcon from '../../assets/images/youtubeIcon.png'
import steamIcon from '../../assets/images/steamIcon.png'
import ss1 from '../../assets/images/projectIcons/jkd_ss1.jpg'
import ss2 from '../../assets/images/projectIcons/jkd_ss2.gif'
import ss3 from '../../assets/images/projectIcons/jkd_ss3.jpg'

function JustKeepDigging() {
    return (
        <ProjectPage
            title="Just Keep Digging"
            skills={["C#", "Unity Engine", "Version Control", "Marketing", "Art", "Sound Design", "Steam Integration", "Design"]}
            description="Just Keep Digging is an open-world action-adventure mining simulator.
                Play as John in Bodie, a company mining town. Meet the weekly profit quota or face termination. Use extra company coins to upgrade your gear, dig deeper for rarer resources, and uncover ancient fossils and ruined structures. Beware of dangerous cave dwellers—bring a weapon along with your pickaxe."
            reflections="Just Keep Digging released on Steam on July 11, 2025. It's the most ambitious project I've worked on to date, with nearly a year of development, just under 1,000 hours of work, and over 13,000 lines of code. The project was a huge undertaking for me as a solo developer, both in terms of its complexity (procedural generation, save system, large open world, enemy AI, GUI, effects system, etc.) and the overall time commitment.
                The reception has been incredibly rewarding, with the game earning a 96% positive rating on Steam and coverage from creators like Blitz along with others."
            links={[
                { icon: steamIcon, href: "https://store.steampowered.com/app/2974660/Just_Keep_Digging/", alt: "Just Keep Digging on Steam" },
                { icon: youtubeIcon, href: "https://www.youtube.com/watch?v=4HXXo21fTw0&t", alt: "Just Keep Digging trailer on YouTube" },
            ]}
            gallery={[
                { src: ss1, alt: "Player mining emeralds in Just Keep Digging" },
                { src: ss2, alt: "Player getting chased by a cow worm in Just Keep Digging" },
                { src: ss3, alt: "Map mechanic in Just Keep Digging" },
            ]}
        />
    );
}

export default JustKeepDigging;
