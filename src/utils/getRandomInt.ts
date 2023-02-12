export default function getRandomInt(minV: number, maxV: number): number {
  const min = Math.ceil(minV);
  const max = Math.floor(maxV);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
