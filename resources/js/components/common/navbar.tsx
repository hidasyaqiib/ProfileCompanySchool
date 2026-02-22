import React, { useState, useRef, useCallback } from "react";
import { Link } from "@inertiajs/react";
import { Download, Phone } from "lucide-react";

const menus = [
    { label: "Beranda", path: "/" },
    {
        label: "Tentang Kami",
        submenu: [
            { label: "Profil", path: "/profil" },
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
    { label: "Tour Sekolah", path: "/school-tour" },
    { label: "PPDB", path: "/ppdb" },
];

const Navbar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
    const navbarRef = useRef<HTMLElement | null>(null);

    // Function to check if mouse is within navbar and dropdown area
    const isMouseInNavbarArea = useCallback((mouseX: number, mouseY: number, menuIndex: number) => {
        const navbarElement = navbarRef.current;
        const menuElement = menuRefs.current[menuIndex];

        if (!navbarElement || !menuElement) return false;

        const navbarRect = navbarElement.getBoundingClientRect();

        // Get dropdown element (submenu)
        const dropdownElement = menuElement.querySelector('ul') as HTMLElement;
        let dropdownRect = null;
        if (dropdownElement) {
            dropdownRect = dropdownElement.getBoundingClientRect();
        }

        // Reduced padding for more strict detection
        const padding = 10;

        // More strict navbar area - especially for top boundary
        const navbarArea = {
            left: navbarRect.left - padding,
            right: navbarRect.right + padding,
            top: navbarRect.top - 5, // Very small tolerance above navbar
            bottom: navbarRect.bottom + padding
        };

        // Create dropdown area if exists
        let dropdownArea = null;
        if (dropdownRect) {
            dropdownArea = {
                left: dropdownRect.left - padding,
                right: dropdownRect.right + padding,
                top: dropdownRect.top - 5,
                bottom: dropdownRect.bottom + padding
            };
        }

        // Check if mouse is within navbar area
        const inNavbar = (
            mouseX >= navbarArea.left &&
            mouseX <= navbarArea.right &&
            mouseY >= navbarArea.top &&
            mouseY <= navbarArea.bottom
        );

        // Check if mouse is within dropdown area
        const inDropdown = dropdownArea && (
            mouseX >= dropdownArea.left &&
            mouseX <= dropdownArea.right &&
            mouseY >= dropdownArea.top &&
            mouseY <= dropdownArea.bottom
        );

        // Additional check: if mouse is above navbar (even slightly), close dropdown
        if (mouseY < navbarRect.top - 5) {
            return false;
        }

        return inNavbar || inDropdown;
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

        // Much faster timeout with immediate mouse position tracking
        timeoutRef.current = setTimeout(() => {
            const handleMouseMove = (e: MouseEvent) => {
                const isInArea = isMouseInNavbarArea(e.clientX, e.clientY, index);

                // If mouse is outside navbar and dropdown area, close dropdown
                if (!isInArea) {
                    setOpenMenu(null);
                    document.removeEventListener('mousemove', handleMouseMove);
                }
            };

            // Add temporary mouse tracking
            document.addEventListener('mousemove', handleMouseMove);

            // Clean up after shorter time
            setTimeout(() => {
                document.removeEventListener('mousemove', handleMouseMove);
            }, 200);

        }, 10); // Much faster response - almost immediate
    }, [isMouseInNavbarArea]);

    // Global mouse movement detector for immediate response
    React.useEffect(() => {
        if (openMenu === null) return;

        const globalMouseHandler = (e: MouseEvent) => {
            if (navbarRef.current) {
                const navbarRect = navbarRef.current.getBoundingClientRect();

                // If mouse is above navbar (with very small tolerance), immediately close
                if (e.clientY < navbarRect.top - 10) {
                    setOpenMenu(null);
                }

                // Also check if mouse is too far from navbar area
                const isInArea = isMouseInNavbarArea(e.clientX, e.clientY, openMenu);
                if (!isInArea) {
                    setOpenMenu(null);
                }
            }
        };

        document.addEventListener('mousemove', globalMouseHandler);

        return () => {
            document.removeEventListener('mousemove', globalMouseHandler);
        };
    }, [openMenu, isMouseInNavbarArea]);

    // Clean up timeout on unmount
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Add global mouse leave detection for navbar
    const handleNavbarMouseLeave = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
        }, 20); // Much faster - almost immediate
    }, []);

    // Cancel close timeout when mouse enters navbar
    const handleNavbarMouseEnter = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="w-full flex justify-center bg-transparent py-6 fixed top-0 left-0 z-100000"
            onMouseEnter={handleNavbarMouseEnter}
            onMouseLeave={handleNavbarMouseLeave}
        >
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
                                                    className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#27ae60] whitespace-nowrap transition-colors duration-200"
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
                                    className="font-medium text-gray-700 hover:text-[#27ae60] transition-colors duration-200"
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
                        className="flex items-center bg-gradient-to-b from-[#2ECC71] to-[#27ae60] text-white font-semibold rounded-full px-6 py-2 transition-all duration-200"
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
