import ProjectPage from '../../components/ProjectPage'

import robloxIcon from '../../assets/images/projectIcons/clansandclaimsIcon.png'
import ss1 from '../../assets/images/projectIcons/cac_ss1.png'
import ss2 from '../../assets/images/projectIcons/cac_ss2.png'
import ss3 from '../../assets/images/projectIcons/cac_ss3.png'

function ClansAndClaims() {
    return (
        <ProjectPage
            title="Clans And Claims"
            skills={["Lua", "Roblox Engine", "RPC Networking", "Game Design"]}
            description="Clans and Claims is a competitive territory-control game where you build your clan, expand your land, and fight off rivals.
                Construct homes for income, farms for resources, and strongholds to defend your turf. Strategize, upgrade, and lead your clan to dominance."
            reflections="Clans and Claims was developed using the Roblox engine to rapidly prototype and test multiplayer gameplay without needing to manage server infrastructure.
                The platform also allowed for fast iteration and accessible player feedback. The game reached over 2,500 plays, peaking at 160 concurrent players across four servers."
            links={[
                { icon: robloxIcon, href: "https://www.roblox.com/games/15197006955/Clans-And-Claims", alt: "Clans And Claims on Roblox" },
            ]}
            gallery={[
                { src: ss1, alt: "Territory overview in Clans And Claims" },
                { src: ss2, alt: "Clan base in Clans And Claims" },
                { src: ss3, alt: "Combat in Clans And Claims" },
            ]}
        />
    );
}

export default ClansAndClaims;
