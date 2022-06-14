const Footer = () => {
  const tags = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Locations",
    "Instagram Lite  ",
    "  Dance",
    "Food & Drink",
    "Home & Garden",
    "Music",
    "Visual Arts",
  ];
  return (
    <>
      <div className="footer-a text-muted my-5 pb-3 text-center">
        <div className="">
          {tags.map((tag, index) => (
            <span key={index} className="cursor">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <span className="metaSpan">© 2022 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
