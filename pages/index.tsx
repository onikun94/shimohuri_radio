import Link from "next/link";
import { useEffect, useState } from "react";
import { getHagaki } from "../lib/getHagaki";
import { ShimohuriType, ShimohuriTypes } from "../types/shimohuri";
const Home = () => {
  const [contents, setContents] = useState<string>("");
  const [shimohuris, setShimohuris] = useState<ShimohuriType | null>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    (async () => {
      const response = await getHagaki();
      setShimohuris(response);
      setContents(response[1].contents);
      //console.log("thatis" + contents);
      console.log("thisis");
      console.log(shimohuris);
      console.log(response[1].contents);
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
      <p> {contents}</p>
    </div>
  );
};

export default Home;
