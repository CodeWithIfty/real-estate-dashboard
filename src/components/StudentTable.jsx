import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { BiSolidDownload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import PopUpTable from "./PopUpTable";
import "../index.css";

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
  const [searchStudent, setSearchStudent] = useState([]);
  const [loading, setLoading] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalStudent, setTotalStudent] = useState(1);
  const [searchRolll, setSearchRoll] = useState("");

  const getEditStudentRoll = (roll) => {
    setLoading(true);
    setEditStudentRoll(roll);
    fetch(`https://apis.rpi.gov.bd/api/backend/student?roll_number=${roll}`)
      .then((res) => res.json())
      .then((data) => setStudent(data[0]));
    setLoading(false);
  };

  useEffect(() => {
    fetch(
      `https://apis.rpi.gov.bd/api/frontend/studentpdf?roll_number=${searchRolll}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchStudent(data);
      });
  }, [searchRolll]);
  console.log(searchStudent);

  useEffect(() => {
    setLoading(true);
    fetch(`https://apis.rpi.gov.bd/api/backend/allstudent?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllStudent(data.data);
        setTotalStudent(data.total_count);
        setPageCount(Math.ceil(data.total_count / 50));
        setLoading(false);
      });
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
    console.log(currentPage);
    return (
      <div className="flex mx-5">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={
              currentPage === pageNumber
                ? "active btn bg-[#12CD6A] text-white"
                : "btn btn-ghost "
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  console.log(pageCount);
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
    <div className=" p-3">
      <div className="navbar flex-col xl:flex-row bg-white dark:bg-black">
        <div className="flex-1">
          <a className="btn  btn-ghost normal-case md:text-xl text-sm">
            Scholarship Student Details
            <span className="font-bold border-l-2 px-3">
              Total Entry : {totalStudent}
            </span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              value={searchRolll}
              className="input bg-gray-100 dark:bg-black input-bordered w-24 md:w-auto"
              onChange={(e) => setSearchRoll(e.target.value)}
            />
          </div>
          <Link
            to={"https://apis.rpi.gov.bd/backend/csv.php"}
            className="btn btn-success"
          >
            Download
          </Link>
        </div>
      </div>
      <div className="overflow-scroll h-[75vh] ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#SL</th>
              <th>Student's Details</th>
              <th>Father's Details</th>
              <th>Mother's Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 dark:bg-black">
            {/* row 1 */}
            {(searchStudent.length > 0 && searchRolll != ""
              ? searchStudent
              : allStudent
            ).map(
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
              ) => (
                <tr key={index} className="">
                  <th className=" border border-gray-300">{index + 1}</th>

                  <td className=" border border-gray-300">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={student_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{student_name_english}</div>
                        <div className="text-sm opacity-50">
                          {present_education_roll}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" border border-gray-300">
                    {fathers_name_english}
                    <br />
                    <span className="">{fathers_mobile_number}</span>
                  </td>
                  <td className=" border border-gray-300">
                    {mothers_name_english}
                    <br />
                    <span className="">{mothers_mobile_number}</span>
                  </td>

                  <td className=" border border-gray-300">
                    <div className="flex items-center justify-around border-none">
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => {
                          document.getElementById("pop_up_table").showModal();
                          getEditStudentRoll(present_education_roll);
                        }}
                      >
                        <BsPencilSquare className="scale-150 font-extrabold" />
                      </button>
                      <Link
                        to={`/download-pdf/${present_education_roll}`}
                        target="_blank"
                      >
                        <BiSolidDownload className="h-4 w-4 scale-150" />
                      </Link>
                      <button onClick={() => handledelete(id)}>
                        <RxCross2 className="h-4 w-4  text-red-600 scale-150 font-extrabold" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="overflow-x-auto w-11/12 mx-auto  border  py-2  ">
        {renderPageNumbers()}
      </div>

      {!loading && (
        <dialog
          id="pop_up_table"
          className="modal modal-bottom sm:modal-middle "
        >
          <div
            className="modal-box h-[80vh] mx-auto bg-white"
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
    </div>
  );
}
