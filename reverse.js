export default function strRev (string) {
  const revStr = string.split('').reverse().join('');
  return revStr;
};