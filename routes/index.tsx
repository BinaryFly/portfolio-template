import { asset, Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trying out custom css with fresh and deno</title>
        <link rel="stylesheet" href={asset("/style.css")} />
      </Head>
      <div id="collapsible-one" class="collapsibleContainer">
      </div>
      <div id="collapsible-two" class="collapsibleContainer">
      </div>
    </>
  );
}
