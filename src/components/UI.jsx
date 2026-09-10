import { useZStore } from '../store/useZStore';
import { Tab } from '../components/Tab';

export const UI = () => {
  const active = useZStore((state) => state.active);
  const selectedAssets = useZStore((state) => state.selectedAssets);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between">
      <div className='w-1/5 h-3/4 flex'>

        <div className='flex-col  bg-amber-300 flex items-center w-full  outline-3 rounded-r-lg'>
          <h1 className=''>Asset Menu</h1>
          Grid of elements

          <div>
          </div>
        </div>
        <div className='flex flex-col pt-5 gap-5'>
          {Object.entries(selectedAssets).map(([category]) => (
            <Tab name={category} />
          ))}

        </div>

      </div>





    </div>
  );
};

