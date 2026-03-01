import React from 'react';

interface FacilityCardProps {
    title: string;
    image: string;
    description?: string;
    className?: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
    title,
    image,
    description,
    className = '',
}) => {
    return (
        <article
            className={`group relative h-96 w-full cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl ${className} `}
        >
            {/* IMAGE */}
            <img
                src={image}
                alt={`${title} facility`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* CONTENT PANEL */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/20 p-6 backdrop-blur-sm">
                <div className="space-y-3">
                    <h3 className="text-xl leading-tight font-bold text-white">
                        {title}
                    </h3>

                    {description && (
                        <p className="line-clamp-2 text-sm leading-relaxed text-white/80">
                            {description}
                        </p>
                    )}

                    <div className="text-xs font-normal text-white/70">
                        MI NU 02 Situwangi
                    </div>
                </div>

                {/* BOTTOM ACCENT LINE */}
                <div className="absolute right-6 bottom-0 left-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
        </article>
    );
};

export default FacilityCard;
