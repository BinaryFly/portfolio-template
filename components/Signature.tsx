interface ISignatureProps {
  name: string;
}

const Signature = (props: ISignatureProps) => {
  return <p id="signature">{props.name}</p>;
};

export default Signature;

