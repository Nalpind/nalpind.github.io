import { useZStore } from '../store/useZStore';


export function Tab({ name }) {
    const setActiveTab = useZStore((state) => state.setActiveTab);
    const active = useZStore((state) => state.active);
    const handleClick = (name) => {
        setActiveTab(name)
    }
    return (
        <button
            onClick={() => handleClick(name)}
            className={`pointer-events-auto w-full aspect-square  p-3 rounded-r-lg ${active === name ? ' bg-amber-300 ' : 'outline-2 -outline-offset-2 bg-amber-800'}`}
        >
            <h1 >{name}</h1>
        </ button>
    )
}