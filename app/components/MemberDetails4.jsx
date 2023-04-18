import { Form, useSubmit } from "@remix-run/react";
import { getStoredUsers, storeUsers } from "../api/users";
import { redirect } from "@remix-run/node";

export function MemberDetails4({ data, nextStep, handleChange, prevStep }) {
  let submit = useSubmit();
  function handleSubmit(event) {
    // let's prevent the default event
    event.preventDefault();

    // grab the form element
    let $form = event.currentTarget;

    // get the formData from that form
    let formData = data;

    // save the captcha token inside

    // and finally submit the form data, re-using the method and action from the form
    submit(formData, {
      method: $form.getAttribute("method") ?? $form.method,
      action: $form.getAttribute("action") ?? $form.action,
    });
  }

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="ml-[34px] mr-[68px] w-1/2 bg-black  my-6 border border-solid border-[#000000] rounded-md mb-auto xs:w-4/5">
      <form onSubmit={handleSubmit} method="post">
        <div className="grid gap-x-24 grid-cols-2 mt-5 xs:grid-cols-1">
          <div className="grid gap-y-7 auto-rows-min">
            <h1>MEMBER-4 DETAILS</h1>
            <label
              htmlFor="Name"
              className="text-xl font-semibold text-[#00B182] "
            >
              Name
            </label>
            <input
              type="text"
              name="m4name"
              id="Name"
              value={data.m4name}
              onChange={handleChange("m4name")}
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
              name="m4email"
              id="email"
              value={data.m4email}
              onChange={handleChange("m4email")}
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
              name="m4phone"
              id="phone"
              value={data.m4phone}
              onChange={handleChange("m4phone")}
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
              name="m4sem"
              id="sem"
              value={data.m4sem}
              onChange={handleChange("m4sem")}
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
              name="m4college"
              id="college"
              value={data.m4college}
              onChange={handleChange("m4college")}
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
              name="usn"
              id="USN"
              value={data.m4usn}
              onChange={handleChange("m4usn")}
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
              name="m4course"
              id="course"
              value={data.m4course}
              onChange={handleChange("m4course")}
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
            type="submit"
            className="bg-[#00B182] text-white px-4 py-2 rounded-md mt-5 mb-5"
          >
            Proceed to Pay
          </button>
        </div>
      </form>
    </div>
  );
}
