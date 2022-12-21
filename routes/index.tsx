import { asset, Head } from "$fresh/runtime.ts";
import CollapsibleWrapper from "../islands/CollapsibleWrapper.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trying out custom css with fresh and deno</title>
        <link rel="stylesheet" href={asset("/style.css")} />
      </Head>                                               
      <CollapsibleWrapper />
    </>
  );
}
