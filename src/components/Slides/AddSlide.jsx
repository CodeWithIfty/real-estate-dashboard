import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const AddSlide = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState("");

  const axiosSecure = useAxiosSecure();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setUploadImage(selectedImage);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result); // Set the image URL for preview
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const onSubmit = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const imageFormData = new FormData();
      imageFormData.append("photo_path", uploadImage); // Append the image blob or file here

      // Post the image to the first API to generate a link
      const imageResponse = await axios.post(
        "https://apis.rpi.gov.bd/api/frontend/newstudentimg",
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!imageResponse.status === "success") {
        console.error("Failed to upload image or invalid response");
        return;
      }

      const generatedImageLink = uploadImage.name;
      console.log(generatedImageLink);

      // Now that you have the generated image link, proceed to post data to the second API
      const data = {
        title,
        location,
        project_link: projectLink,
        description,
        image: generatedImageLink, // Use the generated image link here
      };

      const secondApiResponse = await axiosSecure.post("/slides", data);

      if (secondApiResponse.data) {
        console.log("Slider added:", secondApiResponse.data);
        toast.success("Slider added...", { id: toastId });
        refetch();
        setTitle("");
        setDescription("");
        setLocation("");
        setProjectLink("");
        setImage("");
      } else {
        console.error("Failed to add slider or invalid response");
        toast.error("Failed to add slider or invalid response", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Error adding slider:", error);
    }
  };

  return (
    <div className="bg-white p-5">
      <div className="pb-4">
        <h1 className="text-xl font-semibold border-b ">Add Slide</h1>
      </div>

      {/* Title */}
      <div className="mb-3">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Slide title here"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* location */}
      <div className="mb-3">
        <label
          htmlFor="location"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Slide location here"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {/* project link */}
      <div className="mb-3">
        <label
          htmlFor="project_link"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Project Link
        </label>
        <input
          type="text"
          id="project_link"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Slide project link here"
          required
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="mb-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center w-full mt-3">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {image ? ( // Render the image preview if an image is selected
            <img src={image} alt={image} className="max-w-full max-h-full " />
          ) : (
            <div className="flex items-center justify-center w-full mt-3">
              <label htmlFor="dropzone-file" className="">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleImageChange} // Trigger image preview on file change
          />
        </label>
      </div>

      <div className="mt-4">
        <button className="btn btn-success" onClick={onSubmit}>
          Add Slide
        </button>
      </div>
    </div>
  );
};

export default AddSlide;
