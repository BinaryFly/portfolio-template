import { useState } from "preact/hooks";
import { JSX, VNode } from "preact";
import { ICollapsibleTitleProps } from "../components/CollapsibleTitle.tsx";

interface ICollapsibleContainerProps {
  id: string;
  title: string;
}

const CollapsibleContainer = (props: ICollapsibleContainerProps) => {
  const [isFoldedOut, setFoldState] = useState(false);
  const getCollapsibleCssClass = () => {
    return isFoldedOut ? "openCollapsible" : "closedCollapsible";
  };

  const getTitleCssClass = () => {
    return isFoldedOut ? "titleUpperLeft" : "titleContainer";
  };
  return (
    <div
      id={props.id}
      class={`collapsible ${getCollapsibleCssClass()}`}
      onClick={() => setFoldState(!isFoldedOut)}
    >
      <div class={getTitleCssClass()}>
        {!isFoldedOut &&
          (
            <h1 class="collapsibleTitle">
              {props.title}
            </h1>
          )}
      </div>
    </div>
  );
};

export default CollapsibleContainer;
