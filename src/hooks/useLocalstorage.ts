import { useEffect, useState } from "preact/hooks";

export function useLocalstorage(key: string, initial: any) {
  //   let val = key;
  //   if (typeof val === "string") return;
  const [first, setfirst] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) as any) || initial;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(first));
  }, [first, setfirst]);

  return [first, setfirst];
}
