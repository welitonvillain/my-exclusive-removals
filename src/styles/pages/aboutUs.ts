import { styled } from "..";
// AIzaSyDUy0SDPIGFfnsbbV0axSquCicBgpXbNd0
export const Container = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  background: "$white",
  alignItems: "center",
  padding: "1.5rem 1rem",
  flexDirection: "column",
  color: "$black",

  ".title": {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "3rem",
    marginBottom: "1.5rem",
  },

  ".subtitle": {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "1.5rem",
    textAlign: "center",
    lineHeight: "2.5rem",

    marginTop: "1.5rem",

    span: {
      color: "$yellow",
      fontWeight: "700",
    },
  },

  ".description": {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontWeight: "300",
    padding: "1rem 0",
    maxWidth: "768px",
  },
});
