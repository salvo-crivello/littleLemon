import Button from "./Button";
import IconDelivery from "../icon/IconDelivery";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="dish" />
      <div>
        <div>
          <h4 className="txt-lead-b">{props.title}</h4>
          <span className="txt-paragraph-b">{props.price}</span>
        </div>
        <div>
          <p className="txt-paragraph">{props.description}</p>
        </div>
        <div>
          <Button
            btn="tertiary"
            text="Order a delivery"
            className="txt-paragraph"
          />
          <IconDelivery />
        </div>
      </div>
    </div>
  );
}
