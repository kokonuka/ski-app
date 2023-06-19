import { Head } from "@/components/Head";

export default function Home() {
  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_TITLE}`}
        description={`${process.env.NEXT_PUBLIC_DESCRIPTION}`}
      />
    </>
  );
}
