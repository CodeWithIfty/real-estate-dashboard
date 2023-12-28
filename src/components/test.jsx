import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { BiSolidDownload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import PopUpTable from "./PopUpTable";

const TABLE_HEAD = [
  "Student",
  "Roll Number",
  "Father's Name",
  "Mother's Name",
  "Father's Mobile Number",
  "Mother's Mobile Number",
  "",
  "",
  "",
];

export function StudentTable() {
  const [allStudent, setAllStudent] = useState([]);
  const [filteredStudent, setFilteredStudent] = useState([]);
  const [editStudentRoll, setEditStudentRoll] = useState("");
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(null);

  const getEditStudentRoll = (roll) => {
    setLoading(true);
    setEditStudentRoll(roll);
    fetch(`https://apis.rpi.gov.bd/api/backend/student?roll_number=${roll}`)
      .then((res) => res.json())
      .then((data) => setStudent(data[0]));
    setLoading(false);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;

    if (searchText === "") {
      setFilteredStudent([]);
    } else {
      // Filter the list of students based on the search text
      const filteredStudents = allStudent.filter((student) =>
        student.present_education_roll.includes(searchText)
      );
      setFilteredStudent(filteredStudents);
    }
  };

  useEffect(() => {
    fetch(`https://apis.rpi.gov.bd/api/backend/allstudent`)
      .then((res) => res.json())
      .then((data) => setAllStudent(data));
  }, []);

  const handledelete = (id) => {
    Swal.fire({
      title: "Do you really want to delete this user?",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://apis.rpi.gov.bd/api/backend/studentdistory?id=${id}`)
          .then((res) => res.json())
          .then((data) => {
            const afterDeletedUser = allStudent.filter(
              (student) => student.id !== id
            );
            setAllStudent(afterDeletedUser); // Move this line inside the .then block
            console.log(data);
            Swal.fire("Deleted!", "", "success");
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire("Error deleting user", "", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="h-[100vh]">
      <Card className="h-full w-full ">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none   absolute w-full m-0 py-2 px-3"
        >
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Scholarship Students Infromation {allStudent.length}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the Scholarship Information
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  type="number"
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  onChange={handleSearch}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 p-0 mt-24 z-10">
          <table className="w-full min-w-max  table-auto text-left z-10">
            <thead className="sticky">
              <tr>
                {TABLE_HEAD.map((head, idx) => (
                  <th
                    key={idx}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {(filteredStudent.length > 0 ? filteredStudent : allStudent)
                .slice(0, 50)
                .map(
                  (
                    {
                      id,
                      student_img,
                      student_name_english,
                      fathers_name_english,
                      mothers_name_english,
                      mothers_mobile_number,
                      fathers_mobile_number,
                      present_education_roll,
                    },
                    index
                  ) => {
                    const isLast = index === allStudent.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "px-4 py-2  border-b border-blue-gray-50/50";

                    return (
                      <tr key={id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={student_img}
                              alt={student_name_english}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {student_name_english}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {present_education_roll}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fathers_name_english}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {mothers_name_english}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fathers_mobile_number}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {mothers_mobile_number}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton
                              variant="text"
                              onClick={() => {
                                document
                                  .getElementById("pop_up_table")
                                  .showModal();
                                getEditStudentRoll(present_education_roll);
                              }}
                            >
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>

                        <td className={classes}>
                          <Link
                            to={`/download-pdf/${present_education_roll}`}
                            target="_blank"
                          >
                            <Tooltip content="Download PDF">
                              <IconButton variant="text">
                                <BiSolidDownload className="h-4 w-4 scale-150" />
                              </IconButton>
                            </Tooltip>
                          </Link>
                        </td>

                        <td
                          className={classes}
                          onClick={() => handledelete(id)}
                        >
                          <Tooltip content="Delete User">
                            <IconButton variant="text">
                              <RxCross2 className="h-4 w-4  text-red-600 scale-150 font-extrabold" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
      {!loading && (
        <dialog
          id="pop_up_table"
          className="modal modal-bottom sm:modal-middle "
        >
          <div
            className="modal-box h-[80vh] mx-auto"
            style={{ maxWidth: "1140px" }}
          >
            <div className="modal-action w-full mx-auto">
              <PopUpTable student={student} />
              <button
                className="modal-backdrop absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  const modal = document.getElementById("pop_up_table");
                  modal.close();
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* {!isPopupVisible && <PopUpTable onClose={closePopup} />} */}
    </div>
  );
}
