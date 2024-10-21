export default function Footer() {
  return (
    <footer className="section bg-grey">
      <div className="section-body-row">
        <img src="/photo/logo-02-dark.png" alt="logo" />
        <div className="links">
          <div className="sitemap">
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
          <div className="contacts">
            <h4>Contacts</h4>
            <ul>
              <li>Chicago, 4th avenue str.</li>
              <li>+555 41 32 167</li>
              <li>littlelemon@pec.com</li>
            </ul>
          </div>
          <div className="socials">
            <h4>Socials</h4>
            <ul>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a aria-label="littlelemon facebook" href="#">
                  Facebook
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a a aria-label="littlelemon instagram" href="#">
                  Instagram
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a aria-label="littlelemon tiktok" href="#">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
