'use client';

import { useState, useEffect } from 'react';

export default function Spotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{
                // rgba(56, 189, 248, 0.06) kiyanne ara oya dapu Light Blue (sky-400) eka. 
                // 0.06 opacity eken hena smooth torch effect ekak enawa.
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
            }}
        />
    );
}