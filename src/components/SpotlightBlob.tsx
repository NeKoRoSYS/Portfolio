export default function SpotlightBlob({
  color = "bg-purple-500",
  size = "w-96 h-96",
  top = "top-10",
  left = "left-10",
  opacity = "opacity-40",
  blur = "blur-[120px]",
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute ${top} ${left} ${size} ${color} ${opacity} ${blur} pointer-events-none -z-10 rounded-full`}
    />
  );
}
