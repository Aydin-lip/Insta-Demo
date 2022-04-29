const Footer = () => {
  return (
    <>
      <div className="footer-right">
        <ul>
          {[
            ". About",
            ". Help",
            ". Press",
            ". API",
            ". Jobs",
            ". Privacy",
            ". Terms",
            ". Lpcations",
            ". Top Accounts",
            ". Hashtags",
            ". Language",
          ].map((i, index) => (
            <li key={index}>
              <a href="#">{i}</a>
            </li>
          ))}
        </ul>
        <div className="">
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
