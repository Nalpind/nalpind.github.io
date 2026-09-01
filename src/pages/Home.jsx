function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-9">
        <div className="col-span-3 grid grid-cols-subgrid text-taupe-100 md:col-span-9">
          <div className="col-span-2 col-start-1 flex flex-col gap-2 md:col-span-4 md:gap-5">
            <span className="flex justify-end text-4xl font-semibold md:text-7xl">
              Grey S. Pen.
            </span>
            <span className="col-span-2 col-start-1 mb-95 flex justify-end text-xl md:col-span-4 md:text-4xl">
              Creative developer.
            </span>
          </div>
          <span className="col-span-3 col-start-1 text-3xl md:col-span-9 md:text-5xl">
            Crafting spaces where code meets canvas.
          </span>
          <span className="col-span-2 col-start-1 mt-50 text-sm">
            What goes into it?
          </span>
          <span className="col-span-2 col-start-1 text-sm md:col-span-9 md:col-start-2">
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
