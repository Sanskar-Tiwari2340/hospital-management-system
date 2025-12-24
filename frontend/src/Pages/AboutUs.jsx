import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Our Core Values</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Compassion</h3>
            <p>We treat every patient with kindness, empathy, and respect, ensuring they feel heard and cared for throughout their journey.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Excellence</h3>
            <p>We strive for the highest standards in medical care, continuously improving our skills and technology to deliver the best outcomes.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Integrity</h3>
            <p>We operate with honesty and transparency, building trust with our patients and the community we serve.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "50px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Philosophy</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
          We believe that healthcare is a fundamental human right. Our philosophy is rooted in the belief that every individual deserves access to high-quality medical care delivered with compassion and dignity. We are committed to bridging the gap between advanced medical science and the human touch, ensuring that our patients not only receive the best treatment but also feel supported and understood.
        </p>
      </div>
      <div className="container" style={{ marginBottom: "50px", display: "flex", justifyContent: "space-around", backgroundColor: "#f8f9fa", padding: "40px", borderRadius: "10px", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ textAlign: "center", flex: "1 1 150px" }}>
          <h2 style={{ color: "#271776ca", fontSize: "2.5rem", marginBottom: "10px" }}>1,500+</h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>Happy Patients</p>
        </div>
        <div style={{ textAlign: "center", flex: "1 1 150px" }}>
          <h2 style={{ color: "#271776ca", fontSize: "2.5rem", marginBottom: "10px" }}>50+</h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>Expert Doctors</p>
        </div>
        <div style={{ textAlign: "center", flex: "1 1 150px" }}>
          <h2 style={{ color: "#271776ca", fontSize: "2.5rem", marginBottom: "10px" }}>10+</h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>Years Experience</p>
        </div>
      </div>
      <MessageForm />
    </>
  );
};

export default AboutUs;
