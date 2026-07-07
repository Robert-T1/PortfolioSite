import ProjectPage from '../../components/ProjectPage'

import trelloIcon from '../../assets/images/trelloIcon.png'
import githubIcon from '../../assets/images/github_icon.png'

function PortfolioSite() {
    return (
        <ProjectPage
            title="Portfolio Site"
            skills={["React", "JavaScript", "Vite", "HTML/CSS", "Git / Version Control"]}
            description="A personal website showcasing my professional work, employment history, accomplishments, skills, and general background."
            reflections="This site is an overhaul of my original version, which was built using only HTML, CSS, and JavaScript.
                That version was janky and inflexible, so I rebuilt it to better showcase my work and demonstrate my ability to use modern web frameworks.
                You can follow the development process on Trello and explore the code in detail on GitHub."
            links={[
                { icon: githubIcon, href: "https://github.com/Robert-T1/PortfolioSite", alt: "Portfolio Site on GitHub" },
                { icon: trelloIcon, href: "https://trello.com/b/OJpdBZNv/portfoilo-website", alt: "Portfolio Site Trello board" },
            ]}
        />
    );
}

export default PortfolioSite;
