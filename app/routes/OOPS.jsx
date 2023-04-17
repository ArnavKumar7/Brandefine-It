import styles from "~/styles/register.css";

export default function () {
  return (
    <div className="m-auto">
      <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-center xs:ml-[1rem] xs:mr-[1rem] xs:text-sm">
        Please enter a valid email if you registered for Brandefine it!
        <br />
        <br />
        Or else you can register for the event here:
        <br />
        <br />
        https://brandefineit.vercel.app/register
      </h1>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
