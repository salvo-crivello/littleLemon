import IconDelivery from "../icon/IconDelivery";

export default function Button(props) {
  const { disabled } = props;

  switch (props.btn) {
    case "primary":
      return (
        <button className="button-primary txt-lead-b" disabled={disabled}>
          {props.text}
        </button>
      );
    case "secondary":
      return (
        <button className="button-secondary txt-lead-b">{props.text}</button>
      );
    case "tertiary":
      return (
        <button className="button-tertiary txt-paragraph-b">
          {props.text}
          <IconDelivery />
        </button>
      );
    default:
      return (
        <button className="button-primary txt-lead-b" disabled={disabled}>
          {props.text}
        </button>
      );
  }
}
