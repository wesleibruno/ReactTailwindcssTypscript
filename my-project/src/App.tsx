import { TestimonialItem } from "./components/TestimonialItem";

function App() {
  return (
    <div className="p-10">
      <TestimonialItem />

      <a className="block shadown bg-green-600 text-white text-center p-4 mt-5 rounded-xl 
      hover:bg-green-500" 
      href="https://www.linkedin.com/in/wesleibruno/">
        Acessar meu perfil
      </a>
    </div>
  );
}

export default App;
