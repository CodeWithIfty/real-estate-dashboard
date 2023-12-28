import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const SlideList = () => {
  return (
    <div className="col-span-3 ">
      <div className="navbar flex-col xl:flex-row bg-white dark:bg-black">
        <div className="flex-1">
          <a className="btn  btn-ghost normal-case md:text-xl text-sm">
            Slide List
            <span className="font-bold border-l-2 px-3"></span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              //   value={searchRolll}
              className="input bg-gray-100 dark:bg-black input-bordered w-24 md:w-auto"
              //   onChange={(e) => setSearchRoll(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#SL</th>
              <th>Slide Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-gray-50 dark:bg-black">
            {/* row 1 */}

            <tr className="">
              <th className=" border border-gray-300">1</th>
              <td className=" border border-gray-300">
                <div className="w-24 ">
                  <img
                    alt="Avatar Tailwind CSS Component"
                    src="https://api.rpi.gov.bd/frontend/images/slider/6573d5e73970f.png"
                  />
                </div>
              </td>

              <td className=" border border-gray-300">
                <div className="flex items-center justify-around border-none">
                  <button>
                    <RxCross2 className="h-5 w-5  text-red-600 scale-150 font-extrabold" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      {/* <div className="overflow-x-auto w-11/12 mx-auto  border  py-2  ">
            {renderPageNumbers()}
          </div> */}

      {/* {!loading && (
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
          )} */}
    </div>
  );
};

export default SlideList;
