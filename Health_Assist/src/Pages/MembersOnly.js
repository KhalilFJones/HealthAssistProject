import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import '../Styles/MembersOnly.css'; // Import the CSS file

//UserName: demouser and password: ThisIsForWPClass

const MembersOnly = () => {
  const { auth, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (login(username, password)) {
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  if (auth) {
    return (
      <div className="members-section">
        <h1 className="members-title">Welcome to the Members-Only Area!</h1>
        <p className="members-description">
          As a valued member of Health Assist, you gain exclusive access to a range of premium benefits designed to enhance your healthcare experience. Our membership program is crafted to provide you with top-tier services and personalized support.
        </p>
        
        <h2 className="members-subtitle">Membership Benefits</h2>
        <ul className="members-benefits">
          <li>Priority Access: Skip the line and enjoy expedited appointments with our specialists.</li>
          <li>Exclusive Content: Gain access to premium health resources, articles, and videos tailored to your needs.</li>
          <li>Special Discounts: Enjoy exclusive discounts on services and products available only to members.</li>
          <li>24/7 Support: Receive round-the-clock support from our dedicated team, available to answer your queries and provide assistance.</li>
        </ul>
        
        <h2 className="members-subtitle">Membership Cost</h2>
        <p className="members-cost">
          Our membership is available for just $99 per year. This one-time fee grants you access to all our premium services and benefits. We believe in providing exceptional value and outstanding support to ensure that your health and wellness needs are met with the highest level of care.
        </p>

        <h2 className="members-subtitle">How to Join</h2>
        <p className="members-join">
          Joining is easy! Simply sign in with your credentials to access the members-only content. If you are not yet a member, please contact our support team to learn more about how you can enroll in our membership program.
        </p>

        <button className="members-logout-button" onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="members-section">
      <h1 className="members-title">Login to Access Members-Only Content</h1>
      <div className="members-login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="members-error">{error}</p>}
      </div>
    </div>
  );
};

export default MembersOnly;