import { asset, Head } from "$fresh/runtime.ts";
import CollapsibleTitle from "../components/CollapsibleTitle.tsx";
import Signature from "../components/Signature.tsx";
import CollapsibleContainer from "../islands/CollapsibleContainer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trying out custom css with fresh and deno</title>
        <link rel="stylesheet" href={asset("/style.css")} />
      </Head>
      <div class="collapsible-wrapper">
        <CollapsibleContainer id="collapsible-one" title="About" />
        <CollapsibleContainer id="collapsible-two" title="Contact" />
        <CollapsibleContainer id="collapsible-three" title="Projects" />
      </div>
    </>
  );
}
