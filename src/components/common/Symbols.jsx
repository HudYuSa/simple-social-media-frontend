import { Button } from "react-aria-components";
import { ImCross } from "react-icons/im";

export const CrossSymbol = ({ dispatch, action }) => {
  return (
    <div className="absolute right-4 top-4">
      <Button
        className={"outline-none"}
        onPress={(e) => {
          dispatch(action);
        }}
      >
        <ImCross className="h-5 w-5" />
      </Button>
    </div>
  );
};
