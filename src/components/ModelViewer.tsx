
import { useEffect, useRef } from 'react';

interface ModelViewerProps {
  className?: string;
}

const ModelViewer = ({ className = '' }: ModelViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // We'll simulate a 3D model with canvas API
    // In a real implementation, this would use Three.js or a similar library
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setDimensions = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);
    
    // Animation variables
    let rotation = 0;
    let hue = 40; // Yellow in HSL
    let animationFrameId: number;
    
    // Draw the tactical scope/crosshair
    const drawTacticalScope = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;
      
      // Rotate
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.6)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.4)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Crosshair lines
      ctx.beginPath();
      ctx.moveTo(-radius, 0);
      ctx.lineTo(radius, 0);
      ctx.moveTo(0, -radius);
      ctx.lineTo(0, radius);
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Targeting marks
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const x1 = Math.cos(angle) * radius;
        const y1 = Math.sin(angle) * radius;
        const x2 = Math.cos(angle) * (radius * 0.9);
        const y2 = Math.sin(angle) * (radius * 0.9);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Digital readout text
      ctx.rotate(-rotation); // Keep text upright
      ctx.font = '12px monospace';
      ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
      ctx.textAlign = 'center';
      ctx.fillText('TACTICAL SYSTEM ONLINE', 0, radius + 20);
      ctx.fillText(`ROTATION: ${Math.round(rotation * (180 / Math.PI))}°`, 0, radius + 40);
      
      ctx.restore();
      
      // Update for next frame
      rotation += 0.005;
      hue = (hue + 0.1) % 360;
      
      animationFrameId = requestAnimationFrame(drawTacticalScope);
    };
    
    drawTacticalScope();
    
    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default ModelViewer;
