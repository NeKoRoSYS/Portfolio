export default function TextEcho({ string }: { string: string }) {
  return (
    <span className="group relative text-green-400 select-none touch-hover:text-purple-400">
      {string}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 text-transparent opacity-0 transition-all ease-in-out [-webkit-text-stroke:2px_var(--color-purple-400)] group-touch-hover:top-2 group-touch-hover:opacity-50"
      >
        {string}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 text-transparent opacity-0 transition-all ease-in-out [-webkit-text-stroke:2px_var(--color-purple-400)] group-touch-hover:top-5 group-touch-hover:opacity-25"
      >
        {string}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 text-transparent opacity-0 transition-all ease-in-out [-webkit-text-stroke:2px_var(--color-purple-400)] group-touch-hover:top-7 group-touch-hover:opacity-10"
      >
        {string}
      </span>
    </span>
  );
}
