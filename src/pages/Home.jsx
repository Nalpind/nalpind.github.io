function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-9">
        <div className="grid grid-cols-subgrid text-taupe-100 col-span-3 md:col-span-9">
          <div className="flex flex-col col-start-1 col-span-2 gap-2 md:gap-5 md:col-span-4">
            <span className="flex font-semibold text-4xl justify-end md:text-7xl">
              Grey S. Pen.
            </span>
            <span className="flex mb-95 text-xl col-start-1 justify-end col-span-2 md:text-4xl md:col-span-4">
              Creative developer.
            </span>
          </div>
          <span className="text-3xl col-start-1 col-span-3 md:text-5xl md:col-span-9">
            Crafting spaces where code meets canvas.
          </span>
          <span className="mt-50 text-sm col-start-1 col-span-2">
            What goes into it?
          </span>
          <span className="text-sm col-start-1 col-span-2 md:col-start-2 md:col-span-9">
            I am a creative developer specializing in motion design and 3D
            interaction. Translating complex logic into a seamless immersive
            experience.
          </span>
        </div>

      </div>
    </div>
  );
}

export default Home;
