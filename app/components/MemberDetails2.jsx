import { Form } from "@remix-run/react";

export function MemberDetails2({
  data,
  nextStep,
  handleChange,
  prevStep,
  users,
}) {
  const Continue = (e) => {
    e.preventDefault();
    if (
      document.getElementById("Name").value == "" ||
      document.getElementById("email").value == "" ||
      document.getElementById("phone").value == "" ||
      document.getElementById("college").value == "" ||
      document.getElementById("USN").value == "" ||
      document.getElementById("course").value == "" ||
      document.getElementById("sem").value == ""
    ) {
      alert("Please fill all the fields");
    } else if (
      users.find((user) => user.m1email === data.m2email) ||
      users.find((user) => user.m2email === data.m2email) ||
      users.find((user) => user.m3email === data.m2email) ||
      users.find((user) => user.m4email === data.m2email)
    ) {
      alert("Email already exists");
    } else {
      nextStep();
    }
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div
      className="ml-[34px] mr-[68px]  bg-black  my-6 border border-solid border-[#000000] rounded-md mb-auto"
      style={{ width: "50%" }}
    >
      <Form>
        <div className="grid gap-x-24 grid-cols-2 mt-5 xs:grid-cols-1">
          <div className="grid gap-y-7 auto-rows-min">
            <h1>MEMBER-2 DETAILS</h1>
            <label
              htmlFor="Name"
              className="text-xl font-semibold text-[#00B182] "
            >
              Name
            </label>
            <input
              type="text"
              name="m2name"
              id="Name"
              value={data.m2name}
              onChange={handleChange("m2name")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="email"
              className="text-xl font-semibold text-[#00B182]"
            >
              Email Id
            </label>
            <input
              type="email"
              name="m2email"
              id="email"
              value={data.m2email}
              onChange={handleChange("m2email")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="phone"
              className="text-xl font-semibold text-[#00B182]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="m2phone"
              id="phone"
              value={data.m2phone}
              onChange={handleChange("m2phone")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <label
              htmlFor="sem"
              className="text-xl font-semibold text-[#00B182]"
            >
              Semester
            </label>
            <input
              type="text"
              name="m2sem"
              id="sem"
              value={data.m2sem}
              onChange={handleChange("m2sem")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="grid gap-y-7 auto-rows-min">
            <h1 className="xs:mt-[5rem]">COLLEGE DETAILS</h1>
            <label
              htmlFor="college"
              className="text-xl font-semibold text-[#00B182]"
            >
              College Name
            </label>
            <input
              type="text"
              name="m2college"
              id="college"
              value={data.m2college}
              onChange={handleChange("m2college")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="USN"
              className="text-xl font-semibold text-[#00B182]"
            >
              College USN
            </label>
            <input
              type="text"
              name="m2usn"
              id="USN"
              value={data.m2usn}
              onChange={handleChange("m2usn")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="course"
              className="text-xl font-semibold text-[#00B182]"
            >
              Course
            </label>
            <input
              type="text"
              name="m2course"
              id="course"
              value={data.m2course}
              onChange={handleChange("m2course")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={Previous}
            className="bg-[#00B182] text-white px-4 py-2 rounded-md mt-5 mb-5"
          >
            Previous
          </button>
          <button
            onClick={Continue}
            className="bg-[#00B182] text-white px-4 py-2 rounded-md mt-5 mb-5"
          >
            Next
          </button>
        </div>
      </Form>
    </div>
  );
}
