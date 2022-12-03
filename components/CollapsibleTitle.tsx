export interface ICollapsibleTitleProps {
  title: string;
}

const CollapsibleTitle = (props: ICollapsibleTitleProps) => {
  return (
    <div class="titleContainer">
      <h2>{props.title}</h2>
    </div>
  );
};

export default CollapsibleTitle;
