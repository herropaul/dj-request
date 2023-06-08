const getData = async () => {
  const res = await fetch(process.env.DEV_ENV_URL + "/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const data = await getData();

  return <div>Welcome {data.name}</div>;
}
