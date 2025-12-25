import React, { useState, useEffect, useRef } from 'react';
import { Hammer, Sparkles, Zap } from 'lucide-react';

export default function UnderDevelopment({ lang = 'en' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [glowActive, setGlowActive] = useState(false);
  const canvasRef = useRef(null);

  // Translations
  const translations = {
    en: {
      title: 'Crafting',
      titleHighlight: 'Excellence',
      subtitle: 'Under Development',
      description: "We're building something extraordinary. Our team is working tirelessly to create an experience that will redefine expectations.",
      progress: 'Development Progress',
      coming: 'Coming Soon'
    },
    ar: {
      title: 'نصنع',
      titleHighlight: 'التميز',
      subtitle: 'قيد التطوير',
      description: 'نحن نبني شيئًا استثنائيًا. فريقنا يعمل بلا كلل لإنشاء تجربة ستعيد تعريف التوقعات.',
      progress: 'تقدم التطوير',
      coming: 'قريباً'
    }
  };

  const t = translations[lang] || translations.en;
  const isRTL = lang !== 'en';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const glowInterval = setInterval(() => {
      setGlowActive(true);
      setTimeout(() => setGlowActive(false), 300);
    }, 2000);

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 75) return 0;
        return prev + 1;
      });
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glowInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;

    class Particle {
      constructor() {
        this.reset();
        this.life = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 2000;
        this.size = Math.random() * 3 + 1;
        this.speedZ = Math.random() * 3 + 1;
      }

      update() {
        this.z -= this.speedZ;
        this.life += 0.01;
        
        if (this.z <= 0) {
          this.reset();
          this.z = 2000;
          this.life = 0;
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (2000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (2000 / this.z) + canvas.height / 2;
        const size = this.size * (2000 / this.z);

        const opacity = Math.sin(this.life) * 0.5 + 0.5;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, `rgba(215, 170, 71, ${opacity * 0.9})`);
        gradient.addColorStop(0.5, `rgba(215, 170, 71, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(113, 89, 37, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines
        particles.forEach(otherParticle => {
          const dx = x - ((otherParticle.x - canvas.width / 2) * (2000 / otherParticle.z) + canvas.width / 2);
          const dy = y - ((otherParticle.y - canvas.height / 2) * (2000 / otherParticle.z) + canvas.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(215, 170, 71, ${(1 - distance / 100) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
              (otherParticle.x - canvas.width / 2) * (2000 / otherParticle.z) + canvas.width / 2,
              (otherParticle.y - canvas.height / 2) * (2000 / otherParticle.z) + canvas.height / 2
            );
            ctx.stroke();
          }
        });
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
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
    <div className="p-32 relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 3D Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] border-2 border-yellow-600 opacity-10"
          style={{
            top: '10%',
            left: '5%',
            transform: `rotateX(60deg) rotateZ(${45 + mousePosition.x * 0.5}deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            borderColor: '#D7AA47',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        />
        <div 
          className="absolute w-96 h-96 border-2 border-yellow-800 opacity-15 rounded-full"
          style={{
            bottom: '15%',
            right: '10%',
            transform: `rotateY(${45 + mousePosition.y * 0.5}deg) rotateZ(${30 + mousePosition.x * 0.3}deg) translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            borderColor: '#715925'
          }}
        />
        <div 
          className="absolute w-72 h-72 border border-yellow-600 opacity-10"
          style={{
            top: '60%',
            left: '70%',
            transform: `translate(-50%, -50%) rotateX(${45 + mousePosition.y * 0.3}deg) rotateY(${45 + mousePosition.x * 0.3}deg)`,
            transition: 'transform 0.5s ease-out',
            borderColor: '#D7AA47',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, rgba(215, 170, 71, 0.2) 0%, transparent 70%)`,
          transition: 'background 0.5s ease-out'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Icon with Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div 
              className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-300 ${glowActive ? 'opacity-100' : 'opacity-50'}`}
              style={{
                background: 'radial-gradient(circle, rgba(215, 170, 71, 0.4) 0%, transparent 70%)',
                width: '200px',
                height: '200px',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%'
              }}
            />
            <Hammer 
              className="w-24 h-24 relative"
              style={{
                color: '#D7AA47',
                filter: `drop-shadow(0 0 ${glowActive ? '30' : '15'}px rgba(215, 170, 71, 0.8))`,
                animation: 'hammer-swing 2s ease-in-out infinite',
                transformOrigin: 'bottom right'
              }}
            />
            <Sparkles 
              className="absolute -top-4 -right-4 w-8 h-8"
              style={{
                color: '#D7AA47',
                animation: 'sparkle 1.5s ease-in-out infinite'
              }}
            />
            <Zap 
              className="absolute -bottom-2 -left-2 w-8 h-8"
              style={{
                color: '#715925',
                animation: 'sparkle 1.5s ease-in-out infinite 0.5s'
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-black mb-10">
            {t.title} <span style={{
              background: 'linear-gradient(135deg, #D7AA47 0%, #715925 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(215, 170, 71, 0.3))'
            }}>{t.titleHighlight}</span>
          </h1>
          <div 
            className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider"
            style={{
              background: 'linear-gradient(90deg, rgba(215, 170, 71, 0.2) 0%, rgba(113, 89, 37, 0.2) 100%)',
              border: '1px solid rgba(215, 170, 71, 0.3)'
            }}
          >
            {t.subtitle}
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          {t.description}
        </p>

        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-400">{t.progress}</span>
            <span className="text-sm font-bold" style={{ color: '#D7AA47' }}>{progress}%</span>
          </div>
          <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
                boxShadow: '0 0 20px rgba(215, 170, 71, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg"
          style={{
            background: 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)',
            color: '#000',
            boxShadow: '0 10px 40px rgba(215, 170, 71, 0.4)',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          <span>{t.coming}</span>
          <Sparkles className="w-5 h-5 animate-spin-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full"
              style={{
                width: i === 3 ? '40px' : '20px',
                background: i === 3 ? 'linear-gradient(90deg, #D7AA47 0%, #715925 100%)' : 'rgba(215, 170, 71, 0.3)',
                animation: i === 3 ? 'pulse-bar 2s ease-in-out infinite' : 'none',
                boxShadow: i === 3 ? '0 0 15px rgba(215, 170, 71, 0.6)' : 'none'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hammer-swing {
          0%, 100% { 
            transform: rotate(0deg);
          }
          25% { 
            transform: rotate(-25deg);
          }
          50% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 10px 40px rgba(215, 170, 71, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 15px 60px rgba(215, 170, 71, 0.7);
            transform: scale(1.05);
          }
        }

        @keyframes pulse-bar {
          0%, 100% { 
            transform: scaleX(1);
            opacity: 1;
          }
          50% { 
            transform: scaleX(1.2);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}