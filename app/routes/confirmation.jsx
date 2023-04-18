import styles from "~/styles/register.css";

export default function () {
  return (
    <div className="m-auto">
      <h1 className="mt-[5rem] mb-[2rem] mr-[10rem] ml-[10rem] text-2xl text-white text-center xs:ml-[1rem] xs:mr-[1rem] xs:text-sm xs:mt-[10rem]">
        Yayyee!! You have successfully completed the registration process. We
        will get back to you once we verify your transaction.
      </h1>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
