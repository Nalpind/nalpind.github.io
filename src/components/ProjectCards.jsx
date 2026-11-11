import TiltedCard, { TiltedCardLayer } from './TiltedCard';

function ProjectCards() {
	return (
		<div className='flex flex-row gap-15 items-center justify-center'>
			<TiltedCard
				imageSrc='./SAM_0210.JPG'
				altText='Sunset clouds'
				captionText='Afterglow'
				containerHeight='220px'
				containerWidth='220px'
				imageHeight='220px'
				imageWidth='220px'
				rotateAmplitude={5}
				scaleOnHover={1.45}
				glare={0.5}
				shadow={0.5}
				backContent={
					<div>
						<div>Photo portfolio gallery</div>
						<button onClick={() => alert('Clicked!')}>Click me</button>
					</div>
				}>
				<TiltedCardLayer depth={30}>
					<h3 style={{ position: 'relative', left: 0, bottom: 0, color: '#fffff' }}>displād</h3>
				</TiltedCardLayer>
			</TiltedCard>
			<TiltedCard
				imageSrc='./SAM_0210.JPG'
				altText='Sunset clouds'
				captionText='Afterglow'
				containerHeight='320px'
				containerWidth='520px'
				imageHeight='320px'
				imageWidth='520px'
				rotateAmplitude={5}
				scaleOnHover={1.05}
				glare={0.5}
				shadow={0.5}
				backContent={
					<div>
						<p style={{ padding: 20 }}>The back of the card</p> <button onClick={() => alert('Clicked!')}>Click me</button>
					</div>
				}>
				<TiltedCardLayer depth={30}>
					<h3>Minimi</h3>
				</TiltedCardLayer>
			</TiltedCard>
			<TiltedCard
				imageSrc='./SAM_0210.JPG'
				altText='Sunset clouds'
				captionText='Afterglow'
				containerHeight='220px'
				containerWidth='220px'
				imageHeight='220px'
				imageWidth='220px'
				rotateAmplitude={5}
				scaleOnHover={1.45}
				glare={0.5}
				shadow={0.5}
				backContent={
					<div>
						<p style={{ padding: 20 }}>The back of the card</p> <button onClick={() => alert('Clicked!')}>Click me</button>
					</div>
				}>
				<TiltedCardLayer depth={30}>
					<h3>balanced soul</h3>
				</TiltedCardLayer>
			</TiltedCard>
		</div>
	);
}

export default ProjectCards;
