import ProjectPage from '../../components/ProjectPage'

import ss1 from '../../assets/images/projectIcons/gg_ss1.png'
import ss2 from '../../assets/images/projectIcons/gg_ss2.png'
import ss3 from '../../assets/images/projectIcons/gg_ss3.png'

function GardenGame() {
    return (
        <ProjectPage
            title="Garden Game"
            skills={["C#", "Unity Engine", "Android Development", "Version Control", "Google Play Integration", "AdMob Integration", "Art", "Sound Design", "Design"]}
            description="Garden Game is a peaceful farming simulation.
                Start with a few tomato seeds and carefully tend your garden—dodging turtles and harvesting crops at peak ripeness.
                Sell your produce at the market to earn profit and expand your collection. With 26 unique seeds to discover and grow,
                can you collect them all?"
            reflections="Garden Game was originally published on the Google Play Store in April 2021 and remained available until 2023.
                It received over 50 downloads. Built in just two months, it was a simple mobile game that served as a fun and focused development project."
            gallery={[
                { src: ss1, alt: "Garden overview in Garden Game" },
                { src: ss2, alt: "Tending crops in Garden Game" },
                { src: ss3, alt: "Market in Garden Game" },
            ]}
        />
    );
}

export default GardenGame;
