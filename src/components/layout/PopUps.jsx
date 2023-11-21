import { Outlet } from "react-router-dom";
import { selectCreatePostPopUp } from "../../slices/global/globalSlice";
import { useSelector } from "react-redux";
import CreatePost from "../pages/CreatePost";

const PopUps = () => {
  const createPostPopUp = useSelector(selectCreatePostPopUp);

  return (
    <>
      <Outlet />
      {createPostPopUp ? <CreatePost /> : null}
    </>
  );
};
export default PopUps;
