import React from "react";

const Footer: React.FC = (props) => {
  return (
    <footer className="l-footer u-yP">
      <section className="c-footerSection">
        <div>
          <h4>Get in touch</h4>
        </div>
        <div>
          <h4>Connections</h4>
        </div>
        <div>
          <h4>Earnings</h4>
        </div>
        <div>
          <h4>Account</h4>
        </div>
      </section>
      <section className="c-copyRights">
        <span>
          Designed by&nbsp;
          <a href="https://www.petrbilek.com/" target="_blank">
            Petr Bilek
          </a>
        </span>
        <span>
          Coded by&nbsp;
          <a href="https://github.com/szy-k0w" target="_blank">
            Szymon Kowalski
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
