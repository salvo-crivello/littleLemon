export default function Footer() {
  return (
    <footer className="section bg-grey">
      <div className="section-body-row">
        <img src="/photo/logo-02-dark.png" alt="logo" />
        <div>
          <h4>Site Map</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/onlinemenu">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contacts</h4>
          <ul>
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
