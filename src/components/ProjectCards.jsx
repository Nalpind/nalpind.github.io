import TiltedCard, { TiltedCardLayer } from './TiltedCard'
import { useNavigate } from 'react-router-dom'

function ProjectCards() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-row items-center justify-center gap-15">
            <TiltedCard
                imageSrc="./SAM_0210.JPG"
                altText="Sunset clouds"
                captionText="Afterglow"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={5}
                scaleOnHover={1.25}
                glare={0.5}
                shadow={0.5}
                backContent={
                    <div>
                        <div>Photo portfolio gallery</div>
                        <button onClick={() => navigate('/Project1')}>Click me</button>
                    </div>
                }
            >
                <TiltedCardLayer depth={30}>
                    <h3 style={{ position: 'relative', left: 0, bottom: 0, color: '#fffff' }}>displād</h3>
                </TiltedCardLayer>
            </TiltedCard>
            <TiltedCard
                imageSrc="./SAM_0210.JPG"
                altText="Sunset clouds"
                captionText="Afterglow"
                containerHeight="420px"
                containerWidth="420px"
                imageHeight="420px"
                imageWidth="420px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                glare={0.5}
                shadow={0.5}
                backContent={
                    <div>
                        <p style={{ padding: 20 }}>The back of the card</p> <button onClick={() => navigate('/Project2')}>Click me</button>
                    </div>
                }
            >
                <TiltedCardLayer depth={30}>
                    <h3>Minimi</h3>
                </TiltedCardLayer>
            </TiltedCard>
            <TiltedCard
                imageSrc="./SAM_0210.JPG"
                altText="Sunset clouds"
                captionText="Afterglow"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={5}
                scaleOnHover={1.25}
                glare={0.5}
                shadow={0.5}
                backContent={
                    <TiltedCardLayer depth={30}>
                        <p style={{ padding: 20 }}>The back of the card</p>{' '}
                        <button className="bg-amber-200" onClick={() => navigate('/Project3')}>
                            Click me
                        </button>
                    </TiltedCardLayer>
                }
            >
                <TiltedCardLayer depth={30}>
                    <h3>balanced soul</h3>
                </TiltedCardLayer>
            </TiltedCard>
        </div>
    )
}

export default ProjectCards
