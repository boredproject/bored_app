import React, { useState } from "react";

interface LoginFormProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  toggleRegisterView: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpen, toggleDropdown, toggleRegisterView }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Faites quelque chose avec la réponse, par exemple, stockez le token JWT
        // Redirigez ou mettez à jour l'état de l'application
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Une erreur est survenue lors de la connexion.");
      }
    } catch (error) {
      setError("Une erreur est survenue lors de la connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (

      <div className="absolute z-10 w-80 flex flex-col right-0 bg-zinc-900 p-4 shadow-md shadow-indigo-800 border-4 border-indigo-800/100">
        <p className="flex flex-row text-3xl font-bold">
          BO<span className="text-[#5E2BFF]">RED</span>
          <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </p>
        <svg
            className="cursor transition-transform transform-gpu active:scale-150 absolute top-5 right-2 mt-2 mr-2"
            width="28"
            height="28"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleDropdown}
        >
          <path
              d={
                isOpen
                    ? "M7 7C6.0375 7 5.21354 6.65729 4.52812 5.97187C3.84271 5.28646 3.5 4.4625 3.5 3.5C3.5 2.5375 3.84271 1.71354 4.52812 1.02813C5.21354 0.342708 6.0375 0 7 0C7.9625 0 8.78646 0.342708 9.47187 1.02813C10.1573 1.71354 10.5 2.5375 10.5 3.5C10.5 4.4625 10.1573 5.28646 9.47187 5.97187C8.78646 6.65729 7.9625 7 7 7ZM0 14V11.55C0 11.0542 0.12775 10.5983 0.38325 10.1824C0.63875 9.76646 0.977666 9.44942 1.4 9.23125C2.30417 8.77917 3.22292 8.43996 4.15625 8.21363C5.08958 7.98729 6.0375 7.87442 7 7.875C7.9625 7.875 8.91042 7.98817 9.84375 8.2145C10.7771 8.44083 11.6958 8.77975 12.6 9.23125C13.0229 9.45 13.3621 9.76733 13.6176 10.1832C13.8731 10.5992 14.0006 11.0548 14 11.55V14H0Z"
                    : "M7 7C6.0375 7 5.21354 6.65729 4.52812 5.97187C3.84271 5.28646 3.5 4.4625 3.5 3.5C3.5 2.5375 3.84271 1.71354 4.52812 1.02813C5.21354 0.342708 6.0375 0 7 0C7.9625 0 8.78646 0.342708 9.47187 1.02813C10.1573 1.71354 10.5 2.5375 10.5 3.5C10.5 4.4625 10.1573 5.28646 9.47187 5.97187C8.78646 6.65729 7.9625 7 7 7Z"
              }
              fill="white"
          />
        </svg>

        <p className="text-xs mb-6">Login/Register</p>





      <form
                    onSubmit={handleSubmit}>
        <input  className="flex col-auto justify-between items-center border-2 border-indigo-800/100 mb-4 text-sm font-light text-black"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nom d'utilisateur"
        />
        <input className="flex col-auto justify-between items-center border-2 border-indigo-800/100 mb-4 text-sm font-light text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
        />
        <div className="flex justify-between items-center">

        </div>
        <button className="bg-indigo-800 text-white rounded-lg px-4 py-2 font-semibold" type="submit" disabled={loading}>

          {loading ? 'Chargement...' : 'Connexion'}
        </button>
        {error && <p>{error}</p>}

      </form>
        <button onClick={() => toggleRegisterView && toggleRegisterView()} className="text-white">
          Register
        </button>

      </div>
  );
};

export default LoginForm;
