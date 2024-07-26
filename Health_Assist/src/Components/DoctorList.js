// src/DoctorList.js
import React, { useState, useEffect } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentSlots, setAppointmentSlots] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors when the component mounts
    fetch('/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const fetchAppointmentSlots = (doctorId) => {
    // Fetch the appointment slots for the selected doctor
    fetch(`/api/doctors/${doctorId}/appointments`)
      .then(response => response.json())
      .then(data => setAppointmentSlots(data))
      .catch(error => console.error('Error fetching appointment slots:', error));
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    fetchAppointmentSlots(doctor.id);
  };

  return (
    <div>
      <h1>Doctors</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id} onClick={() => handleDoctorSelect(doctor)}>
            {doctor.name}
          </li>
        ))}
      </ul>
      {selectedDoctor && (
        <div>
          <h2>Available Appointment Slots for {selectedDoctor.name}</h2>
          <ul>
            {appointmentSlots.map(slot => (
              <li key={slot.id}>{slot.time}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
