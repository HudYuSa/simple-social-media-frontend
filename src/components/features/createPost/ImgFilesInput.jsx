import { Button, FileTrigger } from "react-aria-components";
import { FaPhotoVideo } from "react-icons/fa";

const ImgFilesInput = ({ handleFileChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaPhotoVideo className="h-32 w-32 " />
      <p className="text-2xl">Drag photos and videos here</p>
      <FileTrigger
        allowsMultiple
        onChange={handleFileChange}
        acceptedFileTypes={["image/png", "image/jpg", "image/jpeg"]}
      >
        <Button
          className={
            "mt-2 rounded-lg bg-blue-600 px-5 py-2 text-sm outline-none"
          }
        >
          Select from computer
        </Button>
      </FileTrigger>
    </div>
  );
};
export default ImgFilesInput;
