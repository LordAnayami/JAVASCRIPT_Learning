import UserGreeting from "./UserGreeting.jsx";
//conditional rending

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true}  username="Mati" />
    </>
    
  );
}

export default App
