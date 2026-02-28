import heroImage from "../assets/images/hero.jpg"

export default function Home() {
  return (
    <section
      style={{
        height: "80vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ padding: "60px", maxWidth: "600px" }}>
        <h1>Crafting Luxury Carpets for the World</h1>
        <p>
          Blending heritage craftsmanship with modern design excellence
        </p>
        <button className="btn">Explore Collections</button>
      </div>
    </section>
  )
}