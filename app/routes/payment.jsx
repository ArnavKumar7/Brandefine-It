import { Image } from "remix-image";
import styles from "~/styles/register.css";
import { Form } from "@remix-run/react";
import { getStoredUsers, storeUsers } from "../data/users";
import { redirect } from "@remix-run/node";

export default function () {
  return (
    <div className="flex justify-center items-center flex-wrap flex-col p-10 m-10">
      <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:ml-[1rem] xs:mr-[1rem] xs:text-sm">
        Please ensure you have a point of contact, who will make the payment for
        the entire Team, and will relay all communication received regarding
        Brandefine it!
      </h1>
      <h3 className="text-2xl text-center mb-[5rem]">
        Ensure their details are filled as the first member of the team.
      </h3>
      <div className="flex flex-row items-center text-3xl mb-8">
        <h1 className="mr-[5rem] text-[#FEC200]">
          3 MEMBERS <br /> INR 480
        </h1>
        <Image
          className="ml-[10rem] mr-[10rem] mb-[4rem]"
          src="/qrcollege.png"
          alt="Brandefine-It Logo"
          width={250}
          height={250}
          priority
        />
        <h1 className="ml-[5rem] text-[#C01664]">
          4 MEMBERS <br /> INR 600
        </h1>
      </div>

      <Form method="post">
        <div className="grid gap-x-24 grid-cols-2 justify-items-center">
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
              className="text-white text-xl bg-black text-center mt-[1rem] mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
              className="text-white text-xl bg-black text-center mt-[1rem] mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-[2rem]">
          <button
            type="submit"
            className="bg-[#00B182] text-white text-xl px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
  const users = await getStoredUsers();
  const user = users.find((user) => user.m1email === transactionObject.email);
  console.log(user);
  if (user === undefined || user === null) {
    return redirect("/OOPS");
  }
  users.map((user) => {
    if (user.m1email === transactionObject.email) {
      user.transactionId = transactionObject.transactionID;
    }
    return user;
  });
  await storeUsers(users);
  return redirect("/confirmation");
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
