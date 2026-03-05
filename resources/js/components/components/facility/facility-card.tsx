import React, { useState } from 'react';
import ModalCard from './modal-card';
import { ArrowUpRight } from 'lucide-react';

interface FacilityCardProps {
    title: string;
    image: string;
    /** Multiple images — enables photo pagination inside the modal (all-facility) */
    images?: string[];
    description?: string;
    /** Optional date shown inside the modal */
    date?: string;
    className?: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
    title,
    image,
    images,
    description,
    date,
    className = '',
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <article
                role="button"
                tabIndex={0}
                onClick={() => setIsModalOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsModalOpen(true);
                    }
                }}
                aria-label={`Lihat detail ${title}`}
                className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 bg-white transition-all duration-300 hover:border-[#2ECC71]/60 focus:outline-none ${className}`}
            >
                {/* IMAGE */}
                <div className="p-3 pb-0">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
                        <img
                            src={image}
                            alt={`${title} facility`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Multi-photo badge */}
                        {images && images.length > 1 && (
                            <span className="absolute top-2 right-2 flex items-center gap-1 rounded-lg bg-black/60 px-2 py-1 text-xs font-medium text-white">
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                {images.length}
                            </span>
                        )}
                    </div>
                </div>

                {/* CONTENT PANEL */}
                <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-1 text-base font-bold leading-snug text-gray-900">
                        {title}
                    </h3>

                    {description && (
                        <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
                            {description}
                        </p>
                    )}

                    {/* "Lihat detail" hint */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100">
                        <span className="text-xs pt-4 font-semibold text-[#27ae60]">
                            Baca selengkapnya
                        </span>
                        <div
                            className="flex h-7 w-7 pt-4 items-center justify-center rounded-full"
                        >
                            <ArrowUpRight className="h-3.5 w-3.5 text-[#27ae60]" />
                        </div>
                    </div>
                </div>
            </article>

            {/* Modal */}
            {isModalOpen && (
                <ModalCard
                    title={title}
                    image={image}
                    images={images}
                    description={description}
                    date={date}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default FacilityCard;
