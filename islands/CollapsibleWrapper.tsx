import CollapsibleContainer from "./CollapsibleContainer.tsx";

const CollapsibleWrapper = () => {
  return (
    <div class="collapsible-wrapper">
      <CollapsibleContainer id="collapsible-one" title="About" />
      <CollapsibleContainer id="collapsible-two" title="Contact" />
      <CollapsibleContainer id="collapsible-three" title="Projects" />
    </div>
  );
};

export default CollapsibleWrapper;
