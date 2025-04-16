import Image from "next/image";

import { cn, screenSizes } from "@/lib/utils";

export const ImageMedia = (props) => {
  const {
    alt,
    fill,
    className,
    priority,
    size: sizeFromProps,
    src,
    loading: loadingFromProps,
    width,
    height,
    blur,
  } = props;

  const loading = loadingFromProps || (!priority ? "lazy" : undefined);

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes =
    sizeFromProps ||
    (screenSizes &&
      `(max-width: ${screenSizes.sm}px) 100vw, 
     (max-width: ${screenSizes.md}px) 100vw, 
     (max-width: ${screenSizes.lg}px) 50vw, 
     (max-width: ${screenSizes.xl}px) 50vw, 
     33vw`);

  return (
    <Image
      alt={alt || ""}
      className={cn(className)}
      fill={fill}
      height={!fill ? height : undefined}
      placeholder={blur ? "blur" : undefined}
      priority={priority}
      quality={100}
      loading={loading}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  );
};
