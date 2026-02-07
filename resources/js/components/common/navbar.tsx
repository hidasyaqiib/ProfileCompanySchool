import React, { useState, useRef, useCallback } from "react";
import { Link } from "@inertiajs/react";
import { Download, Phone } from "lucide-react";
import path from "path";

const menus = [
    { label: "Beranda", path: "/" },
    {
        label: "Tentang Kami",
        submenu: [
            { label: "Profil", path: "/profil" },
            { label: "Visi & Misi", path: "/visi-misi" },
            { label: "Fasilitas", path: "/fasilitas" },
            { label: "Prestasi", path: "/prestasi" }
        ],
    },

    {
        label: "Kepegawaian",
        submenu: [
            { label: "Struktur Organisasi", path: "/struktur-organisasi" },
            { label: "Guru", path: "/guru" },
        ]
    },
    {
        label: "Berita",
        path: "/berita",
    },
    {
        label: "Galeri",
        path: "/galeri",
    },
    { label: "Lab Tour", path: "/lab-tour" },
    { label: "PPDB", path: "/ppdb" },
];

const Navbar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRefs = useRef<(HTMLLIElement | null)[]>([]);

    // Function to calculate distance from mouse to menu area
    const getDistanceFromMenuArea = useCallback((mouseX: number, mouseY: number, menuIndex: number) => {
        const menuElement = menuRefs.current[menuIndex];
        if (!menuElement) return Infinity;

        const rect = menuElement.getBoundingClientRect();
        // Create expanded area (padding around menu)
        const padding = 20;
        const expandedRect = {
            left: rect.left - padding,
            right: rect.right + padding,
            top: rect.top - padding,
            bottom: rect.bottom + padding
        };

        // Check if mouse is within expanded area
        if (
            mouseX >= expandedRect.left &&
            mouseX <= expandedRect.right &&
            mouseY >= expandedRect.top &&
            mouseY <= expandedRect.bottom
        ) {
            return 0; // Mouse is within tolerance area
        }

        // Calculate minimum distance to expanded area
        const dx = Math.max(0, Math.max(expandedRect.left - mouseX, mouseX - expandedRect.right));
        const dy = Math.max(0, Math.max(expandedRect.top - mouseY, mouseY - expandedRect.bottom));
        return Math.sqrt(dx * dx + dy * dy);
    }, []);

    const handleMouseEnter = useCallback((index: number) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpenMenu(index);
    }, []);

    const handleMouseLeave = useCallback((index: number) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set timeout with mouse position tracking
        timeoutRef.current = setTimeout(() => {
            const handleMouseMove = (e: MouseEvent) => {
                const distance = getDistanceFromMenuArea(e.clientX, e.clientY, index);

                // If mouse is more than 50px away from menu area, close dropdown
                if (distance > 50) {
                    setOpenMenu(null);
                    document.removeEventListener('mousemove', handleMouseMove);
                }
            };

            // Add temporary mouse tracking
            document.addEventListener('mousemove', handleMouseMove);

            // Clean up after 500ms regardless
            setTimeout(() => {
                document.removeEventListener('mousemove', handleMouseMove);
            }, 500);

        }, 100); // Small delay before starting distance check
    }, [getDistanceFromMenuArea]);

    // Clean up timeout on unmount
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <nav className="w-full flex justify-center bg-transparent py-6 fixed top-0 left-0 z-30">
            <div className="flex items-center bg-white rounded-full shadow px-4 py-2 min-h-[64px]">
                {/* Logo */}
                <Link href="/" className="flex items-center mr-4">
                    <img
                        src="/assets/image/logo.webp"
                        alt="MI NU 2 Situwangi"
                        className="h-12 w-28 object-contain mr-2"
                    />
                </Link>
                {/* Menu */}
                <ul className="flex items-center gap-6">
                    {menus.map((menu, idx) => (
                        <li
                            key={menu.label}
                            ref={(el) => {
                                menuRefs.current[idx] = el;
                            }}
                            className="relative"
                            onMouseEnter={() => menu.submenu && handleMouseEnter(idx)}
                            onMouseLeave={() => menu.submenu && handleMouseLeave(idx)}
                        >
                            {menu.submenu ? (
                                <>
                                    <button
                                        className="flex items-center font-medium text-gray-700 hover:text-teal-700 transition-colors duration-200 focus:outline-none"
                                        type="button"
                                    >
                                        {menu.label}
                                        <svg
                                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${openMenu === idx ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Dropdown with animation */}
                                    <ul
                                        className={`absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg min-w-[180px] z-20 overflow-hidden transition-all duration-300 ease-out transform-gpu ${openMenu === idx
                                                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                                : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
                                            }`}
                                        style={{
                                            transformOrigin: 'top center'
                                        }}
                                    >
                                        {menu.submenu.map((sub, subIdx) => (
                                            <li
                                                key={sub.label}
                                                className={`transform transition-all duration-300 ease-out ${openMenu === idx
                                                        ? 'translate-x-0 opacity-100'
                                                        : 'translate-x-[-20px] opacity-0'
                                                    }`}
                                                style={{
                                                    transitionDelay: openMenu === idx ? `${subIdx * 50}ms` : '0ms'
                                                }}
                                            >
                                                <Link
                                                    href={sub.path}
                                                    className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#4FD488] whitespace-nowrap transition-colors duration-200"
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    href={menu.path!}
                                    className="font-medium text-gray-700 hover:text-[#4FD488] transition-colors duration-200"
                                >
                                    {menu.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                {/* Action Button */}
                <div className="ml-8">
                    <a
                        href="/contact-us"
                        className="flex items-center bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-full px-6 py-2 transition-all duration-200"
                    >
                        Kontak Kami
                        <Phone className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
