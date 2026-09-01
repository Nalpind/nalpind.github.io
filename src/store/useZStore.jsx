import { create } from 'zustand';

export const useZStore = create((set) => ({
    selectedAssets: {
        top: 'var1',
        bot: 'var1',
    },
    selectedVariant: {
        top: 'var1',
        bot: 'var1',
    },
    assetProperties: {
        top: [
            { id: 'var1', color: '#ffffff', texture: '/3D/top/straight.glb' },
            { id: 'var2', color: '#000000', texture: '/3D/top/turned.glb' },
        ],
        bot: [
            { id: 'var1', color: '#ffffff', texture: '/3D/bot/square.glb' },
            { id: 'var2', color: '#000000', texture: '/3D/bot/skewed.glb' },
        ],
    },
    setSelectedAsset: (assetType, asset) => {
        set((state) => ({
            selectedAssets: {
                ...state.selectedAssets,
                [assetType]: asset,
            },
            selectedVariant: {
                ...state.selectedVariant,
                [assetType]: asset,
            },
        }));
    },
    setSelectedVariant: (assetType, variantId) => {
        set((state) => ({
            selectedAssets: {
                ...state.selectedAssets,
                [assetType]: variantId,
            },
            selectedVariant: {
                ...state.selectedVariant,
                [assetType]: variantId,
            },
        }));
    },
    getSelectedAssetProperties: (assetType) => {
        const selectedVariant = useZStore.getState().selectedAssets[assetType] ?? useZStore.getState().selectedVariant[assetType];
        return useZStore.getState().assetProperties[assetType].find((variant) => variant.id === selectedVariant);
    },
}));

