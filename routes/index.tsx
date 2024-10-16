import { useSignal } from "@preact/signals"
import Counter from "../islands/Counter.tsx"

export default function Home() {
  const count = useSignal(3);

  return (
    <>
      <img
        src="/logo.svg"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <h1>Welcome to Fresh</h1>
      <Counter count={count} />
    </>
  );
}
