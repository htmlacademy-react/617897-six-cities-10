import GalleryProps from './gallery.type';

function Gallery(props: GalleryProps): JSX.Element {
  const images = props.images.map((image: string): JSX.Element =>
    (
      <div className="property__image-wrapper" key={image}>
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    )
  );
  return (
    <div className="property__gallery">
      {images}
    </div>
  );
}

export default Gallery;