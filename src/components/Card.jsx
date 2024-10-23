import Button from "./Button";

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
        <Button
          aria-label="order now"
          btn="tertiary"
          text="Order now"
          className="txt-paragraph"
        />
      </div>
    </div>
  );
}
