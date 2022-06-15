export const localTime = () => {
  let date = new Date();
  return date.toLocaleDateString() + " · " + "kl: " + date.toLocaleTimeString();
};
