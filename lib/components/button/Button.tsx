import { Box, Typography } from "@mui/material";

interface Props {
  handleClick: string;
  title: string;
}

export const Button = ({ handleClick, title }: Props) => {
  return (
    <>
      <Box bgcolor={"red"} onClick={() => console.log(handleClick)}>
        <Typography>{title} 0.3.0 !!</Typography>
      </Box>
    </>
  );
};
