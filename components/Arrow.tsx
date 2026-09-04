export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 5h16M12 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.2 1.6 6.6 4.5 5.1 6a9.4 9.4 0 0 0 4.9 4.9l1.5-1.5 2.9 1.4v2.4c0 .6-.5 1.1-1.1 1.1A12.7 12.7 0 0 1 .7 1.7C.7 1.1 1.2.6 1.8.6h2.4l1 1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
