import { useZStore } from '../store/useZStore';

export const UI = () => {
  const { assetProperties, setSelectedAsset, selectedAssets, updateAssetProperty, getSelectedAssetData } = useZStore();



  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
      <div className="flex w-1/5 flex-col gap-10 self-center p-6 text-sm text-slate-200">
        <div className="font-semibold uppercase tracking-[0.2em] text-slate-300">Menu L</div>
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">Slider</div>
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">Slider</div>
        <div >
          <div className="pointer-events-auto h-full">
            <button
              onClick={() => {
                const curPos = getSelectedAssetData('head').position.x;
                updateAssetProperty('head', 'var1', 'position', {
                  x: curPos + 1,
                  y: 0,
                  z: 0,
                });
                console.log(assetProperties)
              }}
              type="button"
            >
              Add X
            </button>

          </div>
        </div>
      </div>


      <div className="flex h-[85%] w-[28rem] flex-row self-center">
        <div className="pointer-events-auto flex w-12 flex-col justify-center gap-4 py-5">
          <button type="button" className="rounded-l-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-lg text-slate-100">
            -
          </button>
        </div>

        <div className="pointer-events-auto flex w-full flex-col gap-4 rounded-l-2xl border border-slate-700 bg-slate-950/80 p-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Category</div>

          {Object.entries(assetProperties).map(([assetType, variants]) => (
            <div key={assetType} className="space-y-3">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{assetType}</div>
              <div className="grid grid-cols-2 gap-3">
                {variants.map((variant) => {
                  const isSelected = selectedAssets[assetType] === variant.id;

                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedAsset(assetType, variant.id)}
                      className={`aspect-square rounded-2xl border p-2 transition ${isSelected ? 'border-cyan-400 bg-cyan-500/20' : 'border-slate-600 bg-amber-200'
                        }`}
                    >
                      <div className="flex h-full items-center justify-center rounded-xl bg-slate-50/80 text-xs font-semibold text-slate-900">
                        {variant.id}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

