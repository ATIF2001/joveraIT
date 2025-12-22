import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Jovera404({ lang = 'en' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef(null);

  // Translations
  const translations = {
    en: {
      title: 'Lost in the',
      titleHighlight: 'Void',
      description: "The page you're searching for has ventured into uncharted territory. Let's navigate you back to familiar ground.",
      button: 'Back to Homepage'
    },
    ar: {
      title: 'ضائع في',
      titleHighlight: 'الفراغ',
      description: 'الصفحة التي تبحث عنها قد غامرت في أراضٍ مجهولة. دعنا نعيدك إلى أرض مألوفة.',
      button: 'العودة إلى الصفحة الرئيسية'
    }
  };

  const t = translations[lang] || translations.en;
  const isRTL = lang !== 'en';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  // 3D Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.z -= 2;
        if (this.z <= 0) {
          this.reset();
          this.z = 1500;
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1500 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1500 / this.z) + canvas.height / 2;
        const size = this.size * (1500 / this.z);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, 'rgba(215, 170, 71, 0.8)');
        gradient.addColorStop(1, 'rgba(113, 89, 37, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 3D Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 border border-yellow-600 opacity-10 rounded-full"
          style={{
            top: '20%',
            left: '10%',
            transform: `rotateX(60deg) rotateZ(45deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            borderColor: '#D7AA47'
          }}
        />
        <div 
          className="absolute w-64 h-64 border border-yellow-800 opacity-20"
          style={{
            bottom: '20%',
            right: '15%',
            transform: `rotateY(45deg) rotateZ(30deg) translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            borderColor: '#715925'
          }}
        />
        <div 
          className="absolute w-80 h-80 border-2 border-yellow-600 opacity-5 rounded-lg"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotateX(45deg) rotateY(45deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
            borderColor: '#D7AA47'
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, rgba(215, 170, 71, 0.15) 0%, transparent 60%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Glitch 404 */}
        <div className="relative mb-8">
          <h1 
            className={`text-9xl md:text-[12rem] font-black leading-none ${glitchActive ? 'animate-pulse' : ''}`}
            style={{
              background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: glitchActive ? 'drop-shadow(0 0 30px rgba(215, 170, 71, 0.6))' : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            404
          </h1>
          {glitchActive && (
            <>
              <h1 
                className="absolute inset-0 text-9xl md:text-[12rem] font-black leading-none opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  transform: 'translate(-3px, -3px)',
                  filter: 'blur(2px)'
                }}
              >
                404
              </h1>
              <h1 
                className="absolute inset-0 text-9xl md:text-[12rem] font-black leading-none opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  transform: 'translate(3px, 3px)',
                  filter: 'blur(2px)'
                }}
              >
                404
              </h1>
            </>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.title} <span style={{
              background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/"
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          style={{
            background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
            color: '#000',
            boxShadow: '0 10px 40px rgba(215, 170, 71, 0.3)'
          }}
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          {!isRTL ? (
            <>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span>{t.button}</span>
            </>
          ) : (
            <>
              <span>{t.button}</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-2 transition-transform rotate-180" />
            </>
          )}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          />
        </a>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: '0 0 10px rgba(215, 170, 71, 0.5)'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}