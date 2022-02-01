import { NextPage } from "next";
import Link from "next/link";
import { Footer, Layout } from "../components";
import styles from "../styles/Home.module.css";

const Support: NextPage = () => {
  return (
    <Layout support={false}>
      <div className={styles.header}>
        <h1 className={styles.title}>Support</h1>
      </div>
      <div className={styles.description}>
        Please contact me at{" "}
        <a className={styles.mailto} href="mailto:support@0x63problems.dev">
          support@0x63problems.dev
        </a>{" "}
        for any support questions.
      </div>
      <div className={styles.content}>
        <Link href="/" passHref>
          <button>Back to Homepage →</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Support;
