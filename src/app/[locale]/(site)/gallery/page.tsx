export default function GalleryPage() {
  return (
    <div>
      <GalleryGrid />
    </div>
  );
}

function GalleryGrid() {
  return (
    <div>
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

function GalleryItem() {
  return <div>GalleryItem</div>;
}
