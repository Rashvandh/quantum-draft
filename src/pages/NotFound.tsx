import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-quantum-blue/10 via-background to-quantum-cyan/10">
      <div className="text-center p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-quantum-cyan/10">
        <h1 className="text-7xl font-extrabold text-quantum-cyan mb-4 drop-shadow">404</h1>
        <p className="text-2xl text-muted-foreground mb-6 font-semibold">Oops! Page not found</p>
        <Button size="lg" className="bg-gradient-accent hover:shadow-glow transition-all duration-300" onClick={() => navigate("/")}>Return to Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
