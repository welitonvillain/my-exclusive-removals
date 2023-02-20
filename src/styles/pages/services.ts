import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  background: "$black",
  alignItems: "center",
  padding: "1.5rem 1rem",
  flexDirection: "column",

  ".title": {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "3rem",
  },

  ".description": {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontWeight: "300",
    padding: "1rem 0",
    maxWidth: "768px",
  },
});

export const ServiceContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  margin: "2.5rem 0",

  "@media (min-width: 640px)": {
    margin: "3.5rem 0",
    padding: "0 1rem",
  },

  "@media (min-width: 1024px)": {
    margin: "4.5rem 0",
    padding: "0 3rem",
    flexDirection: "row",
  },
});

export const Service = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  width: "100%",
  minWidth: "300px",
  maxWidth: "768px",
  minHeight: "240px",

  borderRadius: "0.5rem",
  border: "1px solid transparent",
  borderColor: "rgba(240,203,21,1)",
  boxShadow: "0px 0px 20px -10px #facc15",

  ".serviceIcon": {
    fontSize: "1.5rem",
    color: "$yellow",
    width: "100%",
    textAlign: "center",
    marginBottom: "0.5rem",

    "@media (min-width: 640px)": {
      fontSize: "1.75rem",
      marginBottom: "1rem",
    },
  },

  ".serviceTitle": {
    width: "100%",
    textAlign: "center",
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: "1rem",

    "@media (min-width: 640px)": {
      fontSize: "1.25rem",
    },
  },

  ".serviceDesc": {
    width: "100%",
    textAlign: "center",
    fontWeight: 300,
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    margin: "auto 0",

    "@media (min-width: 640px)": {
      fontSize: "1rem",
    },
  },

  "@media (min-width: 1024px)": {
    minHeight: "360px",
  },
});

export const ProcessContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginBottom: "1.5rem",

  ".processTitle": {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "1.5rem",

    fontSize: "1.25rem",

    span: {
      fontFamily: "Poppins",
      fontWeight: 600,
    },

    "@media (min-width: 640px)": {
      fontSize: "1.5rem",
      padding: "0 1rem",
    },
  },
});

export const ProcessSlider = styled("div", {
  display: "flex",
  height: "148px",
  gap: "2.5rem",
  width: "100%",
  overflowX: "scroll",

  "@media (min-width: 640px)": {
    gap: "3rem",
  },
});

export const ProcessCard = styled("div", {
  display: "flex",
  alignItems: "center",
  minWidth: "100%",
  height: "100%",
  color: "$white",
  borderRadius: "0.5rem",

  span: {
    fontSize: "2.5rem",
    fontWeight: 600,
    fontFamily: "Montserrat",
    marginRight: "1rem",

    "@media (min-width: 640px)": {
      margin: "0 1.25rem",
    },
  },

  "@media (min-width: 1024px)": {
    maxWidth: "700px",
    minWidth: "700px",
  },
});

export const ProcessContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0.75rem",
  backgroundColor: "rgb(255, 255, 255, 15%)",
  color: "$white",
  borderRadius: "0.5rem",

  ".processContent": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },

  ".processCardTitle": {
    fontFamily: "Poppins",
    fontSize: "1rem",
    fontWeight: 600,

    "@media (min-width: 640px)": {
      fontSize: "1.25rem",
    },
  },

  ".processCardDesc": {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    fontWeight: 300,
    width: "100%",
    textAlign: "center",
    margin: "auto 0",

    "@media (min-width: 640px)": {
      fontSize: "0.875rem",
    },

    "@media (min-width: 1024px)": {
      fontSize: "1rem",
    },
  },

  "@media (min-width: 640px)": {
    padding: "1rem",
  },
});
