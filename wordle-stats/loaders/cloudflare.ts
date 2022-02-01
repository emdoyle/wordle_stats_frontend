import { ImageLoader } from "next/image";

const IMAGE_RESIZING_PATH = "/image-resizing";

export const CloudflareImageLoader: ImageLoader = ({ src, width, quality }) => {
  const params: Record<string, string> = {
    src,
    width: `${width}`,
  };
  if (quality !== undefined) {
    params.quality = `${quality}`;
  }
  return `${IMAGE_RESIZING_PATH}?${new URLSearchParams(params)}`;
};
