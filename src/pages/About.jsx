import "./About.css"
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import medium from "../assets/Medium.png"
import back from "../assets/Background.png"
import far from "../assets/Far.png"
import close from "../assets/Close.png"

function About() {
    return (
        <ParallaxBanner style={{ aspectRatio: '1 / 2' }}>
            <ParallaxBannerLayer speed={-200}>
                <img src={back} style={{ width: '100vw' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-100}>
                <img src={far} style={{ width: '100vw' }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-50}>
                <img src={medium} style={{ width: '100vw'  }} />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={0}>
                <img src={close} style={{ height: '3500px', width: '100vw'  }} />
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

export default About