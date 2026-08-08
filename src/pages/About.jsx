import "./About.css"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import medium from "../assets/Medium.png"
import back from "../assets/Background.png"
import far from "../assets/Far.png"
function About() {
    return (
        <ParallaxBanner style={{ aspectRatio: '1 / 2' }}>
            <ParallaxBannerLayer speed={-100}>
                <img src={back} style={{ width: '100vw' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-50}>
                <img src={far} style={{ width: '100vw' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={0}>
                <img src={medium} style={{ width: '100vw'  }} />
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

export default About