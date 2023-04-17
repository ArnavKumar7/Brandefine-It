import { useState } from "react";
// import { Tab, TabContainer } from "../components/Tabs";
// import { Outlet } from "@remix-run/react";
import { MemberDetails } from "../components/MemberDetails";
import { MemberDetails2 } from "../components/MemberDetails2";
import { MemberDetails3 } from "../components/MemberDetails3";
import { MemberDetails4 } from "../components/MemberDetails4";
import styles from "~/styles/register.css";
import { redirect } from "@remix-run/node";
import { getStoredUsers, storeUsers } from "../api/users";
import { useLoaderData } from "@remix-run/react";

export default function () {
  const [data, setData] = useState({
    id: "",
    step: 1,
    teamname: "",
    m1name: "",
    m1email: "",
    m1phone: "",
    m1college: "",
    m1usn: "",
    m1course: "",
    m1sem: "",
    m2name: "",
    m2email: "",
    m2phone: "",
    m2dob: "",
    m2college: "",
    m2usn: "",
    m2course: "",
    m2sem: "",
    m3name: "",
    m3email: "",
    m3phone: "",
    m3dob: "",
    m3college: "",
    m3usn: "",
    m3course: "",
    m3sem: "",
    m4name: "",
    m4email: "",
    m4phone: "",
    m4dob: "",
    m4college: "",
    m4usn: "",
    m4course: "",
    m4sem: "",
    transactionId: "",
  });

  const prevStep = () => {
    setData({ ...data, step: data.step - 1 });
  };

  // proceed to the next step
  const nextStep = () => {
    // const { step } = data.step;
    // setData({ step: step + 1 });
    setData({ ...data, step: data.step + 1 });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setData({ ...data, [input]: e.target.value });
  };

  switch (data.step) {
    case 1:
      return (
        <div className="flex justify-center items-center flex-wrap flex-col">
          <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:mt-[5rem] xs:ml-[1rem] xs:mr-[1rem] xs:text-sm xs:overflow-nowrap">
            Please ensure you have a point of contact who will enter the details
            for the entire Team and will be Member-1. They will have to relay
            all communication received regarding Brandefine it!
          </h1>
          <h3 className="text-sm text-center mb-[2rem] xs:ml=[1rem] xs:mr-[1rem]">
            Ensure their details are filled as the first member of the team.
          </h3>
          <input
            type="text"
            placeholder={data.teamname ? data.teamname : "TEAM NAME"}
            onChange={handleChange("teamname")}
            value={data.teamname}
            className="text-white text-xl bg-black text-center mb-[1rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
          />
          <MemberDetails
            data={data}
            nextStep={nextStep}
            handleChange={handleChange}
            users={[]}
          />
        </div>
      );
    case 2:
      return (
        <div className="flex justify-center items-center flex-wrap flex-col">
          <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:mt-[5rem] xs:ml-[1rem] xs:mr-[1rem] xs:text-sm xs:overflow-nowrap">
            Please ensure you have a point of contact who will enter the details
            for the entire Team and will be Member-1. They will have to relay
            all communication received regarding Brandefine it!
          </h1>
          <h3 className="text-2xl text-center mb-[2rem] xs:ml=[1rem] xs:mr-[1rem]">
            Ensure their details are filled as the first member of the team.
          </h3>
          <input
            type="text"
            placeholder={data.teamname ? data.teamname : "TEAM NAME"}
            onChange={handleChange("teamname")}
            value={data.teamname}
            className="text-white text-xl bg-black text-center mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
          />
          <MemberDetails2
            data={data}
            nextStep={nextStep}
            handleChange={handleChange}
            prevStep={prevStep}
            users={[]}
          />
        </div>
      );
    case 3:
      return (
        <div className="flex justify-center items-center flex-wrap flex-col">
          <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:mt-[5rem] xs:ml-[1rem] xs:mr-[1rem] xs:text-sm xs:overflow-nowrap">
            Please ensure you have a point of contact who will enter the details
            for the entire Team and will be Member-1. They will have to relay
            all communication received regarding Brandefine it!
          </h1>
          <h3 className="text-2xl text-center mb-[2rem] xs:ml=[1rem] xs:mr-[1rem]">
            Ensure their details are filled as the first member of the team.
          </h3>
          <input
            type="text"
            placeholder={data.teamname ? data.teamname : "TEAM NAME"}
            onChange={handleChange("teamname")}
            value={data.teamname}
            className="text-white text-xl bg-black text-center  mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
          />
          <MemberDetails3
            data={data}
            nextStep={nextStep}
            handleChange={handleChange}
            prevStep={prevStep}
            users={[]}
          />
        </div>
      );
    case 4:
      return (
        <div className="flex justify-center items-center flex-wrap flex-col">
          <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:mt-[5rem] xs:ml-[1rem] xs:mr-[1rem] xs:text-sm xs:overflow-nowrap">
            Please ensure you have a point of contact who will enter the details
            for the entire Team and will be Member-1. They will have to relay
            all communication received regarding Brandefine it!
          </h1>
          <h3 className="text-2xl text-center mb-[2rem] xs:ml=[1rem] xs:mr-[1rem]">
            Ensure their details are filled as the first member of the team.
          </h3>
          <input
            type="text"
            placeholder={data.teamname ? data.teamname : "TEAM NAME"}
            onChange={handleChange("teamname")}
            value={data.teamname}
            className="text-white text-xl bg-black text-center  mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent xs:text-sm"
          />
          <MemberDetails4
            data={data}
            nextStep={nextStep}
            handleChange={handleChange}
            prevStep={prevStep}
            users={[]}
          />
        </div>
      );
    default:
      return <h1>OOPS</h1>;
  }
  // return (
  //   <div className="flex justify-center items-center flex-wrap flex-col">
  //     <input
  //       type="text"
  //       placeholder="TEAM NAME"
  //       className="text-white text-xl bg-black text-center mt-[10rem] mb-[2rem] px-20 py-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  //     />
  //   </div>
  // );
}

export async function action({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data.entries());
  const existingNotes = await getStoredUsers();
  formData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(formData);
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  await storeUsers(updatedNotes);
  if (formData.m1college.toUpperCase().includes("PES")) {
    return redirect("/pesuportal");
  } else {
    return redirect("/payment");
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const users = await getStoredUsers();
  return users;
}
