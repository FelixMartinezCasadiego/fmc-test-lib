import "../../tailwind.css";
import packageJson from "../../../package.json";

import { Box, Typography } from "@mui/material";
import snowCold from "../../assets/snow_cold.svg";

export const TextFieldLola = () => {
  return (
    <>
      <Box bgcolor={"yellow"}>
        <Typography>Aqui!!</Typography>

        <div className="bg-red-700">
          <h1 className="text-3xl font-bold underline">
            Hello world! {packageJson.version}
          </h1>
        </div>

        <Box component={"img"} alt="img" src={snowCold} width={50} />
      </Box>
    </>
  );
};
