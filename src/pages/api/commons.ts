export const handleClickScroll = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
