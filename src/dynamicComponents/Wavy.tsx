import { Box } from "@mui/material";

export default function Wavy({ waveColor }: any) {
  return (
    <Box
      sx={{
        border: "0px solid red",
        position: "absolute",
        bottom: "-10px",
        left: "0",
        width: "100%",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path fill={waveColor} id="wave1" d="M100,10H0V9C49.83,9,50,2,100,2v8Z">
          <animate
            attributeType="XML"
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
            M100,10H0V9C49.83,9,50,2,100,2v8Z;
            M100,10H0V5.58C50.08,0,50.08,0,100,5.5V10Z;
            M100,10H0V2C49.83,2,50,9,100,9v1Z;
            M100,10H0V5.5C50,10,50,10,100,5.5V10Z;
            M100,10H0V9C49.83,9,50,2,100,2v8Z
            "
          />
        </path>
      </svg>
    </Box>
  );
}
