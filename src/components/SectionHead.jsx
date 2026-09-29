// WordPress: template-parts/section-head.php (args: eyebrow, title, text, center)
export default function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section__head${center ? ' section__head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}
