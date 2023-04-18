import { Form } from "@remix-run/react";

export function MemberDetails({ data, nextStep, handleChange, users }) {
  const Continue = (e) => {
    e.preventDefault();
    if (
      document.getElementById("Name").value == "" ||
      document.getElementById("email").value == "" ||
      document.getElementById("phone").value == "" ||
      document.getElementById("college").value == "" ||
      document.getElementById("USN").value == "" ||
      document.getElementById("course").value == "" ||
      document.getElementById("sem").value == "" ||
      data.teamname == ""
    ) {
      alert(
        "Please fill all the fields (PS: check the team name at the top also)"
      );
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

  return (
    <div className="ml-[34px] mr-[68px] w-1/2 bg-black  my-6 border border-solid border-[#000000] rounded-md mb-auto xs:w-4/5">
      <Form>
        <div className="grid gap-x-24 grid-cols-2 mt-5 xs:grid-cols-1">
          <div className="grid gap-y-7 auto-rows-min">
            <h1>MEMBER-1 DETAILS</h1>
            <label
              htmlFor="Name"
              className="text-xl font-semibold text-[#00B182] "
            >
              Name
            </label>
            <input
              type="text"
              name="m1name"
              id="Name"
              value={data.m1name}
              onChange={handleChange("m1name")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />

            <label
              htmlFor="email"
              className="text-xl font-semibold text-[#00B182]"
            >
              Email Id
            </label>
            <input
              type="email"
              name="m1email"
              id="email"
              value={data.m1email}
              onChange={handleChange("m1email")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />

            <label
              htmlFor="phone"
              className="text-xl font-semibold text-[#00B182]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="m1phone"
              id="phone"
              value={data.m1phone}
              onChange={handleChange("m1phone")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />

            <label
              htmlFor="sem"
              className="text-xl font-semibold text-[#00B182]"
            >
              Semester
            </label>
            <input
              type="number"
              name="m1sem"
              id="sem"
              value={data.m1sem}
              onChange={handleChange("m1sem")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
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
              name="m1college"
              id="college"
              value={data.m1college}
              onChange={handleChange("m1college")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />

            <label
              htmlFor="USN"
              className="text-xl font-semibold text-[#00B182]"
            >
              College USN
            </label>
            <input
              type="text"
              name="m1usn"
              id="USN"
              value={data.m1usn}
              onChange={handleChange("m1usn")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />

            <label
              htmlFor="course"
              className="text-xl font-semibold text-[#00B182]"
            >
              Course
            </label>
            <input
              type="text"
              name="m1course"
              id="course"
              value={data.m1course}
              onChange={handleChange("m1course")}
              className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>
        </div>
        <button
          onClick={Continue}
          className="bg-[#00B182] text-white px-4 py-2 rounded-md mt-5 mb-5"
        >
          Next
        </button>
      </Form>
    </div>
  );
}
