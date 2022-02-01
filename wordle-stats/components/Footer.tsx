import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FC } from "react";

export type FooterProps = {
  privacyPolicy?: boolean;
  support?: boolean;
};

export const Footer: FC<FooterProps> = ({
  privacyPolicy = true,
  support = true,
}) => {
  return (
    <footer className={styles.footer}>
      {privacyPolicy && (
        <Link href="/privacy" passHref>
          <a>Privacy Policy</a>
        </Link>
      )}
      {support && (
        <Link href="/support" passHref>
          <a>Support</a>
        </Link>
      )}
    </footer>
  );
};
