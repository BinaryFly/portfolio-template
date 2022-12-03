import { useState } from "preact/hooks";
import { JSX, VNode } from "preact";
import { ICollapsibleTitleProps } from "../components/CollapsibleTitle.tsx";

interface ICollapsibleContainerProps {
  id: string;
  title: string;
}

const CollapsibleContainer = (props: ICollapsibleContainerProps) => {
  const [isFoldedOut, setFoldState] = useState(false);
  const getFoldCssClass = () => {
    return isFoldedOut ? "openCollapsible" : "closedCollapsible";
  };
  return (
    <div
      id={props.id}
      class={`collapsible ${getFoldCssClass()}`}
      onClick={() => setFoldState(!isFoldedOut)}
    >
      <div class="titleContainer">
        <h1 class="collapsibleTitle">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default CollapsibleContainer;
