import NoPost from "./noPost";
import PostProfile from "./post";

const ProfilePosts = (props) => {
  return (
    <>
      <div className="w-100 container p-0 px-sm-2">
        {props.data.Posts.length > 0 ? (
          <div className="row">
            {appendChild(props.data.Posts[0])}
            {appendChild(props.data.Posts[1])}
          </div>
        ) : (
          <NoPost />
        )}
      </div>
    </>
  );

  function appendChild(item) {
    return (
      <>
        <div className="col-4 p-0 pe-1 px-sm-2 h-100">
          <PostProfile
            data={{
              Post: item.Post,
              Likes: item.Likes,
              Comments: item.Comments,
            }}
          />
        </div>
      </>
    );
  }
};

export default ProfilePosts;
