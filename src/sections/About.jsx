import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section container section-bg">
      <h2 className="section-title">
        <Reveal>About</Reveal>
      </h2>
      <div className="mix-timeline">
        <Reveal className="t-item exp">
          <div className="t-date">Professional Summary</div>
          <div className="t-card">
            <h3>Software Engineer</h3>
            <p>
              Software Engineer with 4+ years of experience building cloud-native,
              distributed systems for mission-critical applications. Strong in
              Python, Java, and JavaScript with hands-on expertise in low-latency
              microservices, real-time APIs, and production ML-enabled systems
              using FastAPI, Flask, GraphQL, gRPC, Spark, Airflow, and AWS EKS.
            </p>
          </div>
        </Reveal>
        <Reveal className="t-item exp">
          <div className="t-date">Apr 2025 - Present</div>
          <div className="t-card">
            <h3>Software Engineer - PayPal (CA)</h3>
            <p>
              Building low-latency payment and fraud-risk services with Python,
              FastAPI, GraphQL, gRPC, Kubernetes, and production monitoring.
            </p>
          </div>
        </Reveal>
        <Reveal className="t-item exp">
          <div className="t-date">Aug 2020 - Nov 2023</div>
          <div className="t-card">
            <h3>Software Engineer - Freshworks (India)</h3>
            <p>
              Built scalable backend services and APIs with Python, FastAPI,
              Flask, Node.js, and GraphQL, and deployed microservices on AWS
              with Kubernetes and CI/CD pipelines.
            </p>
          </div>
        </Reveal>
        <Reveal className="t-item edu">
          <div className="t-date">Education</div>
          <div className="t-card">
            <h3>
              Master's in Information Technology - Arizona State University,
              Tempe, AZ
            </h3>
            <p>
              Bachelor's in Electronics and Communication Engineering - Indian
              Institute of Information Technology, TN, India
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
