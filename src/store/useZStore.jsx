import { create } from 'zustand';

export const useZStore = create((set, get) => ({
  selectedAssets: {
    head: 'var1',
    body: 'var1',
  },
  assetProperties: {
    head: [
      {
        id: 'var1',
        name: 'Head Variant 1',
        url: '/3D/hair/hair.glb',
        color: '#d4a373',
        position: { x: 0, y: 0, z: 0 },
      },
      //   {
      //     id: 'var2',
      //     name: 'Head Variant 2',
      //     url: '/3D/hair/hair_var2.glb',
      //     color: '#d4a373',
      //     position: { x: 0, y: 0, z: 0 },
      //   },
    ],

    body: [
      {
        id: 'var1',
        name: 'Body Variant 1',
        url: '/3D/head/body.glb',
        color: '#ffffff',
        position: { x: 0, y: 0, z: 0 },
      },
      //   {
      //     id: 'var2',
      //     name: 'Body Variant 2',
      //     url: '/3D/body/body_var2.glb',
      //     color: '#d4a373',
      //     position: { x: 0, y: 0, z: 0 },
      //   },
    ],
  },

  setSelectedAsset: (assetType, assetId) => {
    set((state) => ({
      selectedAssets: { ...state.selectedAssets, [assetType]: assetId },
    }));
  },

  setActiveAssetType: (assetType) => set({ activeAssetType: assetType }),

  getSelectedAssetData: (assetType) => {
    const state = get();
    const selectedId = state.selectedAssets[assetType];
    return (
      state.assetProperties[assetType]?.find((v) => v.id === selectedId) ?? null
    );
  },

  // Mutates a single property (position, color) on a specific variant
  updateAssetProperty: (assetType, assetId, property, value) => {
    set((state) => ({
      assetProperties: {
        ...state.assetProperties,
        [assetType]: state.assetProperties[assetType].map((variant) =>
          variant.id === assetId ? { ...variant, [property]: value } : variant
        ),
      },
    }));
  },
}));
