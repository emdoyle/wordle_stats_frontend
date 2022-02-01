import { ImageProps } from "next/image";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CloudflareImageLoader } from "../loaders";

export const WrappedImage = ({
  isLocal,
  ...props
}: Omit<ImageProps, "loader"> & { isLocal?: boolean }) => {
  return (
    <div className={styles.image_wrapper}>
      {isLocal ? (
        <Image {...props} />
      ) : (
        <Image {...props} loader={CloudflareImageLoader} />
      )}
    </div>
  );
};
