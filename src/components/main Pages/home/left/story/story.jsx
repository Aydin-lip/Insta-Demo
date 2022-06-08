const Story = (props) => {
  return (
    <>
      <div className="cursor" style={{ fontSize: ".75rem" }}>
        <div className="border-profile-story">
          <div className="border-white-story">
            <img
              className="rounded-circle"
              src={props.data.Profile}
              width="56px"
              alt="profile"
            />
          </div>
        </div>
        <div className="text-center mt-1" style={{ width: "64px" }}>
          <span className="d-block overflow-hidden">{props.data.Username}</span>
        </div>
      </div>
    </>
  );
};

export default Story;
