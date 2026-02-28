import aboutImage from "../assets/images/about.jpg"
import "../styles/pages.css"

export default function About() {
  return (
    <div className="page page-about">
      <div className="container">
        <h1 className="section-title">About AZAL International</h1>

        {/* IMAGE SECTION */}
        <img
          src={aboutImage}
          alt="About AZAL International"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "30px",
          }}
        />

        <p className="section-desc">
          AZAL International is a leading manufacturer and exporter of luxury
          handcrafted carpets serving hospitality, residential, and commercial
          sectors worldwide.
        </p>

        <h2>Our Vision</h2>
        <p>
          To redefine global flooring standards through timeless craftsmanship,
          innovation, and sustainability.
        </p>

        <h2>Craftsmanship</h2>
        <p>
          Each carpet is handwoven by skilled artisans using ethically sourced
          materials and traditional techniques.
        </p>
      </div>
    </div>
  )
}