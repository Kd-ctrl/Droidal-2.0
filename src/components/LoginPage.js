import React, { useRef, useEffect, useState } from 'react';
// import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Eye, EyeOff, Lock, Mail, User, Phone, Globe, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



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
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `rgba(100, 149, 237, ${Math.random() * 0.6 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
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
    const numberOfParticles = 200;
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

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
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
      style={{ backgroundColor: '#F0F4FF' }}
    />
  );
};

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    
    // Login state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
  
    // Signup state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [country, setCountry] = useState('');
    const [username, setUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log('Login attempt:', { email: loginEmail, password: loginPassword });
    };
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      console.log('Signup attempt:', { 
        firstName, 
        lastName, 
        email: signupEmail, 
        mobileNumber, 
        country, 
        username, 
        password: signupPassword 
      });
    };

    const handleLoginClick = () => {
      // Add any login logic or validations here (if needed)
      navigate('/work-space'); // Redirect to the dashboard
    };
  
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Login/Signup Container */}
        <div
            className={`relative z-10 w-full ${
                isLoginMode ? "max-w-md" : "max-w-lg"
            } p-8 bg-white rounded-xl shadow-2xl border border-blue-100`}
            >
          <div className="flex justify-center items-center mb-6">
            <img src="Droidal-Colour.png" alt="Droidal" className="logo" />
          </div>
          
          {isLoginMode ? (
            // Login Form
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="login-email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div className="relative">
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              {/* Forgot Password */}
              <div className="text-right">
                <a 
                  href="#forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              
              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleLoginClick}
              >
                Login
              </button>
              
              {/* Signup Link */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account? {' '}
                  <button 
                    type="button"
                    onClick={() => setIsLoginMode(false)}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignupSubmit} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
                <div className="relative w-1/2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="First Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>

                <div className="relative w-1/2">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Last Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>
            </div>

            {/* Email and Mobile Number */}
            <div className="flex space-x-4">
                <div className="relative w-1/2">
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type="email"
                    id="signup-email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>

                <div className="relative w-1/2">
                <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                </label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type="tel"
                    id="mobile-number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    placeholder="Enter mobile number"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>
            </div>

            {/* Username and Password */}
            <div className="flex space-x-4">
                <div className="relative w-1/2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                </label>
                <div className="relative">
                    <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Choose a username"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>

                <div className="relative w-1/2">
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    type={showPassword ? "text" : "password"}
                    id="signup-password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                    placeholder="Create a password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                </div>
            </div>

            {/* Signup Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Sign Up
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                    type="button"
                    onClick={() => setIsLoginMode(true)}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                >
                    Login
                </button>
                </p>
            </div>
            </form>

          )}
        </div>
        <footer className="fixed z-10 bottom-0 right-0 p-0 text-sm text-gray-700 w-full sm:w-auto text-right">
      © 2024 Droidal. All Rights Reserved.
    </footer>
      </div>
      
    );
  };

export default LoginPage;