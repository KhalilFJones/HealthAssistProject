import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Health Assist, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Section 1 – About Who You Are"
          description="Health Assist is a forward-thinking healthcare organization dedicated to providing top-tier medical services through a user-friendly online platform. Our mission is to make healthcare more accessible and efficient by offering a comprehensive suite of tools and resources for managing your health and wellness. Our website features an intuitive interface where users can easily access detailed profiles of our specialist doctors, schedule appointments, and receive personalized health information. With a commitment to innovation and excellence, Health Assist strives to enhance patient care and streamline healthcare management through cutting-edge technology and a user-centered approach."
        />

        <SolutionStep
          title="Section 2 – Project Description and Why You Chose This Project"
          description="For our class project, we have developed Health Assist, a comprehensive health and doctor website designed to facilitate access to healthcare services. The core features of the website include detailed doctor profiles, online consultations, appointment scheduling, and personalized health advice.

We chose this project because access to quality healthcare is a fundamental need, and many people face challenges in finding reliable medical information and services. By creating Health Assist, we aim to bridge this gap by providing an accessible and efficient platform for managing health and wellness. Additionally, this project allowed us to integrate various technologies and demonstrate our skills in web development, making it an excellent capstone for our studies."
        />

        <SolutionStep
          title="Section 3 – Description of Technology Used for Your Site"
          description="Our Health Assist website utilizes a modern tech stack that combines robust backend services with a dynamic and responsive frontend. Here are the key technologies we used:

Frontend:

React: For building the user interface, managing the state, and ensuring a seamless user experience.
CSS: For styling and creating a consistent theme across the website.
Google Maps API: To display the location of Emory University in our doctor profile section.
Backend:

Express.js: To handle server-side logic, routing, and API endpoints.
Node.js: For executing JavaScript on the server and managing asynchronous operations.
MongoDB: For database management, storing user data, doctor profiles, appointment schedules, and other relevant information.
Additional Libraries and Tools:

Axios: For making HTTP requests from the frontend to the backend.
Mongoose: For object data modeling and working with MongoDB.
JWT (JSON Web Tokens): For secure authentication and managing user sessions.
AJAX: For implementing special features that require asynchronous data loading and dynamic content updates without reloading the page."
        />

        <SolutionStep
          title="Section 4 – Project Description and Why You Chose This Project"
          description="Throughout this course, I have gained invaluable insights and practical skills in web development. Here are some of the key learnings:

Full-Stack Development: I learned how to build and integrate both frontend and backend components, creating a cohesive and functional web application.
React: I gained a deep understanding of React, including component-based architecture, state management, and the use of hooks for managing side effects.
Backend Technologies: I became proficient in using Express.js for server-side logic and MongoDB for database management. I also learned how to create RESTful APIs and handle server-client communication.
Authentication and Security: I learned the importance of secure authentication practices using JWT and how to protect sensitive user data.
AJAX: I learned how to implement AJAX for special features, enabling asynchronous data loading and enhancing the user experience with dynamic content updates.
Project Management: I gained experience in planning, designing, and implementing a complex project, from initial concept to final deployment.
Problem-Solving: I enhanced my problem-solving skills by debugging code, optimizing performance, and ensuring the website functions correctly under various scenarios.
Overall, this class has equipped me with the technical skills and knowledge needed to pursue a career in web development and tackle real-world challenges in creating functional and user-friendly web applications."
        />
      </div>
    </div>
  );
}

export default About;
