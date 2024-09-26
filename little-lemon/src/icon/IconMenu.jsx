export default function IconMenu(props) {
  const menuOpen = props.open;

  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`bar top ${menuOpen ? "open" : ""}`}
        d="M0.923077 0.695679C0.41328 0.695679 0 1.12208 0 1.64806C0 2.17404 0.41328 2.60044 0.923077 2.60044H23.0769C23.5866 2.60044 24 2.17404 24 1.64806C24 1.12208 23.5866 0.695679 23.0769 0.695679H0.923077Z"
        fill="black"
      />
      <path
        className={`bar middle ${menuOpen ? "open" : ""}`}
        d="M0 9.26711C0 8.74113 0.41328 8.31473 0.923077 8.31473H23.0769C23.5866 8.31473 24 8.74113 24 9.26711C24 9.79309 23.5866 10.2195 23.0769 10.2195H0.923077C0.41328 10.2195 0 9.79309 0 9.26711Z"
        fill="black"
      />
      <path
        className={`bar bottom ${menuOpen ? "open" : ""}`}
        d="M0 16.8862C0 16.3602 0.41328 15.9338 0.923077 15.9338H23.0769C23.5866 15.9338 24 16.3602 24 16.8862C24 17.4121 23.5866 17.8385 23.0769 17.8385H0.923077C0.41328 17.8385 0 17.4121 0 16.8862Z"
        fill="black"
      />
    </svg>
  );
}
