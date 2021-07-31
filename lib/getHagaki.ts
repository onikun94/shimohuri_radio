import { ShimohuriType, ShimohuriTypes } from "../types/shimohuri";
export async function getHagaki(): Promise<ShimohuriType> {
  const response = await fetch("http://localhost:8080/api/v1/yato", {
    method: "GET",
  });
  const shimohuris = await response.json();
  console.log(shimohuris);
  return shimohuris as ShimohuriType;
}
