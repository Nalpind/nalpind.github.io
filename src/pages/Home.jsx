import "./Home.css"
import Logo from "../assets/logoIcon"
import { Parallax } from "react-scroll-parallax";

function pressed() {
    console.log("pressed")
    return 0;
}

function Home() {
    return (
        <div className="content">

            <div className="topSection">
                <div className="textContainer">
                    <h1>I'm Grey S. Pen.</h1>
                    <h1>a frontend developer.</h1>
                    <p>A computer science graduate with a creatives perspective. Building web applications to bridge the gap between code and canvas.</p>
                    <button onClick={pressed}>
                        CV
                    </button>
                </div>
                <div>
                    <Logo fillColor="blue" height="200px" width="200px" />
                </div>
            </div>
            <div className="bottomSection">

                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
                <h2>
                    What I do.
                </h2>
                <p> I wanna take up hella space</p>
            </div>
        </div>
    )
}

export default Home