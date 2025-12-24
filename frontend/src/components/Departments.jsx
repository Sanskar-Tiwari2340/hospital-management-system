const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
      description: "Comprehensive care for infants, children, and adolescents, focusing on their physical, emotional, and social health.",
      specialists: 12,
      services: ["Well-child visits", "Vaccinations", "Developmental screenings", "Pediatric emergencies"],
      contact: "pediatrics@zeecare.com",
      availability: "24/7 Emergency"
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
      description: "Specialized treatment for musculoskeletal conditions including bones, joints, ligaments, and tendons.",
      specialists: 8,
      services: ["Joint replacement", "Sports medicine", "Fracture care", "Arthroscopic surgery"],
      contact: "orthopedics@zeecare.com",
      availability: "Mon-Fri: 8AM-6PM"
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
      description: "Advanced heart care services including diagnosis, treatment, and prevention of cardiovascular diseases.",
      specialists: 10,
      services: ["Cardiac catheterization", "Echocardiography", "Stress testing", "Heart surgery"],
      contact: "cardiology@zeecare.com",
      availability: "24/7 Emergency"
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      description: "Expert care for disorders of the nervous system including brain, spinal cord, and peripheral nerves.",
      specialists: 6,
      services: ["EEG testing", "Neurological exams", "Stroke care", "Epilepsy management"],
      contact: "neurology@zeecare.com",
      availability: "Mon-Fri: 9AM-5PM"
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
      description: "Comprehensive cancer care with advanced treatments, supportive care, and survivorship programs.",
      specialists: 9,
      services: ["Chemotherapy", "Radiation therapy", "Cancer screening", "Palliative care"],
      contact: "oncology@zeecare.com",
      availability: "Mon-Sat: 8AM-8PM"
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
      description: "State-of-the-art imaging services using X-rays, MRI, CT scans, and ultrasound for accurate diagnosis.",
      specialists: 7,
      services: ["MRI scanning", "CT imaging", "X-ray services", "Ultrasound"],
      contact: "radiology@zeecare.com",
      availability: "Mon-Fri: 7AM-9PM"
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
      description: "Rehabilitation services to restore movement and function, reduce pain, and prevent disability.",
      specialists: 15,
      services: ["Manual therapy", "Exercise programs", "Pain management", "Sports rehab"],
      contact: "therapy@zeecare.com",
      availability: "Mon-Sat: 6AM-8PM"
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
      description: "Complete skin care including treatment of skin conditions, cosmetic procedures, and skin cancer screening.",
      specialists: 5,
      services: ["Acne treatment", "Skin cancer screening", "Cosmetic procedures", "Dermatologic surgery"],
      contact: "dermatology@zeecare.com",
      availability: "Tue-Sat: 9AM-6PM"
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
      description: "Specialized care for ear, nose, and throat disorders, including hearing and balance issues.",
      specialists: 4,
      services: ["Hearing tests", "Sinus surgery", "Voice therapy", "Allergy treatment"],
      contact: "ent@zeecare.com",
      availability: "Mon-Fri: 8AM-5PM"
    },
  ];

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <div className="departments-grid">
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <img src={depart.imageUrl} alt="Department" />
                <div className="depart-name">{depart.name}</div>
                <div className="depart-description">{depart.description}</div>
                <div className="depart-details">
                  <div className="detail-item">
                    <span className="detail-label">Specialists:</span>
                    <span className="detail-value">{depart.specialists}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Key Services:</span>
                    <ul className="services-list">
                      {depart.services.slice(0, 2).map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Contact:</span>
                    <span className="detail-value">{depart.contact}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Hours:</span>
                    <span className="detail-value">{depart.availability}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Departments;
