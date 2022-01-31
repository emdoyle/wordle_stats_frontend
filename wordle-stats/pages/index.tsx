import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Links, Section } from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle Stats</title>
        <meta name="description" content="Wordle Stats Homepage" />
        <Links />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Wordle Stats</h1>

          <p className={styles.description}>A Slack bot for Wordle!</p>
          <Image
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
          />
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
          />
        </Section>
        <Section
          title="Compare"
          description="Compare your scores over time and track your average!"
        >
          <Image
            alt="Slack post showing recent scores and average score for a user"
            width="300"
            height="228"
            src="/DisplayScores.png"
          />
          <div className={styles.hide_mobile}>
            <Image
              alt="Slack post showing recent scores and average score for a second user"
              width="300"
              height="228"
              src="/DisplayScores2.png"
            />
          </div>
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
          />
        </Section>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Privacy Policy [TODO]
        </a>
      </footer>
    </div>
  );
};

export default Home;
