import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/form.png"}
      />
      <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>How to Book Your Appointment</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Step 1: Fill the Form</h3>
            <p>Provide your personal details, select a department and doctor, and choose your preferred appointment date.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Step 2: Confirmation</h3>
            <p>After submitting the form, you will receive a confirmation message. Our team will contact you to confirm the appointment.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#271776ca" }}>Step 3: Visit the Hospital</h3>
            <p>Please arrive at the hospital 15 minutes before your scheduled time with any relevant medical records.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Important Information</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>Please bring a valid ID and your insurance card to your appointment.</li>
          <li>If you are a new patient, please arrive 20 minutes early to complete registration forms.</li>
          <li>Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.</li>
          <li>For emergency situations, please call 911 or visit our Emergency Department immediately.</li>
          <li>Bring any relevant medical records or test results from other clinics.</li>
        </ul>
      </div>
      <div className="container" style={{ textAlign: "center", marginBottom: "50px", backgroundColor: "#f0f4f8", padding: "30px", borderRadius: "10px" }}>
        <h3 style={{ color: "#271776ca", marginBottom: "10px" }}>Need Assistance?</h3>
        <p style={{ fontSize: "1.1rem" }}>
          If you are having trouble booking an appointment online, please call our appointment line at <strong>999-999-9989</strong> or email us at <strong>zeecare@gmail.com</strong>.
        </p>
      </div>
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
