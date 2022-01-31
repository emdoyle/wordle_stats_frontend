import { ImageProps } from "next/image";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const WrappedImage = (props: ImageProps) => {
  return (
    <div className={styles.image_wrapper}>
      <Image {...props} />
    </div>
  );
};
