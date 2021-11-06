export default function capitalize (str) {
  const capitalizeStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizeStr;
};