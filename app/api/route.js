export async function GetData({ path }) {
  const full_path = "https://api.test.cyberia.studio/api/v1/" + path;
  const res = await fetch(full_path, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
  return data;
}
