import Login from "./_view/login";
import Signup from "./_view/signup";

export const metadata = {
  title: "LogIn",
};

export default function loginpage() {
  return (
    <>
      <section className="h-[260px] flex flex-col justify-center items-center">
        <h2 className="text-[76px]">Welcome</h2>
        <p>'MonoShare' is for people who wants to show themself without negative comments.</p>
      </section>
      <section className="flex flex-col xl:flex-row border-y border-black w-full">
        <Login />
        <div className=" h-[585px] w-[1px] bg-black hidden xl:block"></div>
        <Signup />
      </section>
    </>
  );
}
