import LogoLoop from '../components/LogoLoop';
import {
	SiTailwindcss,
	SiRender,
	SiMistralai,
	SiGooglesheets,
	SiLatex,
	SiHtml5,
	SiReact,
	SiLinux,
	SiCss,
	SiPython,
	SiMongodb,
	SiExpo,
	SiPrettier,
	SiGooglecolab,
	SiNodedotjs,
	SiFigma,
	SiJavascript,
	SiGoogleappsscript,
	SiOllama,
	SiNvm,
	SiBlender,
	SiGit,
	SiGithub,
	SiNpm,
	SiThreedotjs,
	SiReactrouter,
} from 'react-icons/si';

const techLogos = [
	{ node: <SiTailwindcss />, title: 'TailwindCSS', href: 'https://tailwindcss.com', hoverColor: '#38bdf8' },
	{ node: <SiRender />, title: 'Render', href: 'https://render.com', hoverColor: '#f35129' },
	{ node: <SiMistralai />, title: 'MistralAI', href: 'https://mistral.ai', hoverColor: '#7028ff' },
	{ node: <SiGooglesheets />, title: 'Google Sheets', href: 'https://sheets.google.com', hoverColor: '#fbbc04' },
	{ node: <SiLatex />, title: 'LaTeX', href: 'https://www.latex-project.org', hoverColor: '#0a2460' },
	{ node: <SiHtml5 />, title: 'HTML5', href: 'https://html5.dev', hoverColor: '#e34c26' },
	{ node: <SiReact />, title: 'React', href: 'https://reactjs.org', hoverColor: '#20d19f' },
	{ node: <SiLinux />, title: 'Linux', href: 'https://www.linux.org', hoverColor: '#6f42c1' },
	{ node: <SiCss />, title: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', hoverColor: '#0079bf' },
	{ node: <SiPython />, title: 'Python', href: 'https://www.python.org', hoverColor: '#ffd34d' },
	{ node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', hoverColor: '#f2a65c' },
	{ node: <SiExpo />, title: 'Expo', href: 'https://expo.dev', hoverColor: '#09dcff' },
	{ node: <SiPrettier />, title: 'Prettier', href: 'https://prettier.io', hoverColor: '#f38b99' },
	{ node: <SiGooglecolab />, title: 'Google Colab', href: 'https://colab.research.google.com', hoverColor: '#ea4335' },
	{ node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org', hoverColor: '#68a063' },
	{ node: <SiFigma />, title: 'Figma', href: 'https://figma.com', hoverColor: '#f2514b' },
	{ node: <SiJavascript />, title: 'JavaScript', href: 'https://www.javascript.org', hoverColor: '#f7df1e' },
	{ node: <SiGoogleappsscript />, title: 'Google Apps Script', href: 'https://script.google.com', hoverColor: '#ea4335' },
	{ node: <SiOllama />, title: 'Ollama', href: 'https://ollama.com', hoverColor: '#ff9e00' },
	{ node: <SiNvm />, title: 'NVM', href: 'https://github.com/nvm-sh/nvm', hoverColor: '#51cf66' },
	{ node: <SiBlender />, title: 'Blender', href: 'https://www.blender.org', hoverColor: '#d40a36' },
	{ node: <SiGit />, title: 'Git', href: 'https://git-scm.com', hoverColor: '#f05032' },
	{ node: <SiGithub />, title: 'GitHub', href: 'https://github.com', hoverColor: '#f0f6fc' },
	{ node: <SiNpm />, title: 'npm', href: 'https://www.npmjs.com', hoverColor: '#cb3837' },
	{ node: <SiThreedotjs />, title: 'Three.js', href: 'https://threejs.org', hoverColor: '#9dc2ff' },
	{ node: <SiReactrouter />, title: 'React Router', href: 'https://reactrouter.com', hoverColor: '#ea1d36' },
];

function Home() {
	return (
		<div>
			<div className='t-0 l-0 absolute z-1'></div>
			<div className='h-screen w-screen grid grid-cols-3 md:grid-cols-9'>
				<div className='flex justify-center flex-col gap-1 md:gap-5 col-span-3 md:col-span-4 pl-10 md:pl-20'>
					<span className='text-4xl md:text-8xl '>Hi,</span>
					<span className='text-4xl md:text-8xl font-bold'>I'm Grey,</span>
					<span className='text-3xl md:text-6xl'>a Creative developer.</span>
				</div>
				<div className='col-span-3 md:col-span-5 flex justify-center items-center text-3xl'>MODEL PLACEHOLDER</div>
			</div>
			<div className='h-screen w-screen'>
				<LogoLoop logos={techLogos} speed={60} direction='left' logoHeight={36} gap={54} hoverSpeed={0} scaleOnHover ariaLabel='Technology partners' />
				<span className=''>Crafting spaces where code meets canvas.</span>
				<span className=''>What goes into it?</span>
				<span className=''>I am a creative developer specializing in motion design and 3D interaction. Translating complex logic into a seamless immersive experience.</span>
			</div>
		</div>
	);
}

export default Home;
