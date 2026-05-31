import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="flex justify-center">
        <SignIn />
      </div>
    </section>
  );
}
