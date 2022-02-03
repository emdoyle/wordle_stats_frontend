import { BackHomeButton, Layout } from "../components";
import styles from "../styles/Home.module.css";

const Success = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>Success!</h1>
      </div>
      <div className={styles.description}>
        Thanks for installing Wordle Stats ✨
      </div>
      <div className={styles.content}>
        <BackHomeButton />
      </div>
    </Layout>
  );
};

export default Success;
