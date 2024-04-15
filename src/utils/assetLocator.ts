export type AssetType = "favicon" | "img" | "none";

const assetRootLocation = `${process.env.PUBLIC_URL}/assets`;

const getAssetLocation = (assetName: string, assetType: AssetType) => {
    // regular expression for "filename.fileending"
    const validNameRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+$/;
  
    if (!validNameRegex.test(assetName)) {
      throw new Error("assetName must match the schema 'filename.fileending'.");
    }

    switch (assetType) {
        case "favicon":
        case "img":
            return `${assetRootLocation}/${assetType}/${assetName}`;
        default:
            return `${assetRootLocation}/${assetName}`;
    }
};

export default getAssetLocation;