export async function getData() {
  const response = await fetch('/data/operators.jsonl');
  const lines = await response.text();
  return lines.split('\n').map((line) => JSON.parse(line)) as Array<Operator>;
}
