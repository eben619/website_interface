
import Incubation from "@/components/sections/Incubation";
import Explore from "@/components/ui/Cad/Explore";
import UpcomingEvent from "@/components/ui/Cad/UpCommingEvent";
import Hero from "@/components/sections/Hero";
import Head from "next/head";
import Together from "@/components/sections/Together";

import Corousel from "@/components/ui/Cad/Corousel";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Celo Africa DAO</title>
        <meta name="description" content="Liquidity staking protocol" />
        <meta name="og:image" content="./Celo-AD-primary-logo.svg" />
        <meta name="og:twitter" content="./Celo-AD-primary-logo.svg" />
        <meta name="twitter:image" content="./Celo-AD-primary-logo.svg" />
        <meta property="twitter:title" content="Celo Africa DAO" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Celo Africa DAO" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gt-alpina-trial" />
        <meta
          name="keywords"
          content="Celo, Africa, DAO, cUSD, Ecosystem"
        />
      </Head>
      <>
        <Hero/>
        <Corousel/>
        <Together/>
        <Incubation/>
        <Explore/>
       
        <UpcomingEvent/>
        <Incubation/>
      </>
    </div>
  );
}
