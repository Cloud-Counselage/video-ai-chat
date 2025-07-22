export default function VideoPlayer({ src }) {
  return <video src={src} controls className="w-full rounded" />;
}
