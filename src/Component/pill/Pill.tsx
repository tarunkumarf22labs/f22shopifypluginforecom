export function Pill({
  onClick,
  type = "circle",
  text,
  className,
}: {
  onClick: () => void;
  type: "circle" | "box";
  text: string;
  className?: string;
}) {
  return (
    <h1
      className={`  pill
        ${type === "circle" ? "rounded-full" : " "}
         ${className}
        `}
      onClick={onClick}
    >
      <h4>{text}</h4>
    </h1>
  );
}
