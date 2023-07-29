import { styled } from "@nextui-org/react";

export const EmojiButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  margin: 0,
  // styles
  width: "24px",
  height: "24px",
  marginLeft: "8px",
  dflex: "center",
  bg: "$primary",
  borderRadius: "$rounded",
  cursor: "pointer",
  transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
  svg: {
    size: "100%",
    padding: "4px",
    transition: "transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
  },
  "&:hover": {
    opacity: 0.8,
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});