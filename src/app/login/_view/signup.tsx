"use client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

export default function Signup() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);

      await updateProfile(credentials.user, {
        displayName: name,
      });
      alert("어서오세요!");
      //여기에 모달 띄우고 모달 x 누를시 redirect하는 것이 더 좋을 듯
      router.push("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
        if (e.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email is already in use");
        }
      }
    } finally {
      setLoading(false);
    }

    //console.log(name, email, password);
  };
  return (
    <div className="w-full xl:w-1/2 flex flex-col justify-center items-center  h-[585px]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center w-[670px]"
      >
        <h3 className="text-[40px]">Sign Up</h3>
        <input
          className="border-b border-black w-full h-[65px] focus:outline-none"
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          autoComplete="off"
          required
        />
        <input
          className="border-b border-black w-full h-[65px] focus:outline-none relative"
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          autoComplete="off"
          required
        />
        <div className="relative w-full">
          <input
            className="border-b border-black w-full h-[65px] focus:outline-none relative"
            onChange={onChange}
            name="password"
            value={password}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            required
          />
          <a
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
          >
            {showPassword ? <EyeSlash size="32" /> : <Eye size="32" />}
          </a>
        </div>
        <Button
          type="submit"
          className={cn(
            " h-[65px] w-full rounded-none mt-[20px] text-xl font-semibold  transition-all bg-transparent text-black border border-black hover:bg-black hover:text-white",
            isLoading && "bg-black"
          )}
          disabled={isLoading ? true : false}
        >
          {isLoading ? (
            <Spinner size="medium" className="text-white" />
          ) : (
            "Join Us"
          )}
        </Button>
      </form>
      <p className="mt-[20px]">{error}</p>
    </div>
  );
}
