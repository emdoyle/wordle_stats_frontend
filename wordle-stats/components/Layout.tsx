import { Footer, FooterProps } from "./Footer";
import styles from "../styles/Home.module.css";
import { FC } from "react";

export const Layout: FC<FooterProps> = ({
  children,
  privacyPolicy = true,
  support = true,
  termsOfService = true,
}) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <Footer
        privacyPolicy={privacyPolicy}
        support={support}
        termsOfService={termsOfService}
      />
    </div>
  );
};
