
export const UI = () => {

    return (
        <div className="pointer-events-none absolute w-full h-full z-10 justify-between  flex ">
            <div className="self-center flex-col flex w-1/5 outline-3 gap-10">
                Menu L
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
            </div>
            <div className="w-1/6 h-1/24 text-center outline-1">
                Mid
            </div>
            <div className="self-center flex-row flex w-1/5 outline-3 ">
                <div className="flex-col flex outline-1 pointer-events-auto">
                    <button type='button' onClick={() => console.log("click")}>
                        Collapse
                    </button>
                    <button>
                        First
                    </button>
                    <button>
                        Second
                    </button>
                    <button>
                        Third
                    </button>
                    <button>
                        Fourth
                    </button>
                    <button>
                        Fifth
                    </button>
                    <button>
                        Sixth
                    </button>
                </div>
                <div className="flex flex-col w-full">
                    <div>Category</div>
                    <div className="grid grid-cols-3">
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}