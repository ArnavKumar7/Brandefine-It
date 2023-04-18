import { Image } from "remix-image";
import styles from "~/styles/register.css";
import { Form } from "@remix-run/react";
import { getStoredUsers, storeUsers } from "../api/users";
import { redirect } from "@remix-run/node";
import axios from "axios";

export default function () {
  return (
    <div className="flex justify-center items-center flex-wrap flex-col p-10 m-10 xs:p-0 xs:m-0">
      <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:ml-[1rem] xs:mr-[1rem] xs:text-xl">
        Please ensure you have a point of contact, who will make the payment for
        the entire Team, and will relay all communication received regarding
        Brandefine it!
      </h1>
      <h3 className="text-2xl text-center mb-[5rem] xs:ml-[1rem] xs:mr-[1rem] xs:text-xl">
        Ensure their details are filled as the first member of the team.
      </h3>
      <div className="flex flex-row items-center text-3xl mb-8 xs:flex-col">
        <h1 className="mr-[5rem] text-[#FEC200] xs:mr-0 xs:mb-10">
          3 MEMBERS <br /> INR 480
        </h1>
        <Image
          className="ml-[10rem] mr-[10rem] mb-[4rem] xs:ml-0 xs:mr-0 xs:mb-10"
          src="/qrcollege.PNG"
          alt="Brandefine-It Logo"
          width={250}
          height={250}
          priority
        />
        <h1 className="ml-[5rem] text-[#C01664] xs:ml-0">
          4 MEMBERS <br /> INR 600
        </h1>
      </div>

      <Form method="post">
        <div className="grid gap-x-24 grid-cols-2 justify-items-center xs:grid-cols-1">
          <div className="grid auto-rows-min">
            <label
              htmlFor="Transaction"
              className="text-xl font-semibold text-[#00B182] text-center"
            >
              Transaction ID
            </label>
            <input
              type="text"
              id="Transaction"
              placeholder="Transaction ID"
              name="transactionID"
              className="text-white text-xl bg-black text-center mt-[1rem] mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
              required
            />
          </div>
          <div className="grid auto-rows-min">
            <label
              htmlFor="Member-1 Email"
              className="text-xl font-semibold text-[#00B182] text-center"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              placeholder="Email"
              name="email"
              className="text-white text-xl bg-black text-center mt-[1rem] mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-[2rem]">
          <button
            type="submit"
            className="bg-[#00B182] text-white text-xl px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-10  hover:text-white hover:bg-[#fec200] hover:border-[#00B182] hover:-translate-y-1 hover:scale-110 duration-300 xs:text-sm"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const transactionData = await request.formData();
  const transactionObject = Object.fromEntries(transactionData.entries());
  var users = await axios.get(`${process.env.BACKEND_URI}/get`);
  users = users.data;
  const user = users.find((user) => user.m1email === transactionObject.email);
  if (user === undefined || user === null) {
    return redirect("/OOPS");
  }

  user.transactionId = transactionObject.transactionID;

  await axios.put(`${process.env.BACKEND_URI}/update`, user);
  return redirect("/confirmation");
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
