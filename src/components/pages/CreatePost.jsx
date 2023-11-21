import { useDispatch } from "react-redux";
import { removeCreatePostPopUp } from "../../slices/global/globalSlice";
import useScreenSize from "../../hooks/useScreenSize";
import { CrossSymbol } from "../common/Symbols";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-aria-components";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import ImgFilesInput from "../features/createPost/imgFilesInput";
import ImagePreview from "../features/createPost/ImagePreview";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions/resize";

const CreatePost = () => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();
  const popUpHeight = (screenSize.width * 50) / 100;

  const [createStep, setCreateStep] = useState(0);
  const [imageSource, setImageSource] = useState(null);

  console.log(createStep);

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
    },
  });

  const formik = useFormik({
    initialValues: {
      files: [],
    },

    onSubmit: (signinCredentials) => {},
  });

  const handleFileChange = async (e) => {
    let files = Array.from(e);
    let urls = files.map((file) => file.name);
    console.log(files);
    console.log(urls);
    setCreateStep((prev) => prev + 1);
    formik.setFieldValue("files", files);

    const file = files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSource(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }; 

  useEffect(() => {
    console.log(formik.values.files);
  }, [formik]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={(e) => {
        dispatch(removeCreatePostPopUp());
      }}
      className="absolute left-0 top-0 z-10 flex h-screen w-screen animate-fade-in items-center justify-center overflow-hidden bg-black bg-opacity-30 text-white"
    >
      <CrossSymbol action={removeCreatePostPopUp()} dispatch={dispatch} />
      <div
        onClick={stopPropagation}
        className={`flex w-[60%] min-w-[400px] flex-col overflow-hidden rounded-2xl`}
      >
        <div className="bg-darkerGray">
          <div
            className={`flex w-full items-center px-4 ${
              createStep < 1 ? "justify-center" : "justify-between"
            }`}
          >
            {createStep > 0 ? (
              <Button
                onPress={() => {
                  setCreateStep((step) => step - 1);
                }}
                className={"outline-none"}
              >
                <BiArrowBack className="h-8 w-8" />
              </Button>
            ) : null}
            <div>
              <p className="py-2 text-center text-lg font-bold text-white">
                Create new post
              </p>
            </div>
            {createStep > 0 ? (
              <Button
                onPress={() => {
                  setCreateStep((step) => step + 1);
                }}
                className={"outline-none"}
              >
                <p className="text-lg text-blue-500 hover:text-white">Next</p>
              </Button>
            ) : null}
          </div>
          <hr className="border-darkGray" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          style={{ height: popUpHeight }}
          className="flex min-h-[400px] w-full flex-grow items-center justify-center bg-darkerGray"
        >
          {createStep == 0 ? (
            <ImgFilesInput handleFileChange={handleFileChange} />
          ) : null}
          {createStep == 1 ? <ImagePreview imageSource={imageSource} /> : null}
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
