import { Form } from "@remix-run/react";

export default function () {
  return (
    <div
      className="ml-[34px] mr-[68px]  bg-black  my-6 border border-solid border-[#000000] rounded-md mb-auto"
      style={{ width: "50%" }}
    >
      <Form>
        <div className="grid gap-x-24 grid-cols-2 mt-5">
          <div className="grid gap-y-7 auto-rows-min">
            <h1>PERSONAL DETAILS</h1>
            <label
              htmlFor="Name"
              className="text-xl font-semibold text-[#00B182] "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="email"
              className="text-xl font-semibold text-[#00B182]"
            >
              Email Id
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="phone"
              className="text-xl font-semibold text-[#00B182]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <label
              htmlFor="date"
              className="text-xl font-semibold text-[#00B182]"
            >
              DOB
            </label>
            <input
              type="date"
              name="date"
              id="Date"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="grid gap-y-7 auto-rows-min">
            <h1>COLLEGE DETAILS</h1>
            <label
              htmlFor="college"
              className="text-xl font-semibold text-[#00B182]"
            >
              College Name
            </label>
            <input
              type="text"
              name="college"
              id="college"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <label
              htmlFor="USN"
              className="text-xl font-semibold text-[#00B182]"
            >
              College USN
            </label>
            <input
              type="text"
              name="USN"
              id="USN"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <label
              htmlFor="course"
              className="text-xl font-semibold text-[#00B182]"
            >
              Course
            </label>
            <input
              type="text"
              name="course"
              id="course"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <label
              htmlFor="sem"
              className="text-xl font-semibold text-[#00B182]"
            >
              Semester
            </label>
            <input
              type="text"
              name="sem"
              id="sem"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
