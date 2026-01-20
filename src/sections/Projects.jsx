import Reveal from '../components/Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section container section-bg">
      <h2 className="section-title"><Reveal>Projects</Reveal></h2>
      <div className="mix-timeline projects">
        <Reveal className="t-item">
          <div className="t-date">Fall 2025</div>
          <div className="t-card">
            <h3>Job Tracking Web Application (MERN Stack)</h3>
            <p className="stack">MongoDB • Express.js • React • Node.js • Vite • JWT • Cloudinary • REST APIs</p>
            <ul>
              <li>Developed a scalable MERN-stack job tracking platform enabling users to manage applications, update profiles, and view analytics with secure JWT-based authentication and authorization.</li>
              <li>Built optimized Express.js + Mongoose REST APIs, leveraging aggregation pipelines to improve data retrieval performance by 45% on large job datasets.</li>
              <li>Designed an interactive React (Vite) dashboard with filtering, sorting, and analytics visualizations using Axios and Recharts, delivering a responsive, cross-device user experience.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/Job-Tracking-Web-Application-MERN-" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="t-item">
          <div className="t-date">Fall 2025</div>
          <div className="t-card">
            <h3>Diabetes Prediction Chatbot (ML Deployment + LLM Integration)</h3>
            <p className="stack">Python • Scikit-learn • XGBoost • Flask • JavaScript • Tableau • LLMs</p>
            <ul>
              <li>Engineered an ML-powered chatbot using Python and Flask to predict diabetes risk from 250K+ records, improving minority-class recall by 35% through SMOTE + ENN class balancing.</li>
              <li>Trained and optimized XGBoost and Random Forest models, achieving &gt;85% F1 score; automated feature selection reduced dimensionality by 40% without accuracy loss.</li>
              <li>Developed an interactive web interface and Tableau dashboard for personalized risk insights, integrating LLM-based conversational responses for explainable predictions.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/Diabetes-Prediction-Chatbot" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="t-item">
          <div className="t-date">Spring 2025</div>
          <div className="t-card">
            <h3>AI-Powered Chatbot Web Application</h3>
            <p className="stack">JavaScript • HTML5 • CSS3 • Google Gemini API • REST APIs • UX Design • DOM Manipulation</p>
            <ul>
              <li>Built a fully responsive AI chatbot interface using vanilla JavaScript, HTML, and CSS, optimized for cross-device compatibility and smooth user interaction.</li>
              <li>Integrated Google Gemini 1.5 Flash API to support real-time text and image inputs using base64 encoding, enabling dynamic and context-aware responses.</li>
              <li>Implemented efficient DOM-based rendering, animated loading indicators, and chat history management to deliver a high-performance user experience.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/AI-Powered-Chatbot-Web-Application" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="t-item">
          <div className="t-date">Sep–Dec 2024</div>
          <div className="t-card">
            <h3>Book Recommendation &amp; User Analytics System</h3>
            <p className="stack">Python • Pandas • Apache Spark • Machine Learning • K-Means • Collaborative Filtering</p>
            <ul>
              <li>Built a collaborative filtering recommendation system on 1M+ ratings across 270K+ books, delivering personalized top-rated recommendations.</li>
              <li>Performed user segmentation using K-Means, Hierarchical Clustering, and DBSCAN on 10,000+ users, improving projected engagement by 25%.</li>
              <li>Trained Linear, Logistic, and Decision Tree models to predict user demographics, achieving 98% accuracy and reducing RMSE by 50% using K-fold cross-validation.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/Book-Recommendation-and-User-Analytics-System" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="t-item">
          <div className="t-date">Oct–Nov 2024</div>
          <div className="t-card">
            <h3>IPL Match Analytics &amp; Data Visualization (Tableau)</h3>
            <p className="stack">Tableau • Data Cleaning • Interactive Dashboards • Performance Optimization</p>
            <ul>
              <li>Developed a large-scale IPL analytics dashboard using 243,817 ball-by-ball records and 1,024 match summaries, creating 10+ interactive visualizations.</li>
              <li>Reduced missing data impact from 100% to 0% and improved analysis efficiency by 60% through preprocessing and optimization.</li>
              <li>Enhanced dashboard clarity by optimizing data-ink ratio from 80% to 100% and implementing filters, drill-downs, and calculated fields, reducing analysis time by 40%.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/IPL-Match-Analytics-Data-Visualization-using-Tableau" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="t-item">
          <div className="t-date">Fall 2024</div>
          <div className="t-card">
            <h3>Taxi Booking App Database System (Uber/Lyft Style)</h3>
            <p className="stack">SQL Server • SQL • Database Design • Stored Procedures • Triggers • Views</p>
            <ul>
              <li>Designed a normalized relational database schema for a taxi booking platform managing users, drivers, trips, and payments, improving query efficiency by 40%.</li>
              <li>Implemented stored procedures, triggers, and views to automate auditing, monitor operations, and generate insights on driver performance and user activity.</li>
              <li>Built user-defined functions (UDFs) to compute metrics such as average driver ratings and trip statistics, enabling real-time analytics and reporting.</li>
            </ul>
            <div className="project-links">
              <a className="btn outline small ext" href="https://github.com/raviteja-1301/Taxi-Booking-App-Database-System-Uber-Lyft-" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
