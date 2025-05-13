export default function Card({ title, description, url, imageUrl }) {
  return (
    <div className="card">
      <div className="card-image"> {imageUrl && <img src={imageUrl} alt="{title}" />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" className="btn"> Resumen </a>
    </div>
  )
}