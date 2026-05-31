import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="flex justify-center">
        <SignUp />
      </div>
    </section>
  );
}
