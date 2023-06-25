import { Head } from "@/components/Head";
import { ProfileLayout } from "@/components/templates/ProfileLayout";

export default function Profile() {
  return (
    <>
      <Head
        title={`${process.env.NEXT_PUBLIC_TITLE}`}
        description={`${process.env.NEXT_PUBLIC_DESCRIPTION}`}
      />
      <ProfileLayout />
    </>
  );
}
