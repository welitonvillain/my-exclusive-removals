import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  background: "$white",
  alignItems: "center",
  padding: "1.5rem 1rem",
  flexDirection: "column",
  color: "$black",

  ".header": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },

  ".title": {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "3rem",
  },

  ".subtitle": {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "2rem",
    textAlign: "center",
    lineHeight: "2.5rem",

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

export const ReviewsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  margin: "1.5rem",

  ".reviewsTitle": {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontWeight: "300",
    padding: "1rem 0",
    maxWidth: "768px",

    "@media (min-width: 640px)": {
      fontSize: "1.25rem",
    },
  },
});

export const ReviewsSlider = styled("div", {
  display: "flex",
  height: "340px",
  gap: "2.5rem",
  width: "100%",
  overflowX: "scroll",

  "@media (min-width: 640px)": {
    gap: "3rem",
    height: "440px",
  },
});

export const ReviewsCard = styled("div", {
  display: "flex",
  alignItems: "center",
  minWidth: "260px",
  height: "100%",
  background: "$gray",
  borderRadius: "0.5rem",

  "@media (min-width: 640px)": {
    maxWidth: "400px",
    minWidth: "400px",
  },
});

export const ReviewsContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0.75rem",
  color: "$black",
  borderRadius: "0.5rem",

  ".reviewsCardDesc": {
    fontFamily: "Montserrat",
    fontSize: "0.85rem",
    fontWeight: 300,
    fontStyle: "italic",
    width: "100%",
    textAlign: "center",
    margin: "auto 0",

    "@media (min-width: 640px)": {
      fontSize: "1rem",
    },

    "@media (min-width: 1024px)": {
      fontSize: "1rem",
    },
  },

  ".reviewsCardFooter": {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ".reviewsCardCustomerName": {
    fontFamily: "Poppins",
    fontSize: "0.85rem",
    fontWeight: 600,

    "@media (min-width: 640px)": {
      fontSize: "1rem",
    },
  },

  ".reviewsStars": {
    display: "flex",
    color: "$yellow",
  },

  "@media (min-width: 640px)": {
    padding: "1rem",
  },
});

export const ReviewsPhoto = styled("div", {
  display: "flex",
  height: "60px",
  width: "60px",

  minHeight: "60px",
  minWidth: "60px",
  borderRadius: "100%",

  overflow: "hidden",

  "@media (min-width: 640px)": {
    height: "80px",
    width: "80px",
    minHeight: "80px",
    minWidth: "80px",

    marginTop: "0.75rem",
  },

  img: {
    objectFit: "cover",
  },
});
