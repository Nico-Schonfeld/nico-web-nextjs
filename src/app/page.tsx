import React, { Suspense } from "react";
import HomeServer from "@/components/layout/home/page";
import Loading from "./loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomeServer />
    </Suspense>
  );
};

export default App;
