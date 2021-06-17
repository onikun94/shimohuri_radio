import { ShimohuriType, ShimohuriTypes } from "../types/shimohuri";
export async function getHagaki(): Promise<ShimohuriTypes> {
  const response = await fetch("http://localhost:8080/api/v1/users", {
    method: "GET",
  });
  const shimohuris = await response.json();
  //console.log(_res);
  return shimohuris as ShimohuriTypes;
}
