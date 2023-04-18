import { Form } from "@remix-run/react";

export function MemberDetails3({
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
      users.find((user) => user.m1email === data.m1email) ||
      users.find((user) => user.m2email === data.m1email) ||
      users.find((user) => user.m3email === data.m1email) ||
      users.find((user) => user.m4email === data.m1email)
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
    <div className="ml-[34px] mr-[68px] w-1/2 bg-black  my-6 border border-solid border-[#000000] rounded-md mb-auto xs:w-4/5">
      <Form>
        <div className="grid gap-x-24 grid-cols-2 mt-5 xs:grid-cols-1">
          <div className="grid gap-y-7 auto-rows-min">
            <h1>MEMBER-3 DETAILS</h1>
            <label
              htmlFor="Name"
              className="text-xl font-semibold text-[#00B182] "
            >
              Name
            </label>
            <input
              type="text"
              name="m3name"
              id="Name"
              value={data.m3name}
              onChange={handleChange("m3name")}
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
              name="m3email"
              id="email"
              value={data.m3email}
              onChange={handleChange("m3email")}
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
              name="m3phone"
              id="phone"
              value={data.m3phone}
              onChange={handleChange("m3phone")}
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
              name="m3sem"
              id="sem"
              value={data.m3sem}
              onChange={handleChange("m3sem")}
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
              name="m3college"
              id="college"
              value={data.m3college}
              onChange={handleChange("m3college")}
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
              name="m3usn"
              id="USN"
              value={data.m3usn}
              onChange={handleChange("m3usn")}
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
              name="m3course"
              id="course"
              value={data.m3course}
              onChange={handleChange("m3course")}
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
