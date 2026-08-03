import Image from "next/image";

const photos = [
  { src: "/images/invisible-grill.jpg", title: "Invisible Grill", className: "gallery-large" },
  { src: "/images/bird-net.jpg", title: "Bird Net", className: "" },
  { src: "/images/grass.jpg", title: "Artificial Grass", className: "" },
  { src: "/images/work1.jpg", title: "Balcony Net", className: "" },
  { src: "/images/child-safety.jpg", title: "Child Safety", className: "" },
  { src: "/images/work3.jpg", title: "Completed Project", className: "gallery-wide" },
];

export function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading gallery-heading"><span className="eyebrow">Our work</span><h2>Protection, <em>beautifully done.</em></h2><p>A selection of the spaces we help make safer.</p></div>
      <div className="gallery-grid">
        {photos.map((photo) => <figure className={`gallery-item ${photo.className}`} key={photo.title}><Image src={photo.src} alt={photo.title} fill sizes="(max-width: 700px) 100vw, 33vw" /><figcaption><span>Project gallery</span><strong>{photo.title}</strong></figcaption></figure>)}
      </div>
    </section>
  );
}
