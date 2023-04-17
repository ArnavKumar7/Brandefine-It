import fs from "fs/promises";
import path from "path";

export async function getStoredUsers() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const rawFileCOntent = await fs.readFile(jsonDirectory + "/users.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileCOntent);
  const storedUsers = data.registrations ?? [];
  return storedUsers;
}

export function storeUsers(registrations) {
  return fs.writeFile(
    "/users.json",
    JSON.stringify({ registrations: registrations || [] })
  );
}
