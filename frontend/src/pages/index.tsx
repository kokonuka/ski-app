import { Head } from "@/components/Head";
import { TopLayout } from "@/components/templates/TopLayout";

export default function Home() {
  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_TITLE}`}
        description={`${process.env.NEXT_PUBLIC_DESCRIPTION}`}
      />
      <TopLayout />
    </>
  );
}
