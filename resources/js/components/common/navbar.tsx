import { Link } from '@inertiajs/react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import React, { useState, useRef, useCallback } from 'react';

const menus = [
    { label: 'Beranda', path: '/' },
    {
        label: 'Tentang Kami',
        submenu: [
            { label: 'Profil', path: '/profil' },
            { label: 'Fasilitas', path: '/fasilitas' },
            { label: 'Prestasi', path: '/prestasi' },
            { label: 'Kalender Akademik', path: '/kalender-akademik' },
            { label: 'Kurikulum', path: '/kurikulum' },
        ],
    },
    {
        label: 'Kepegawaian',
        submenu: [
            { label: 'Struktur Organisasi', path: '/struktur-organisasi' },
            { label: 'Guru', path: '/guru' },
        ],
    },
    {
        label: 'Berita',
        path: '/berita',
    },
    {
        label: 'Galeri',
        path: '/galeri',
    },
    { label: "Tour Sekolah", path: "/school-tour" },
    { label: "PPDB", path: "/ppdb" },
];

const Navbar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
    const navbarRef = useRef<HTMLElement | null>(null);

    const isMouseInNavbarArea = useCallback(
        (mouseX: number, mouseY: number, menuIndex: number) => {
            const navbarElement = navbarRef.current;
            const menuElement = menuRefs.current[menuIndex];

            if (!navbarElement || !menuElement) return false;

            const navbarRect = navbarElement.getBoundingClientRect();

            const dropdownElement = menuElement.querySelector(
                'ul',
            ) as HTMLElement;
            let dropdownRect = null;
            if (dropdownElement) {
                dropdownRect = dropdownElement.getBoundingClientRect();
            }

            const padding = 10;

            const navbarArea = {
                left: navbarRect.left - padding,
                right: navbarRect.right + padding,
                top: navbarRect.top - 5,
                bottom: navbarRect.bottom + padding,
            };

            let dropdownArea = null;
            if (dropdownRect) {
                dropdownArea = {
                    left: dropdownRect.left - padding,
                    right: dropdownRect.right + padding,
                    top: dropdownRect.top - 5,
                    bottom: dropdownRect.bottom + padding,
                };
            }

            const inNavbar =
                mouseX >= navbarArea.left &&
                mouseX <= navbarArea.right &&
                mouseY >= navbarArea.top &&
                mouseY <= navbarArea.bottom;

            const inDropdown =
                dropdownArea &&
                mouseX >= dropdownArea.left &&
                mouseX <= dropdownArea.right &&
                mouseY >= dropdownArea.top &&
                mouseY <= dropdownArea.bottom;

            if (mouseY < navbarRect.top - 5) {
                return false;
            }

            return inNavbar || inDropdown;
        },
        [],
    );

    const handleMouseEnter = useCallback((index: number) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpenMenu(index);
    }, []);

    const handleMouseLeave = useCallback(
        (index: number) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                const handleMouseMove = (e: MouseEvent) => {
                    const isInArea = isMouseInNavbarArea(
                        e.clientX,
                        e.clientY,
                        index,
                    );

                    if (!isInArea) {
                        setOpenMenu(null);
                        document.removeEventListener(
                            'mousemove',
                            handleMouseMove,
                        );
                    }
                };

                document.addEventListener('mousemove', handleMouseMove);

                setTimeout(() => {
                    document.removeEventListener('mousemove', handleMouseMove);
                }, 200);
            }, 10);
        },
        [isMouseInNavbarArea],
    );

    React.useEffect(() => {
        if (openMenu === null) return;

        const globalMouseHandler = (e: MouseEvent) => {
            if (navbarRef.current) {
                const navbarRect = navbarRef.current.getBoundingClientRect();

                if (e.clientY < navbarRect.top - 10) {
                    setOpenMenu(null);
                }

                const isInArea = isMouseInNavbarArea(
                    e.clientX,
                    e.clientY,
                    openMenu,
                );
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

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    const handleNavbarMouseLeave = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
        }, 20);
    }, []);

    const handleNavbarMouseEnter = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileOpen((prev) => !prev);
        setMobileSubmenu(null);
    }, []);

    const toggleMobileSubmenu = useCallback((index: number) => {
        setMobileSubmenu((prev) => (prev === index ? null : index));
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileOpen(false);
        setMobileSubmenu(null);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="fixed top-0 left-0 z-[100000] flex w-full justify-center bg-transparent py-3 lg:py-6"
            onMouseEnter={handleNavbarMouseEnter}
            onMouseLeave={handleNavbarMouseLeave}
        >
            <div className="flex min-h-[56px] w-[calc(100%-2rem)] items-center justify-between rounded-full bg-white px-4 py-2 shadow lg:min-h-[64px] lg:w-auto">
                {/* Logo */}
                <Link
                    href="/"
                    className="mr-4 flex items-center"
                    onClick={closeMobileMenu}
                >
                    <img
                        src="/assets/image/logo.webp"
                        alt="MI NU 2 Situwangi"
                        className="mr-2 h-10 w-24 object-contain lg:h-12 lg:w-28"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-6 lg:flex">
                    {menus.map((menu, idx) => (
                        <li
                            key={menu.label}
                            ref={(el) => {
                                menuRefs.current[idx] = el;
                            }}
                            className="relative"
                            onMouseEnter={() =>
                                menu.submenu && handleMouseEnter(idx)
                            }
                            onMouseLeave={() =>
                                menu.submenu && handleMouseLeave(idx)
                            }
                        >
                            {menu.submenu ? (
                                <>
                                    <button
                                        className="flex items-center font-medium text-gray-700 transition-colors duration-200 hover:text-teal-700 focus:outline-none"
                                        type="button"
                                    >
                                        {menu.label}
                                        <svg
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                                openMenu === idx
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <ul
                                        className={`absolute top-full left-0 z-20 mt-2 min-w-[180px] transform-gpu overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-out ${
                                            openMenu === idx
                                                ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                                                : 'pointer-events-none translate-y-[-10px] scale-95 opacity-0'
                                        }`}
                                        style={{
                                            transformOrigin: 'top center',
                                        }}
                                    >
                                        {menu.submenu.map((sub, subIdx) => (
                                            <li
                                                key={sub.label}
                                                className={`transform transition-all duration-300 ease-out ${
                                                    openMenu === idx
                                                        ? 'translate-x-0 opacity-100'
                                                        : 'translate-x-[-20px] opacity-0'
                                                }`}
                                                style={{
                                                    transitionDelay:
                                                        openMenu === idx
                                                            ? `${subIdx * 50}ms`
                                                            : '0ms',
                                                }}
                                            >
                                                <Link
                                                    href={sub.path}
                                                    className="block px-5 py-3 whitespace-nowrap text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#27ae60]"
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
                                    className="font-medium text-gray-700 transition-colors duration-200 hover:text-[#27ae60]"
                                >
                                    {menu.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Action Button */}
                <div className="ml-8 hidden lg:block">
                    <a
                        href="/contact-us"
                        className="flex items-center rounded-full bg-gradient-to-b from-[#2ECC71] to-[#27ae60] px-6 py-2 font-semibold text-white transition-all duration-200"
                    >
                        Kontak Kami
                        <Phone className="ml-2 h-4 w-4" />
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none lg:hidden"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={isMobileOpen}
                >
                    <div className="relative h-6 w-6">
                        <Menu
                            className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                                isMobileOpen
                                    ? 'scale-75 rotate-90 opacity-0'
                                    : 'scale-100 rotate-0 opacity-100'
                            }`}
                        />
                        <X
                            className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                                isMobileOpen
                                    ? 'scale-100 rotate-0 opacity-100'
                                    : 'scale-75 -rotate-90 opacity-0'
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
                    isMobileOpen
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                style={{ top: 0 }}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
                    isMobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ zIndex: 1 }}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={closeMobileMenu}
                    >
                        <img
                            src="/assets/image/logo.webp"
                            alt="MI NU 2 Situwangi"
                            className="h-10 w-24 object-contain"
                        />
                    </Link>
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                        onClick={closeMobileMenu}
                        aria-label="Tutup menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="h-[calc(100%-80px)] overflow-y-auto pb-24">
                    <ul className="py-2">
                        {menus.map((menu, idx) => (
                            <li
                                key={menu.label}
                                className={`transition-all duration-300 ease-out ${
                                    isMobileOpen
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isMobileOpen
                                        ? `${idx * 50 + 100}ms`
                                        : '0ms',
                                }}
                            >
                                {menu.submenu ? (
                                    <div>
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between px-6 py-3.5 text-left font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#27ae60] focus:outline-none"
                                            onClick={() =>
                                                toggleMobileSubmenu(idx)
                                            }
                                            aria-expanded={
                                                mobileSubmenu === idx
                                            }
                                        >
                                            <span>{menu.label}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                                                    mobileSubmenu === idx
                                                        ? 'rotate-180 text-[#27ae60]'
                                                        : ''
                                                }`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-out ${
                                                mobileSubmenu === idx
                                                    ? 'max-h-60'
                                                    : 'max-h-0'
                                            }`}
                                        >
                                            <ul className="bg-gray-50/70 py-1">
                                                {menu.submenu.map(
                                                    (sub, subIdx) => (
                                                        <li
                                                            key={sub.label}
                                                            className={`transform transition-all duration-200 ease-out ${
                                                                mobileSubmenu ===
                                                                idx
                                                                    ? 'translate-x-0 opacity-100'
                                                                    : 'translate-x-4 opacity-0'
                                                            }`}
                                                            style={{
                                                                transitionDelay:
                                                                    mobileSubmenu ===
                                                                    idx
                                                                        ? `${subIdx * 50 + 50}ms`
                                                                        : '0ms',
                                                            }}
                                                        >
                                                            <Link
                                                                href={sub.path}
                                                                className="block py-3 pr-6 pl-10 text-[0.935rem] text-gray-600 transition-colors duration-200 hover:bg-gray-100/80 hover:text-[#27ae60]"
                                                                onClick={
                                                                    closeMobileMenu
                                                                }
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={menu.path!}
                                        className="block px-6 py-3.5 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#27ae60]"
                                        onClick={closeMobileMenu}
                                    >
                                        {menu.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Action Button */}
                    <div
                        className={`px-6 pt-4 transition-all duration-300 ease-out ${
                            isMobileOpen
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isMobileOpen
                                ? `${menus.length * 50 + 150}ms`
                                : '0ms',
                        }}
                    >
                        <a
                            href="/contact-us"
                            className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2ECC71] to-[#27ae60] px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
                            onClick={closeMobileMenu}
                        >
                            Kontak Kami
                            <Phone className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
