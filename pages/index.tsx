import Link from "next/link";
import { useEffect, useState } from "react";
import { getHagaki } from "../lib/getHagaki";
import { ShimohuriType, ShimohuriTypes } from "../types/shimohuri";
const Home = () => {
  const [contents, setContents] = useState<string>("");
  const [shimohuris, setShimohuris] = useState<ShimohuriType[] | null>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    (async () => {
      const response = await getHagaki();
      setShimohuris(response.shimohuris);
      console.log("thisis");
      console.log(response.shimohuris);
    })();
  }, []);

  return (
    <div>
      <p>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </p>
      <p>test</p>
      {shimohuris.map((shimo) => (
        <div>{shimo.contents}</div>
      ))}
    </div>
  );
};

export default Home;
