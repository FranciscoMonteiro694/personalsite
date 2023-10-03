import "./Home.css";
import profileImage from "../assets/profile-pic.png";

const Home = () => {
  return (
    <section id="home">
      <div className="general-info-container">
        <div className="profile-image-container">
          <img src={profileImage} className="profile-image" alt="My Profile" />
        </div>

        <p>Hello</p>
        <h1>I'm Francisco Monteiro</h1>
        <p>Fullstack Engineer @ Coimbra, Portugal 🇵🇹</p>
      </div>
    </section>
  );
};

export default Home;
