import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section container section-bg">
      <h2 className="section-title">
        <Reveal>Experience</Reveal>
      </h2>
      <Reveal className="xcard">
        <h3>Software Engineer - PayPal (CA)</h3>
        <p className="period">Apr 2025 - Present</p>
        <ul>
          <li>
            Designed and optimized low-latency Python (FastAPI) microservices
            for real-time payment events and fraud risk scoring, meeting 80ms
            p99 latency targets.
          </li>
          <li>
            Built scalable feature engineering pipelines with Apache Spark,
            Pandas, and Airflow, improving model retraining efficiency by 25%.
          </li>
          <li>
            Developed NLP-based classification services with scikit-learn and
            transformer models to automate dispute categorization and reduce
            manual review volume by 18%.
          </li>
          <li>
            Modernized Java payment systems with GraphQL APIs and gRPC services
            and integrated Python ML inference using Protocol Buffers and Spring
            Boot.
          </li>
          <li>
            Implemented A/B testing for fraud and risk models and created
            production monitoring dashboards with Prometheus and Grafana.
          </li>
          <li>
            Containerized data and ML inference services with Docker and
            deployed on Kubernetes with Helm for high availability and
            horizontal scalability.
          </li>
        </ul>
      </Reveal>
      <Reveal className="xcard">
        <h3>Software Engineer - Freshworks (India)</h3>
        <p className="period">Aug 2020 - Nov 2023</p>
        <ul>
          <li>
            Orchestrated microservices on AWS using Kubernetes (EKS), EC2, and
            ALB, achieving 99.8% uptime through autoscaling and fault-tolerant
            design.
          </li>
          <li>
            Built CI/CD pipelines with Jenkins and GitHub Actions, reducing
            release cycles by 30% and enabling 22+ zero-downtime deployments
            per week.
          </li>
          <li>
            Designed REST APIs using Flask and FastAPI with OAuth 2.0 and JWT
            authentication, improving scalability by 25% and reducing service
            latency by 20%.
          </li>
          <li>
            Delivered backend functionality with Node.js and GraphQL and
            improved API response times by 30% using PostgreSQL optimization and
            Redis caching.
          </li>
          <li>
            Implemented automated testing with Jest and pytest, achieving 90%+
            test coverage and reducing production defects by 30%.
          </li>
          <li>
            Built responsive interfaces with React, Redux, and TypeScript,
            increasing customer engagement by 12% through improved UX.
          </li>
          <li>
            Contributed in Agile/Scrum workflows, improving team velocity by
            20% and reducing backlog bottlenecks by 40%.
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
