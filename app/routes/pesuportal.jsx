import styles from "~/styles/register.css";
import { Link } from "@remix-run/react";

export default function () {
  return (
    <div className="m-auto">
      <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-white text-2xl text-center">
        Please follow the below link in a new tab
        <br />
        <a
          href="https://www.pesuacademy.com/Academy/s/studentProfilePESU"
          className="text-[#6aaec7]"
        >
          HERE
        </a>
        <br />
        Login to your PESU account.
        <br />
        <br />
        On the navigation tab, go to the "Online Payments"
        <br />
        <br />
        Then go to the "Miscellaneous" tab.
        <br />
        <br />
        Then select "Brandefine it 2.0!" on the category dropdown.
        <br />
        <br />
        Then select the "Brandefine it 2.0" on the sub category dropdown.
        <br />
        <br />
        Then click on Pay Now.
        <br />
        <br />
        The above step has to be done by all the team members separately and
        <br />
        then the screenshots of the payment has to be sent by following the
        below link.
        <br />
        <button className="bg-blue-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mt-[5rem]">
          <a href="mailto:dsgnr@pes.edu,dsgnr.ecc@pes.edu">Send Email</a>
        </button>
      </h1>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
