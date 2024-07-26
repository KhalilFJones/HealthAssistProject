import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health Assist <span className="legal-siteSign">:</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Who Are the Users of Your Site</p>
        <p className="legal-description">
        The primary users of the Health Assist website are:

        Patients: Individuals seeking medical consultation and appointments with healthcare providers.
        Doctors: Healthcare professionals who use the platform to manage their appointment schedules and patient information.
A       Administrators: Staff responsible for managing the overall functionality and user support of the website.
        </p>

        <div className="legal-text-content">
        <p className="legal-title">What Is It That You Want Your Users to Get Out of Using the Site</p>
        <p className="legal-description">
        The goal of the Health Assist website is to provide a seamless and user-friendly platform for booking medical appointments. Specifically:

        For Patients:

        Easy and convenient access to healthcare services.
        Ability to book appointments online without the need for phone calls or visits.
        Access to information about different doctors and their specialties.
        Personalized appointment scheduling based on their preferred time and mode (voice or video call).
        For Doctors:

        An organized and efficient way to manage appointments and patient information.
        Reduced administrative burden, allowing them to focus more on patient care.
        Improved patient engagement and satisfaction.
        For Administrators:

        A streamlined process for managing the website's functionality.
            Efficient handling of user support and maintenance tasks.
            /</p>

        <div className="legal-text-content">
        <p className="legal-title">What Problem Are You Trying to Solve for the Users of the Site</p>
        <p className="legal-description">
The Health Assist website aims to solve several key problems:

For Patients:

Accessibility: Simplifying the process of finding and booking appointments with healthcare providers.
Convenience: Reducing the need for phone calls and in-person visits to schedule appointments.
Efficiency: Allowing patients to quickly find available time slots and book appointments that fit their schedule.
For Doctors:

Time Management: Providing a centralized platform to manage their schedules and reduce the administrative workload.
Patient Communication: Facilitating better communication with patients regarding appointment details and changes.
For Administrators:

Site Management: Offering tools to manage user accounts, appointments, and overall site maintenance efficiently.
        </p>

        <p className="legal-title">What Are the Actions That You Want the Users to Take Once They Have Used Your Site</p>
        <p className="legal-description">
For Patients:

Register and Log In: Create an account and log in to access the booking features.
Book Appointments: Schedule appointments with their preferred doctors at convenient times.
Update Profile: Maintain up-to-date personal and contact information for seamless communication.
For Doctors:

Manage Schedule: Regularly update their availability and manage their appointment calendar.
Review Appointments: Check and prepare for upcoming appointments with patients.
Communicate with Patients: Use the platform to communicate any changes or additional information to patients.
For Administrators:

Monitor Site Activity: Keep track of user activity and site performance to ensure smooth operation.
Provide Support: Address any issues or queries from patients and doctors promptly.
Maintain Data Integrity: Ensure that all user data is secure and accurately maintained.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Health Assist is designed to simplify healthcare access. You can choose
          a specialist, schedule an appointment, and engage in a virtual
          consultation. Our specialists offer personalized advice and treatment
          plans tailored to your needs. Please remember that emergencies require
          immediate medical attention and should be directed to your local
              medical facility.
            </p>
            

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
            </p>
            
        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Health Assist, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with doctors,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 Health Assist. All rights reserved.</p>
      </div>
      </div>
      </div>
      </div>
  );
}

export default LegalDocs;
