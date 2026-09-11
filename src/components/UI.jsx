import { useZStore } from '../store/useZStore'
import { Asset } from '../components/Asset'
import { Tab } from '../components/Tab'

export const UI = () => {
    const selectedAssets = useZStore((state) => state.selectedAssets)
    const active = useZStore((state) => state.active)
    const assetList = useZStore((state) => state.assetList)
    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between">
            <div className="flex h-3/4 w-1/4">
                <div className="flex flex-4 flex-col items-center rounded-r-lg bg-slate-300">
                    <div className="flex h-2/18 w-full flex-row items-center">
                        <div className="pl-5 text-3xl font-bold text-slate-900 text-shadow-[-2px_2px_1px_rgba(0,0,0,0.25)]">{active}</div>
                    </div>
                    <div className="grid-col grid w-full grid-cols-2 justify-between gap-2 px-3">
                        {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset key={current} assetId={current} /> : ''))}
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <div className="h-2/18" />
                    {Object.entries(selectedAssets).map(([category]) => (
                        <Tab key={category} name={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}
