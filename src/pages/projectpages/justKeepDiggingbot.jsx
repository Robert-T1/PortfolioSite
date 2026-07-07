import ProjectPage from '../../components/ProjectPage'

import githubIcon from '../../assets/images/github_icon.png'
import ss1 from '../../assets/images/projectIcons/jkdb_ss1.png'
import ss2 from '../../assets/images/projectIcons/jkdb_ss2.png'

function JustKeepDiggingBot() {
    return (
        <ProjectPage
            title="Just Keep Digging Discord Bot"
            skills={["JavaScript", "MongoDB", "Git / Version Control", "Discord.js"]}
            description="Just Keep Digging Discord Bot was developed to support community engagement for the game Just Keep Digging.
                Players can use /mine to collect randomly weighted resources and sell them for company coins.
                Reaching set milestones unlocks rewards like VIP roles, access to special channels, and even the ability to contribute directly to the game by adding ores or structures."
            reflections="I created the Just Keep Digging Discord bot to build excitement for the game's release and foster a community around it.
                The bot helped drive engagement, with some dedicated players earning over 10,000 company coins—running commands hundreds of times, each with a 30-second cooldown.
                It became a fun way to keep players active and invested in the game's development."
            links={[
                { icon: githubIcon, href: "https://github.com/Robert-T1/JustKeepDiggingBot", alt: "Just Keep Digging Bot on GitHub" },
            ]}
            gallery={[
                { src: ss1, alt: "Just Keep Digging Discord bot commands" },
                { src: ss2, alt: "Just Keep Digging Discord bot milestones" },
            ]}
        />
    );
}

export default JustKeepDiggingBot;
