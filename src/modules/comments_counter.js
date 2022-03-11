export default function CCounter(arr) {
  if (arr !== undefined) {
    return arr.length;
  }
  throw new Error('Undefined Number of comments');
}