export default function Contact() {
  return (
    <div className="container">
      <h1 className="section-title">Contact Us</h1>

      <p className="section-desc">
        Reach out for inquiries, collaborations, or export partnerships.
      </p>

      <form style={{ maxWidth: 500 }}>
        <input placeholder="Name" style={{ padding: 12, width: "100%", marginBottom: 15 }} />
        <input placeholder="Email" style={{ padding: 12, width: "100%", marginBottom: 15 }} />
        <textarea placeholder="Message" style={{ padding: 12, width: "100%", marginBottom: 15 }} />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}