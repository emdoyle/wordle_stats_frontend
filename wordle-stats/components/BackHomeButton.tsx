import Link from "next/link";

export const BackHomeButton = () => {
  return (
    <Link href="/" passHref>
      <button>Back to Homepage →</button>
    </Link>
  );
};
