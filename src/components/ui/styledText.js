export default function StyledText({ text }) {
  const colonIndex = text.indexOf(":");

  if (colonIndex === -1) {
    return <span>{text}</span>;
  }

  const beforeColon = text.substring(0, colonIndex);
  const afterColon = text.substring(colonIndex);

  return (
    <span>
      <span className="font-bold">{beforeColon}</span>
      <span>{afterColon}</span>
    </span>
  );
}
