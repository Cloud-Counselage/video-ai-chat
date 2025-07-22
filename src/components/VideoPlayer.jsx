export default function VideoPlayer({ setVideoUrl }) {
  return (
    <div className="w-full max-w-xl mb-6">
      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          const url = URL.createObjectURL(e.target.files[0])
          setVideoUrl(url)
        }}
        className="mb-2"
      />
    </div>
  )
}
