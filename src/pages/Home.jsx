import "./Home.css"
import LottieAnimation from "../components/LottieAnimation"
import animationData from "../assets/lottie.json"

function Home() {
    return (
        <div className="content" style={{ backgroundColor: 'grey' }}>

            <div className="topSection">
                <div className="textContainer">
                    <h1>I'm Grey S. Pen.</h1>
                    <h1>a frontend developer.</h1>
                    <p>A computer science graduate with a creatives perspective. Building web applications to bridge the gap between code and canvas.</p>

                    <LottieAnimation animationData={animationData} />

                </div>
            </div>
        </div>
    )
}

export default Home