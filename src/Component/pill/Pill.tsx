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
      <h5>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0.5C8.41421 0.5 8.75 0.835786 8.75 1.25V7.25H14.75C15.1642 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.1642 8.75 14.75 8.75H8.75V14.75C8.75 15.1642 8.41421 15.5 8 15.5C7.58579 15.5 7.25 15.1642 7.25 14.75V8.75H1.25C0.835786 8.75 0.5 8.41421 0.5 8C0.5 7.58579 0.835786 7.25 1.25 7.25H7.25V1.25C7.25 0.835786 7.58579 0.5 8 0.5Z"
            fill="white"
          />
        </svg>
      </h5>
    </h1>
  );
}
