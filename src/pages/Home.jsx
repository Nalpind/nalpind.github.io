function Home() {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-9 ">
            <div className="col-span-3 grid grid-cols-subgrid mt-10 ml-10">
                <span className="text-4xl sm:text-7xl col-start-1 col-span-3">I’m Grey S. Pen.</span>
                <span className="text-2xl sm:text-4xl col-start-1 col-span-3 mt-5">A Creative developer.</span>
                <span className="text-3xl sm:text-5xl col-start-1 col-span-3">Crafting spaces where code meets canvas. </span>
                <span className="text-sm text-taupe-100">What goes into it?</span>
                <span className="text-sm text-taupe-600 max-w-md">I am a creative developer specializing in motion design and 3D interaction. Translating complex logic into a seamless immersive experience.</span>
            </div>
            </div>
        </div>
        
    )
}

export default Home