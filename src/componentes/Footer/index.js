import "./style.css";

const Footer = () => {


  return (
    <section className="footer">
      <div className="social">
        <img src="/images/fb.png" alt="Facebook" />
        <img src="/images/tw.png" alt="Twitter" />
        <img src="/images/ig.png" alt="Instagram" />
      </div>
      <div className="logo"><img src="/images/logo.png" alt="Instagram" /></div>
      <div className="dev-alura"><span>Desenvolvido por Alura.</span></div>
    </section>
  );
};

export default Footer;
