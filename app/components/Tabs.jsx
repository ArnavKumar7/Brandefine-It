import { NavLink } from "@remix-run/react";

export function Tab({ to, tabName, name }) {
  console.log(name);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex h-12 text-center items-center font-semibold cursor-pointer text-[#0160C9] border-b-2 border-[#0160C9]"
          : "flex h-12 text-center items-center font-semibold cursor-pointer text-[#565A62]  hover:text-[#0160C9] hover:border-[#0160C9] "
      }
    >
      {tabName}
    </NavLink>
  );
}
export function TabContainer({ children }) {
  const tabs = children.map((child) => child);
  return (
    <div className="flex flex-row mx-8 space-x-8 h-12 border-b-2  border-[#E0E1E3]">
      {tabs}
    </div>
  );
}

export function TabSelect({ onClick, tabName, value, activeTab }) {
  return (
    <div
      onClick={() => onClick(value)}
      className={
        activeTab == value
          ? "flex h-12 text-center items-center font-semibold cursor-pointer text-[#0160C9] border-b-2 border-[#0160C9]"
          : "flex h-12 text-center items-center font-semibold cursor-pointer text-[#565A62]  hover:text-[#0160C9] hover:border-[#0160C9] "
      }
    >
      {tabName}
    </div>
  );
}
