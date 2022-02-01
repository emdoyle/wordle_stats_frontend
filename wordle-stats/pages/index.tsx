import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Section, Image, AddToSlack, Layout } from "../components";

type HomePageProps = {
  isLocal: boolean;
};

const Home: NextPage<HomePageProps> = ({ isLocal }) => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>Wordle Stats</h1>

        <p className={styles.description}>A Slack bot for Wordle!</p>
        <AddToSlack isLocal={isLocal} />
      </div>

      <Section
        title="Submit"
        description="Submit your scores to track your Wordle performance!"
      >
        <Image
          alt="Slack post showing form to submit Wordle score"
          width="600"
          height="207"
          src="/SubmitScore.png"
          isLocal={isLocal}
        />
      </Section>
      <Section
        title="Discuss"
        description="Discuss the daily solution with friends!"
      >
        <Image
          alt="Slack post showing a post titled '1/31 Solution Thread"
          width="600"
          height="107"
          src="/SolutionThread.png"
          isLocal={isLocal}
        />
      </Section>
      <Section
        title="Compare"
        description="Compare your scores over time and track your average!"
      >
        <Image
          alt="Slack post showing recent scores and average score for a user"
          width="293"
          height="223"
          src="/DisplayScores.png"
          isLocal={isLocal}
        />
        <Image
          alt="Slack post showing recent scores and average score for a second user"
          width="293"
          height="223"
          src="/DisplayScores2.png"
          isLocal={isLocal}
        />
      </Section>
      <Section
        title="Compete"
        description="Compete with your friends to earn first place!"
      >
        <Image
          alt="Slack post showing winners of the day"
          width="600"
          height="176"
          src="/Podium.png"
          isLocal={isLocal}
        />
      </Section>
    </Layout>
  );
};

export default Home;

export function getStaticProps() {
  if (process.env.LOCAL) {
    return {
      props: {
        isLocal: true,
      },
    };
  }
  return { props: { isLocal: false } };
}
