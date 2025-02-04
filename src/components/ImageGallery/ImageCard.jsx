export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
