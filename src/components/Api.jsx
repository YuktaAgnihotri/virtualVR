import { useState, useEffect } from "react";
import { api } from "./AuthContext";
import Footer from "./footer";
import th from '../assets/th.webp';

export default function Api() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter , setFilter]  = useState("all");

  const mystyle = {
    width: "10vw",
    height: "5vh",
    backgroundColor: "rgb(255, 255, 255)",
    color: "black",
    borderRadius: "10px" ,
    margin: "5px"
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await api.get('/api/prompts');
        setPrompts(response.data);
      } catch (err) {
        console.error("Error fetching prompts:", err);
        setError("Unable to retrieve prompts. Please ensure you are logged in and backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchPrompts();
  }, []);

  const filteredPrompts = filter === "all"
    ? prompts
    : prompts.filter(dat => dat.tags.includes(filter));

  return (
    <>
      <h1 className="text-5xl tracking-wide font-light pb-3 m-10 text-center">Crafted prompts at prompNext</h1>
      <div className="flex align-middle justify-center "> 
        <button style={mystyle} onClick={() => setFilter("all")}>
          All
        </button>
        <button style={mystyle} onClick={() => setFilter("bio")}>
          Bio
        </button>
        <button style={mystyle} onClick={() => setFilter("profile")}>
          Profile
        </button>
        <button style={mystyle} onClick={() => setFilter("repositories")}>
          Repository
        </button>
        <button style={mystyle} onClick={() => setFilter("impact")}>
          Impact
        </button>
        <button style={mystyle} onClick={() => setFilter("funding")}>
          Funding
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 text-xl font-semibold">Loading prompts from secure API...</div>
      ) : error ? (
        <div className="text-center py-20 text-red-400 text-xl font-semibold">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {filteredPrompts.map((dat) => (
            <ul
              key={dat.id}
              className="border-2 p-4 w-full md:w-1/2 lg:w-1/3 rounded-2xl bg-gradient-to-r from-neutral-800 to-purple-900 list-none flex flex-col justify-between min-h-[250px]"
            >
              <li className="w-[80px] mb-2">
                <img src={th} alt="" className="rounded-lg shadow-md" />
              </li>
              <li className="text-2xl font-bold tracking-tighter p-2 text-white">
                {dat.title}
              </li>
              <li className="p-4 text-[16px] text-gray-300 leading-relaxed">
                {dat.prompt}
              </li>
            </ul>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}