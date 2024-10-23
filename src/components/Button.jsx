import IconDelivery from "../icon/IconDelivery";

export default function Button(props) {
  const { disabled, btn, text } = props;

  switch (btn) {
    case "primary":
      return (
        <button className="button-primary txt-lead-b" disabled={disabled}>
          {text}
        </button>
      );
    case "secondary":
      return (
        <button className="button-secondary txt-lead-b" disabled={disabled}>
          {text}
        </button>
      );
    case "tertiary":
      return (
        <button className="button-tertiary txt-paragraph-b" disabled={disabled}>
          {text}
          <IconDelivery />
        </button>
      );
    default:
      return (
        <button className="button-primary txt-lead-b" disabled={disabled}>
          {text}
        </button>
      );
  }
}
