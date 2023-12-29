import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const AddProject = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [locationLink, setLocationLink] = useState("");
  const [category, setCategory] = useState("");
  const [projectDetails, setProjectDetails] = useState({
    project_type: category,
    unit_size: "",
    present_status: "",
    number_of_floor: "",
    basement: "",
    road_size: "",
    land_size: "",
  });
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const axiosSecure = useAxiosSecure();

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    // Create image previews
    const previews = [];
    selectedImages.forEach((image) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push(event.target.result);
        setImagePreviews([...previews]);
      };
      reader.readAsDataURL(image);
    });
  };

  const onSubmit = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const uploadedImageLinks = [];

      for (let i = 0; i < images.length; i++) {
        const imageFormData = new FormData();
        const uniqueName = generateUniqueImageName(images[i].name); // Generate a unique name
        imageFormData.append("photo_path", images[i], uniqueName);

        // Post each image to the API to generate a link
        const imageResponse = await axios.post(
          "https://apis.rpi.gov.bd/api/frontend/newstudentimg",
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (imageResponse.status === 200) {
          const generatedImageLink = uniqueName; // Use the generated unique name
          uploadedImageLinks.push(generatedImageLink);
        } else {
          console.error(`Failed to upload image ${i + 1}`);
        }
      }

      console.log(uploadedImageLinks);

      // Now 'uploadedImageLinks' contains generated image links for all uploaded images
      // Proceed to post other project details along with the image links
      const data = {
        title,
        location,
        location_link: locationLink,
        category,
        images: uploadedImageLinks, // Use the array of generated image links here
        projectDetails,
      };
      console.log(data);

      const res = await axiosSecure.post("/projects", data);
      console.log(res);
      toast.success("Project created successfully", { id: toastId });
      refetch();
      // Make a request to the desired endpoint with 'data'

      // Rest of your logic for posting data to the API
      // ...
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project", { id: toastId });
    }
  };

  // Function to generate a unique image name
  const generateUniqueImageName = (imageName) => {
    const uniqueId = Math.random().toString(36).substring(7); // Generate a random alphanumeric string
    const extension = imageName.split(".").pop(); // Get the file extension
    return `${uniqueId}.${extension}`; // Append the unique string to the file name
  };

  return (
    <div className="bg-white p-5">
      <div className="pb-4">
        <h1 className="text-xl font-semibold border-b ">Add Project</h1>
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

      {/* location link */}
      <div className="mb-3">
        <label
          htmlFor="project_link"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Location Link
        </label>
        <input
          type="text"
          id="project_link"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Slide project link here"
          required
          value={locationLink}
          onChange={(e) => setLocationLink(e.target.value)}
        />
      </div>

      {/* Category  */}
      <div className="mb-3">
        <label
          htmlFor="category"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          name=""
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Residential">Residential</option>
          <option value="Land">Land</option>
        </select>
      </div>

      <div className="">
        {/* Unit Size */}
        <div className="mb-3">
          <label
            htmlFor="unit_size"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Unit Size
          </label>
          <input
            type="text"
            id="unit_size"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.unit_size}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                unit_size: e.target.value, // Update the unit_size property
              })
            }
          />
        </div>

        {/* Present Status */}
        <div className="mb-3">
          <label
            htmlFor="present_status"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Present Status
          </label>
          <input
            type="text"
            id="present_status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.present_status}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                present_status: e.target.value,
              })
            }
          />
        </div>

        {/* Number of floor */}
        <div className="mb-3">
          <label
            htmlFor="number_of_floor"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of floor
          </label>
          <input
            type="text"
            id="number_of_floor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.number_of_floor}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                number_of_floor: e.target.value,
              })
            }
          />
        </div>

        {/* Basement */}
        <div className="mb-3">
          <label
            htmlFor="basement"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Basement
          </label>
          <input
            type="text"
            id="basement"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.basement}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                basement: e.target.value,
              })
            }
          />
        </div>

        {/* Road size */}
        <div className="mb-3">
          <label
            htmlFor="road_size"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Road size
          </label>
          <input
            type="text"
            id="road_size"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.road_size}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                road_size: e.target.value,
              })
            }
          />
        </div>

        {/* Land Size */}
        <div className="mb-3">
          <label
            htmlFor="land_size"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Land Size
          </label>
          <input
            type="text"
            id="land_size"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Slide project link here"
            required
            value={projectDetails.land_size}
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                land_size: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* Multiple Image Input */}
      <div className="flex items-center justify-center w-full mt-3">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {imagePreviews.length > 0 ? (
            // Render image previews for selected images
            <div className="flex flex-wrap">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="w-44 h-44 mr-3 mb-3">
                  <img
                    src={preview}
                    alt={`preview-${index}`}
                    className="max-w-full max-h-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Render instructions when no image is selected
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
                  multiple // Enable multiple file selection
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple // Enable multiple file selection
            onChange={handleImageChange}
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

export default AddProject;
