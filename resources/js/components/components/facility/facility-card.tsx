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
    className = ''
}) => {
    return (
        <article
            className={`
                relative w-full h-96 rounded-3xl overflow-hidden shadow-xl
                transition-all duration-300 group cursor-pointer hover:shadow-2xl
                ${className}
            `}
        >
            {/* IMAGE */}
            <img
                src={image}
                alt={`${title} facility`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* CONTENT PANEL */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/20 backdrop-blur-sm border-t border-white/20">
                <div className="space-y-3">
                    <h3 className="font-bold text-xl text-white leading-tight">
                        {title}
                    </h3>

                    {description && (
                        <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                            {description}
                        </p>
                    )}

                    <div className="text-xs text-white/70 font-normal">
                        MI NU 02 Situwangi
                    </div>
                </div>

                {/* BOTTOM ACCENT LINE */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
        </article>
    );
};

export default FacilityCard;


