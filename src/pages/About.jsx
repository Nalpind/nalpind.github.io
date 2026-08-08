import "./About.css"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import front from "../assets/front.png"
import back from "../assets/back.png"
function About() {
    return (
        <ParallaxBanner style={{ aspectRatio: '1 / 2' }}>
            <ParallaxBannerLayer speed={-30}>
                <img src={back} style={{ width: '100%' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-10}>
                <img src={front} style={{ width: '100%' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-60}>
                <img src={back} style={{ width: '100%',  }} />
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

export default About