import ProjectPage from '../../components/ProjectPage'

import githubIcon from '../../assets/images/github_icon.png'

function BankBot() {
    return (
        <ProjectPage
            title="Bank Bot"
            skills={["JavaScript", "MongoDB", "Git / Version Control", "Discord.js"]}
            description="Bank Bot is a simple Discord bot designed to manage the simulated finances of a community.
                It supports features like fund transfers, a loan system, teller-side validation, and handling of withdrawals and deposits."
            reflections="Bank Bot was originally created for a small private Minecraft server, but I designed it to be dynamic and adaptable for any community with an economy system.
                While it's a relatively small project, it saw daily use by around 30 users."
            links={[
                { icon: githubIcon, href: "https://github.com/Robert-T1/Bank-Discord-Bot", alt: "Bank Bot on GitHub" },
            ]}
        />
    );
}

export default BankBot;
