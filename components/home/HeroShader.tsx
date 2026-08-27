"use client";

import { useEffect, useRef } from "react";

export default function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    
    // Deep dark Swiss luxury aesthetic with warm amber-gold shimmer
    float t = u_time * 0.12;
    
    float wave1 = sin(uv.x * 2.8 + t + (u_mouse.x / u_resolution.x) * 0.5) * 0.5 + 0.5;
    float wave2 = cos(uv.y * 3.2 - t * 0.6 + (u_mouse.y / u_resolution.y) * 0.5) * 0.5 + 0.5;
    float wave3 = sin((uv.x + uv.y) * 2.0 + t * 0.4) * 0.5 + 0.5;
    
    // Deep dark noir base: vec3(0.03, 0.035, 0.045)
    // Warm charcoal slate: vec3(0.07, 0.08, 0.10)
    // Subtle champagne gold highlight: vec3(0.77, 0.65, 0.50) * 0.18
    vec3 darkBase = vec3(0.031, 0.035, 0.047);
    vec3 charcoal = vec3(0.055, 0.063, 0.082);
    vec3 goldAccent = vec3(0.772, 0.658, 0.502) * 0.15;
    
    vec3 color = mix(darkBase, charcoal, wave1 * 0.6);
    color += goldAccent * (wave2 * wave3);
    
    // Fine platinum grain noise
    float n = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    color += (n - 0.5) * 0.015;
    
    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    function render(t: number) {
      if (!canvas || !gl) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full opacity-90 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
