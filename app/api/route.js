export async function GetProjects() {
  const res = await fetch("https://api.test.cyberia.studio/api/v1/projects", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
  return data;
}
