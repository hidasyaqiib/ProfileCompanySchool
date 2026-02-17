import React from 'react';

interface FacilityCardProps {
    title: string;
    image: string;
    description?: string;
    isMoving?: 'none' | 'left' | 'right';
}

const FacilityCard: React.FC<FacilityCardProps> = ({
    title,
    image,
    description,
    isMoving = 'none'
}) => {
    const getMovingClasses = (): string => {
        switch (isMoving) {
            case 'left':
                return 'animate-tilt-left';
            case 'right':
                return 'animate-tilt-right';
            default:
                return '';
        }
    };

    return (
        <div className={`
            relative flex-shrink-0 w-80 h-96 rounded-3xl overflow-hidden shadow-xl
            transition-all duration-300 group cursor-pointer
            ${getMovingClasses()}
        `}>
            {/* IMAGE */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TOP RIGHT ICON */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
            </div>

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
        </div>
    );
};

export default FacilityCard;


