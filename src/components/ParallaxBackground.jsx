import { useEffect, useRef } from 'react';
import styles from './parallaxbackground.module.css';

// Height of one repeating band of shapes (px). Layers wrap seamlessly.
const BAND_HEIGHT = 1600;

const COLORS = {
    yellow: 'var(--c-yellow)',
    blue: 'var(--c-blue)',
    red: 'var(--c-red)',
    green: 'var(--c-green)',
};

/*
 * Each layer is a list of simple vector shapes.
 * t: type, c: color, s: size (px), x: left (%), y: top (px within band), r: rotation (deg)
 */
const LAYERS = [
    {
        // Layer 1 — front, sharp, moves fastest
        speed: 0.45,
        blur: 0,
        opacity: 0.55,
        shapes: [
            { t: 'ring', c: 'blue', s: 56, x: 6, y: 120, r: 0 },
            { t: 'triangle', c: 'red', s: 44, x: 88, y: 60, r: 18 },
            { t: 'cross', c: 'green', s: 36, x: 14, y: 520, r: 12 },
            { t: 'circle', c: 'yellow', s: 30, x: 92, y: 460, r: 0 },
            { t: 'square', c: 'blue', s: 38, x: 80, y: 860, r: 24 },
            { t: 'ring', c: 'green', s: 48, x: 4, y: 980, r: 0 },
            { t: 'triangle', c: 'yellow', s: 40, x: 10, y: 1320, r: -14 },
            { t: 'cross', c: 'red', s: 32, x: 90, y: 1240, r: 30 },
        ],
    },
    {
        // Layer 2 — middle, slightly blurred
        speed: 0.28,
        blur: 3,
        opacity: 0.45,
        shapes: [
            { t: 'circle', c: 'red', s: 52, x: 22, y: 240, r: 0 },
            { t: 'square', c: 'green', s: 44, x: 72, y: 180, r: 12 },
            { t: 'ring', c: 'yellow', s: 62, x: 84, y: 620, r: 0 },
            { t: 'triangle', c: 'blue', s: 50, x: 18, y: 760, r: 22 },
            { t: 'cross', c: 'yellow', s: 40, x: 66, y: 1040, r: -8 },
            { t: 'circle', c: 'blue', s: 36, x: 30, y: 1180, r: 0 },
            { t: 'ring', c: 'red', s: 54, x: 76, y: 1420, r: 0 },
        ],
    },
    {
        // Layer 3 — back, most blurred, moves slowest
        speed: 0.14,
        blur: 6,
        opacity: 0.4,
        shapes: [
            { t: 'circle', c: 'yellow', s: 90, x: 40, y: 100, r: 0 },
            { t: 'triangle', c: 'green', s: 80, x: 60, y: 420, r: -10 },
            { t: 'ring', c: 'blue', s: 100, x: 12, y: 640, r: 0 },
            { t: 'square', c: 'red', s: 70, x: 50, y: 920, r: 30 },
            { t: 'circle', c: 'green', s: 60, x: 86, y: 1140, r: 0 },
            { t: 'cross', c: 'blue', s: 72, x: 34, y: 1380, r: 15 },
        ],
    },
];

function Shape({ t, c, s, r }) {
    const color = COLORS[c];
    const common = { width: s, height: s, style: { transform: `rotate(${r}deg)` } };

    switch (t) {
        case 'circle':
            return (
                <svg viewBox="0 0 100 100" {...common}>
                    <circle cx="50" cy="50" r="48" fill={color} />
                </svg>
            );
        case 'ring':
            return (
                <svg viewBox="0 0 100 100" {...common}>
                    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="14" />
                </svg>
            );
        case 'triangle':
            return (
                <svg viewBox="0 0 100 100" {...common}>
                    <polygon points="50,6 94,90 6,90" fill={color} />
                </svg>
            );
        case 'square':
            return (
                <svg viewBox="0 0 100 100" {...common}>
                    <rect x="10" y="10" width="80" height="80" rx="14" fill={color} />
                </svg>
            );
        case 'cross':
            return (
                <svg viewBox="0 0 100 100" {...common}>
                    <path d="M38 6h24v32h32v24H62v32H38V62H6V38h32z" fill={color} />
                </svg>
            );
        default:
            return null;
    }
}

function ParallaxBackground() {
    const layerRefs = useRef([]);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return undefined;

        let ticking = false;

        const update = () => {
            const scrollY = window.scrollY;
            layerRefs.current.forEach((el, i) => {
                if (!el) return;
                const offset = (scrollY * LAYERS[i].speed) % BAND_HEIGHT;
                el.style.transform = `translate3d(0, ${-offset}px, 0)`;
            });
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        update();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={styles.parallax} aria-hidden="true">
            {LAYERS.map((layer, i) => (
                <div
                    key={i}
                    ref={(el) => { layerRefs.current[i] = el; }}
                    className={styles.layer}
                    style={{
                        filter: layer.blur ? `blur(${layer.blur}px)` : 'none',
                        opacity: layer.opacity,
                        zIndex: LAYERS.length - i,
                    }}
                >
                    {/* Two identical bands stacked for a seamless wrap */}
                    {[0, 1].map((band) => (
                        <div
                            key={band}
                            className={styles.band}
                            style={{ top: band * BAND_HEIGHT, height: BAND_HEIGHT }}
                        >
                            {layer.shapes.map((shape, j) => (
                                <span
                                    key={j}
                                    className={styles.shape}
                                    style={{ left: `${shape.x}%`, top: shape.y }}
                                >
                                    <Shape {...shape} />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ParallaxBackground;
