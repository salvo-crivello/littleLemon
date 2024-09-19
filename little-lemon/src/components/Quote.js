import IconQuote from "../icon/IconQuote";

export default function Quote(props) {
  return (
    <div className="quote">
      <div>
        <div>
          <img src={props.img} alt="quote" />
          <span className="icon-quote">
            <IconQuote />
          </span>
        </div>
        <div>
          <p className="txt-paragraph-b">{props.testimonial}</p>
          <div>{props.vote}</div>
        </div>
      </div>
      <div>
        <p className="txt-paragraph">{props.quote}</p>
      </div>
    </div>
  );
}
