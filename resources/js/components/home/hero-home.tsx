import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

type StatType = 'number' | 'letter';

interface StatItem {
    value: string;
    label: string;
    type: StatType;
}

// ─── Constants ────────────────────────────────────────────────────────────────

/** Duration shared across all stat animations for visual consistency */
const STAT_ANIMATION_DURATION_MS = 1500;

/** Duration shared across hero image and card entrance animations (seconds) */
const ENTRANCE_DURATION_S = 1.5;

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const SCHOOL_STATS: StatItem[] = [
    { value: 'A', label: 'Terakreditasi', type: 'letter' },
    { value: '30+', label: 'Tenaga Pendidik', type: 'number' },
    { value: '20+', label: 'Prestasi Tahun Ini', type: 'number' },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const heroImageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: ENTRANCE_DURATION_S, ease: 'easeOut' },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: ENTRANCE_DURATION_S, ease: 'easeOut' },
    },
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

/** Counts from 0 up to `target` over `duration` ms once `active` is true. */
function useCountUp(target: number, duration: number, active: boolean): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;

        setCount(0);
        const startTime = performance.now();
        let frameId: number;

        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            }
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [active, target, duration]);

    return count;
}

/** Scrambles through random uppercase letters then settles on `target` once `active` is true. */
function useScramble(target: string, duration: number, active: boolean): string {
    const [display, setDisplay] = useState('—');

    useEffect(() => {
        if (!active) return;

        const startTime = performance.now();
        let frameId: number;

        const tick = (now: number) => {
            const progress = (now - startTime) / duration;
            if (progress >= 1) {
                setDisplay(target);
                return;
            }
            setDisplay(
                SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
            );
            frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [active, target, duration]);

    return display;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NumberValue({ value, active }: { value: string; active: boolean }) {
    const match = value.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';
    const count = useCountUp(target, STAT_ANIMATION_DURATION_MS, active);
    return <>{count}{suffix}</>;
}

function LetterValue({ value, active }: { value: string; active: boolean }) {
    const display = useScramble(value, STAT_ANIMATION_DURATION_MS, active);
    return <>{display}</>;
}

function StatCard({
    stat,
    hasDivider,
    active,
}: {
    stat: StatItem;
    hasDivider: boolean;
    active: boolean;
}) {
    return (
        <div
            className={`flex flex-col items-center justify-center py-3 sm:py-0 ${
                hasDivider ? 'border-x border-white px-3 sm:px-8' : ''
            }`}
        >
            <span className="font-mono text-xl font-bold text-white sm:text-2xl">
                {stat.type === 'letter' ? (
                    <LetterValue value={stat.value} active={active} />
                ) : (
                    <NumberValue value={stat.value} active={active} />
                )}
            </span>
            <span className="text-center text-xs font-medium text-white sm:text-sm">
                {stat.label}
            </span>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const HeroSection: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isCardInView = useInView(cardRef, { once: true });

    return (
        <section
            aria-label="Beranda MI NU 2 Situwangi"
            className="relative flex min-h-[60vh] items-start justify-center overflow-visible px-4 pt-20 sm:min-h-[70vh] sm:px-8 sm:pt-24 lg:h-screen lg:px-16 lg:pt-26"
        >
            {/* Background */}
            <div
                role="img"
                aria-label="Gedung MI NU 2 Situwangi"
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/hero-home.webp')" }}
            />

            {/* Heading */}
            <div className="relative z-10 mx-auto mt-8 max-w-5xl p-6 text-center sm:mt-0 lg:p-8">
                <p className="font-poppins mb-4 text-base font-medium text-gray-200 lg:text-lg">
                    Selamat Datang di{' '}
                    <span className="font-semibold text-[#AEFF00]">
                        MI NU 2 Situwangi!
                    </span>
                </p>
                <h1 className="font-poppins text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
                    Generasi Berilmu, Berakhlak,{' '}
                    <br className="hidden sm:block" />
                    <span className="font-semibold leading-tight text-[#AEFF00]">
                        &amp; Berprestasi
                    </span>
                </h1>
            </div>

            {/* Hero character image — smooth fade in (LCP element) */}
            <motion.img
                variants={heroImageVariants}
                initial="hidden"
                animate="visible"
                src="/assets/image/model-hero-dua.webp"
                alt="Ilustrasi siswa MI NU 2 Situwangi berprestasi"
                fetchPriority="high"
                className="absolute bottom-0 left-1/2 h-auto w-80 -translate-x-1/2 object-contain md:w-96 lg:w-xl"
            />

            {/* Stats card — slide up fade in, counters start when card enters viewport */}
            <motion.div
                ref={cardRef}
                variants={cardVariants}
                initial="hidden"
                animate={isCardInView ? 'visible' : 'hidden'}
                aria-label="Statistik sekolah"
                className="absolute bottom-[-60px] left-1/2 z-50 grid w-[90%] max-w-sm -translate-x-1/2 grid-cols-3 gap-2 rounded-2xl bg-gradient-to-b from-[#2ECC71] to-[#27ae60] p-4 shadow-lg backdrop-blur-md sm:bottom-[-50px] sm:h-32 sm:max-w-2xl sm:gap-0 sm:space-x-8 sm:p-6"
            >
                {SCHOOL_STATS.map((stat, index) => (
                    <StatCard
                        key={stat.label}
                        stat={stat}
                        hasDivider={index === 1}
                        active={isCardInView}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default HeroSection;
