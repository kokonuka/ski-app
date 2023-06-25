import { Head } from "@/components/Head";
import { MessageLayout } from "@/components/templates/MessageLayout";

export default function Page() {
  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_TITLE}`}
        description={`${process.env.NEXT_PUBLIC_DESCRIPTION}`}
      />
      <MessageLayout />
    </>
  );
}
