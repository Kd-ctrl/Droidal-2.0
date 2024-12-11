import React, { useState, useEffect, useRef } from 'react';
// import { Cpu, Zap, Workflow, Watch } from 'lucide-react';
import "../styles/LandingPage.css";
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';


const LottieAnimation = ({ position, isVisible }) => {
  return (
    <div
      style={{
        position: "absolute",
        display: isVisible ? "block" : "none",
        top: position.top,
        left: position.left,
        transform: position.transform || "none",
        zIndex: 10,
        width: "50%",  // Set the width of the container to 50%
        height: "50%", // Set the height of the container to 50%
      }}
    >
      <dotlottie-player
        src="https://lottie.host/ef9f4561-6fb7-4e6d-a999-557fd79e6f08/1aTe2vQKbH.lottie"
        background="transparent"
        speed="1"
        style={{
          width: "90%",  // Fill the container's width
          height: "90%", // Fill the container's height
        }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};


const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * (canvas.height - 30) + 30;  // Start particles 30px below the top
        this.radius = Math.random() * 2.5 + 1; // Increased size
        this.speedX = (Math.random() - 0.5) * 1; // Increased speed
        this.speedY = (Math.random() - 0.5) * 1; // Increased speed
        this.color = `rgba(100, 149, 237, ${Math.random() * 0.6 + 0.3})`; // More opaque, cornflower blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around the canvas
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 30 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray = [];
    const numberOfParticles = 200; // Increased number of particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between close particles
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 150})`; // More visible lines
            ctx.lineWidth = 1; // Increased line width
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none" 
      style={{ backgroundColor: '#fff' }} // Slightly lighter background
    />
  );
};

const RoboticLandingPage = () => {
  const [animate, setAnimate] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // For Lottie Animations
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const positions = [
    
    { top: "50%", left: "53%", transform: "translate(-50%, -50%)" }, // Center
    { top: "9%", left: "60%", transform: "translateY(-50%)" }, // Top Right Corner
    { top: "81%", left: "-15%", transform: "translateY(-50%)" }, // Bottom Left
    { top: "10%", left: "90%", transform: "translateX(-50%)" }, // Top Right
    { top: "50%", left: "-15%", transform: "translateY(-50%)" }, // Center Left
    { top: "9%", left: "53%", transform: "translateX(-50%)" }, // Top Center
    { top: "50%", left: "60%", transform: "translateY(-50%)" }, // Center Right
    { top: "82%", left: "70%", transform: "translateY(-50%)" }, // Bottom Right

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation(prev => (prev + 1) % 7); // Cycle through animations
    }, 2900); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);



  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="h-screen text-gray-900 flex flex-col overflow-hidden relative">

{showLogin ? <LoginPage /> : null}
      {/* Animated Background */}
      <AnimatedBackground />

      <header className="relative z-10 p-4">
        <nav className="flex justify-between items-center container mx-auto">
          <div className="flex items-center space-x-3">
            <img src="Droidal-Colour.png" alt="Droidal" className="logo" />
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-end items-center container mx-auto px-4 relative z-10">
  {/* Loop through LottieAnimations */}
  {positions.map((position, index) => (
    <LottieAnimation 
      key={index} 
      position={position} 
      isVisible={index === currentAnimation} 
    />
  ))}

  {/* Text and Button at the bottom */}
  <div className="text-center mb-0"
  style={{ marginTop: '37%' }} 
  > {/* Margin bottom for spacing */}
    <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
      Empower Your Workflow with Intelligent Automation
    </h2>
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white py-1 rounded-lg transition-all transform hover:scale-105 mt-6"
      style={{ width: '120px' }}
      onClick={handleGetStartedClick}
    >
      Get Started
    </button>
  </div>
</main>


      <footer className="relative z-10 p-0 text-right text-sm text-gray-700">
        © 2024 Droidal. All Rights Reserved.
      </footer>
    </div>
  );
};

export default RoboticLandingPage;