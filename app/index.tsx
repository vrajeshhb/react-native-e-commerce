import * as React from "react";
import OnBoardingScreen from "../src/screens/onBoardingScreen";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const fnGetStarted = () => {
    router.push("/login");
  };
  return (
    <>
      <OnBoardingScreen fnGetStarted={fnGetStarted} />
    </>
  );
}
