const FooterProfile = () => {
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
    "Instagram Lite",
  ];
  return (
    <>
      <div className="footer-a text-muted mb-5 mt-3 text-center">
        <div className="">
          {tags.map((tag, index) => (
            <a key={index} href="#">
              {tag}
            </a>
          ))}
        </div>
        <div>
          <span className="metaSpan">© 2022 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};

export default FooterProfile;
