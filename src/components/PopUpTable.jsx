import InputField from "./InputField";
import "../index.css";

const PopUpTable = ({ student }) => {
  const {
    student_name_bangla,
    fathers_name_bangla,
    mothers_name_bangla,
    student_name_english,
    fathers_name_english,
    mothers_name_english,
    student_birth_certificate_number,
    fathers_nid,
    mothers_nid,
    date_of_birth,
    fathers_date_of_birth,
    mothers_date_of_birth,
    gender,
    marital_status,
    fathers_mobile_number,
    mothers_mobile_number,
    permanent_division,
    permanent_district,
    permanent_upazila,
    permanent_union,
    permanent_post_code,
    permanent_village,
    present_division,
    present_district,
    present_upazila,
    present_union,
    present_post_code,
    present_village,
    past_education_division,
    past_education_district,
    past_education_upazila,
    past_education_year,
    past_education_exam_name,
    past_education_roll_number,
    past_education_registration_number,
    past_education_school_name,
    past_education_result,
    past_education_board,
    past_education_group,
    present_education_division,
    present_education_district,
    present_education_semester,
    present_education_admission_year,
    present_education_upazila,
    present_education_season,
    present_education_institute_name,
    present_education_department,
    present_education_shift,
    present_education_roll,
    present_education_registration_number,
    guardian_relation,
    guardian_name_bangla,
    guardian_name_english,
    guardian_nid,
    guardian_date_of_birth,
    guardian_mobile_number,
    mobile_banking,
    account_holder_name_english,
    account_holder_nid,
    account_number,
    who_bear_education_coast,
    is_student_ethnic,
    is_student_family_freedom_fighter,
    is_student_has_another_scholarship,
    is_student_physically_disabled,
    student_img,
  } = student;
  console.log(student_name_english);
  const textInputStyle =
    "label-custom-font-size mt-1 text-xl font-medium  overflow-hidden bg-white border rounded-none border-gray-400";
  const inputContainerStyle = "mb-4 xl:w-80 lg:w-72 w-80 input-container";

  return (
    <div className=" w-full h-full mx-auto baloda">
      {/* <!-- Modal content --> */}
      <div className=" bg-white rounded-lg  dark:bg-gray-700 ">
        <form action="" className="">
          <div className="flex justify-center flex-col items-center">
            <div className="w-24 border-2 border-black  mb-2">
              <img src={student_img} alt="" />
            </div>
            <h1 className="font-semibold">{student_name_bangla}</h1>
          </div>
          {/* Personal Information */}
          <div className="w-full mx-auto">
            <h2 className="text-3xl border-b-2 border-gray-400 pb-3 font-extrabold mb-6  input-container">
              ব্যাক্তিগত তথ্য
            </h2>
            <div className=" grid grid-cols-3 gap-3">
              <InputField
                label=" শিক্ষার্থীর নাম (বাংলা)"
                type="text"
                value={student_name_bangla}
              />
              <InputField
                label=" পিতার নাম (বাংলা)"
                type="text"
                value={fathers_name_bangla}
              />
              <InputField
                label="মাতার নাম (বাংলা)"
                type="text"
                value={mothers_name_bangla}
              />
              <InputField
                label="শিক্ষার্থীর নাম (ইংরেজি)"
                type="text"
                value={student_name_english}
              />
              <InputField
                label="পিতার নাম (ইংরেজি)"
                type="text"
                value={fathers_name_english}
              />
              <InputField
                label="মাতার নাম (ইংরেজি)"
                type="text"
                value={mothers_name_english}
              />
              <InputField
                label="জন্ম সনদের নম্বর"
                type="number"
                value={student_birth_certificate_number}
              />
              <InputField
                label="পিতার এনআইডি"
                type="text"
                value={fathers_nid}
              />
              <InputField
                label="মাতার এনআইডি"
                type="text"
                value={mothers_nid}
              />
              <InputField
                label="শিক্ষার্থীর জন্ম তারিখ (yyyy-mm-dd)"
                type="number"
                value={date_of_birth}
              />
              <InputField
                label="  পিতার জন্ম তারিখ (yyyy-mm-dd)"
                type="text"
                value={fathers_date_of_birth}
              />
              <InputField
                label="মাতার জন্ম তারিখ (yyyy-mm-dd)"
                type="text"
                value={mothers_date_of_birth}
              />

              <div
                className={`${inputContainerStyle} flex flex-col xl:flex-row gap-2`}
              >
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>জেন্ডার নির্বাচন করুন - </option>
                  <option value="Male">Male </option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>

                <select
                  name="marital_status"
                  id="marital_status"
                  value={marital_status}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>বৈবাহিক অবস্থা - </option>
                  <option value="বিবাহিত">বিবাহিত </option>
                  <option value="অবিবাহিত">অবিবাহিত</option>
                </select>
              </div>

              <InputField
                label="পিতার মোবাইল নম্বর"
                type="number"
                value={fathers_mobile_number}
              />
              <InputField
                label="মাতার মোবাইল নম্বর"
                type="number"
                value={mothers_mobile_number}
              />
            </div>
          </div>

          {/* Address Information */}

          <div className=" flex ">
            <div className="mt-4 w-1/2">
              <h2 className="text-3xl border-b-2 pb-3 font-extrabold mb-4">
                স্থায়ী ঠিকানা
              </h2>

              <div className="">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বিভাগ"
                  type="text"
                  value={permanent_division}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="জেলা"
                  type="text"
                  value={permanent_district}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উপজেলা"
                  type="text"
                  value={permanent_upazila}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পৌরসভা/ইউনিয়ন/সিটি কর্পোরেশন"
                  type="text"
                  value={permanent_union}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পোষ্ট কোড"
                  type="number"
                  value={permanent_post_code}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="ঠিকানা/গ্রাম"
                  type="text"
                  value={permanent_district}
                />
              </div>
            </div>

            <div className="mt-4 w-1/2">
              <h2 className="text-3xl border-b-2 pb-3 font-extrabold mb-4">
                বর্তমান ঠিকানা
              </h2>

              <div className="">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বিভাগ"
                  type="text"
                  value={present_division}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="জেলা"
                  type="text"
                  value={present_district}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উপজেলা"
                  type="text"
                  value={present_upazila}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পৌরসভা/ইউনিয়ন/সিটি কর্পোরেশন"
                  type="text"
                  value={present_union}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পোষ্ট কোড"
                  type="number"
                  value={present_post_code}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="ঠিকানা/গ্রাম"
                  type="text"
                  value={present_district}
                />
              </div>
            </div>
          </div>

          {/* Education Information */}
          <div className=" flex">
            <div className=" mt-4 w-1/2">
              <h2 className="text-3xl border-b-2 pb-3 font-extrabold mb-4">
                পূর্ববর্তী শিক্ষা তথ্য
              </h2>
              <div className="">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বিভাগ"
                  type="text"
                  value={past_education_division}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উত্তীর্ণ হওয়ার বছর"
                  type="text"
                  value={past_education_year}
                />

                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="জেলা"
                  type="text"
                  value={past_education_district}
                />

                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পূর্ববর্তী পরিক্ষার নাম"
                  type="text"
                  value={past_education_exam_name}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উপজেলা"
                  type="text"
                  value={past_education_upazila}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="গ্রুপ"
                  type="text"
                  value={past_education_group}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="প্রতিষ্ঠানের নাম"
                  type="text"
                  value={past_education_school_name}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="রোল নম্বর"
                  type="text"
                  value={past_education_roll_number}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বোর্ড"
                  type="text"
                  value={past_education_board}
                />
              </div>
            </div>
            <div className="mt-4 w-1/2">
              <h2 className="text-3xl border-b-2 pb-3 font-extrabold mb-4">
                বর্তমান শিক্ষা তথ্য
              </h2>
              <div className="">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বিভাগ"
                  type="text"
                  value={past_education_division}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উত্তীর্ণ হওয়ার বছর"
                  type="text"
                  value={past_education_year}
                />

                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="জেলা"
                  type="text"
                  value={past_education_district}
                />

                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="পূর্ববর্তী পরিক্ষার নাম"
                  type="text"
                  value={past_education_exam_name}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="উপজেলা"
                  type="text"
                  value={past_education_upazila}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="গ্রুপ"
                  type="text"
                  value={past_education_group}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="প্রতিষ্ঠানের নাম"
                  type="text"
                  value={past_education_school_name}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="রোল নম্বর"
                  type="text"
                  value={past_education_roll_number}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="বোর্ড"
                  type="text"
                  value={past_education_board}
                />
              </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="flex">
            <div className="mt-4 w-1/2">
              <h2 className="text-4xl border-b-2 pb-3 font-extrabold mb-4 ">
                অভিভাবকের তথ্য
              </h2>
              <div className="mt-4">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="সম্পর্ক"
                  type="text"
                  value={guardian_relation}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="নাম (বাংলা)"
                  type="text"
                  value={guardian_name_bangla}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="নাম (ইংরেজি)"
                  type="text"
                  value={guardian_name_english}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="অভিভাবকের এনআইডি"
                  type="text"
                  value={guardian_nid}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="জন্ম তারিখ"
                  type="text"
                  value={guardian_date_of_birth}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="মোবাইল নম্বর"
                  type="text"
                  value={guardian_mobile_number}
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="mt-4 w-1/2">
              <h2 className="text-4xl border-b-2 pb-3 font-extrabold mb-4 ">
                পেমেন্ট তথ্য
              </h2>
              <div className="mt-4">
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="মোবাইল ব্যাংকিং সেবাদানকারি প্রতিষ্ঠান"
                  type="text"
                  value={mobile_banking}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="নাম (বাংলা)"
                  type="text"
                  value={guardian_name_bangla}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="একাউন্ট ধারীর নাম (ইংরেজি)"
                  type="text"
                  value={account_holder_name_english}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="একাউন্ট ধারীর এনআইডি"
                  type="text"
                  value={account_holder_nid}
                />
                <InputField
                  textInputStyle={textInputStyle}
                  inputContainerStyle={inputContainerStyle}
                  label="একাউন্ট নম্বর"
                  type="text"
                  value={account_number}
                />
              </div>
            </div>
          </div>

          {/* Qualification Section */}
          <div className="">
            <h2 className="text-4xl border-b-2  border-gray-400 pb-3 font-extrabold mb-4  ">
              যোগ্যতার শর্ত এবং সংযুক্তি
            </h2>
            <div className="">
              <div className={`grid gap-3 grid-cols-3 `}>
                <select
                  name="gender"
                  id="gender"
                  value={who_bear_education_coast}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>পড়াশোনার খরচ বহন করবে কে? </option>
                  <option value="পিতা">পিতা </option>
                  <option value="মাতা">মাতা</option>
                  <option value="অভিভাবক">অভিভাবক</option>
                </select>

                <select
                  name="marital_status"
                  id="marital_status"
                  value={is_student_ethnic}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>
                    আবেদনকারী কি বাংলাদেশের কোনও ক্ষুদ্র নৃগোষ্ঠী অন্তভুক্ত?{" "}
                  </option>
                  <option value="হ্যাঁ">হ্যাঁ </option>
                  <option value="না">না</option>
                </select>

                <select
                  name="marital_status"
                  id="marital_status"
                  value={is_student_family_freedom_fighter}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>
                    আবেদনকারী কি মুক্তিযোদ্ধা পরিবারের সন্তান (মুক্তিযোদ্ধা
                    প্রজন্ম)?
                  </option>
                  <option value="হ্যাঁ">হ্যাঁ </option>
                  <option value="না">না</option>
                </select>

                <select
                  name="marital_status"
                  id="marital_status"
                  value={is_student_has_another_scholarship}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option value=" ">
                    আবেদনকারী কি অন্য কোন উৎস হতে বৃত্তি/উপবৃত্তি পান?
                  </option>
                  <option value="হ্যাঁ">হ্যাঁ </option>
                  <option value="না">না</option>
                </select>

                <select
                  name="marital_status"
                  id="marital_status"
                  value={is_student_physically_disabled}
                  className="mt-1 text-lg xl:w-80 lg:w-72 w-80 p-1 text-gray-600 font-medium  overflow-hidden bg-white border rounded-none border-gray-400"
                >
                  <option>আবেদনকারির কি কোনো শারীরিক প্রতিবন্ধকতা আছে?</option>
                  <option value="হ্যাঁ">হ্যাঁ </option>
                  <option value="না">না</option>
                </select>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-3">
            <input
              type="submit"
              value={"Update User"}
              className="btn btn-success "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpTable;
