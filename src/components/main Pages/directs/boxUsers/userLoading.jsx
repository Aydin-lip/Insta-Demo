import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserLoading = () => {
  return (
    <div className="d-flex ps-3 py-2">
      <Skeleton circle={true} width={56} height={56} />
      <div className="m-2">
        <Skeleton height={15} width={110} />
        <Skeleton height={15} width={90} />
      </div>
    </div>
  );
};

export default UserLoading;
