import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <nav data-props="--x" className="">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p className="">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </nav>
  );
}
