import fs from "fs/promises";

export async function getStoredUsers() {
  const rawFileCOntent = await fs.readFile("./public/users.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileCOntent);
  const storedUsers = data.registrations ?? [];
  return storedUsers;
}

export function storeUsers(registrations) {
  return fs.writeFile(
    "./public/users.json",
    JSON.stringify({ registrations: registrations || [] })
  );
}
