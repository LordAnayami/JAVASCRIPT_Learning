import profilePic from './assets/images.jpg'

function Card() {
    return(
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Mateusz Wenta</h2>
        <p className="card-text">I make websites and play wideo games</p>
      </div>
    );
  }
  
  export default Card
  