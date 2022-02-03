import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  Section,
  Image,
  AddToSlack,
  Layout,
  LoopingVideo,
} from "../components";
import { useMediaQuery } from "../hooks/useMediaQuery";

type HomePageProps = {
  isLocal: boolean;
};

const Home: NextPage<HomePageProps> = ({ isLocal }) => {
  const veryWideScreen = useMediaQuery("(min-width: 1400px)");
  const wideScreen = useMediaQuery("(min-width: 850px)");
  const onlyWideScreen = !veryWideScreen && wideScreen;
  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>Wordle Stats</h1>

        <p className={styles.description}>A Slack bot for Wordle!</p>
        <AddToSlack isLocal={isLocal} />
      </div>

      <div className={styles.video_content}>
        {veryWideScreen && (
          <LoopingVideo
            src="/DemoFast.mp4"
            width="1238"
            height="460"
            muted
            playsInline
            autoPlay
            delay={3000}
          />
        )}
        {onlyWideScreen && (
          <LoopingVideo
            src="/SmallDemoFast.mp4"
            width="800"
            height="300"
            muted
            playsInline
            autoPlay
            delay={3000}
          />
        )}
      </div>

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
