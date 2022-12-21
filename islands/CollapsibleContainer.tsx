import { useState } from "preact/hooks";
import { JSX, VNode } from "preact";
import { ICollapsibleTitleProps } from "../components/CollapsibleTitle.tsx";
g
interface ICollapsibleContainerProps {
  id: string;
  title: string;
}

const CollapsibleContainer = (props: ICollapsibleContainerProps) => {
  const [isFoldedOut, setFolded] = useState(false);

  const getFoldClass = () => {
    return isFoldedOut ? "collapsible-container-fold-out" : "";
  };

  return (
    <div
      class={`collapsible-container ${getFoldClass()}`}
      onClick={() => setFolded(!isFoldedOut)}
    >
      <div class="title-container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default CollapsibleContainer;
