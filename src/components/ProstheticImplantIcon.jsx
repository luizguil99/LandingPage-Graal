import React from 'react';

const ProstheticImplantIcon = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g fill="none" fillRule="evenodd">
        <polyline 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeWidth="2" 
          points="28.986 32.695 28.986 10 23 10"
        />
        <path 
          stroke="currentColor" 
          strokeLinecap="square" 
          strokeWidth="2" 
          d="M30,24 L34,24"
        />
        <circle 
          cx="19" 
          cy="10" 
          r="5" 
          fill="currentColor" 
          fillOpacity="0.3"
        />
        <path 
          fill="currentColor" 
          fillOpacity="0.2" 
          fillRule="nonzero" 
          d="M55.1101377,47.7175322 C56.0889464,48.2293987 57.2973774,47.8508672 57.8092438,46.8720585 C58.3211103,45.8932498 57.9425788,44.6848188 56.9637701,44.1729523 L33.4855051,32.039344 L20.9705334,32.039344 L9.78869638,15.8283084 C9.15693144,14.9222473 7.91027706,14.6998863 7.00421589,15.3316512 C6.09815473,15.9634162 5.87579372,17.2100705 6.50755867,18.1161317 L18.985921,36.0222833 L32.6054267,36.0222833 L55.1101377,47.7175322 Z"
        />
        <rect 
          width="10" 
          height="6" 
          x="34" 
          y="21" 
          fill="currentColor" 
          fillOpacity="0.15"
        />
        <path 
          stroke="currentColor" 
          strokeLinecap="square" 
          strokeWidth="2" 
          d="M37 24L37 29M41 24L41 29"
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.2" 
          points="19 36 31 36 27.057 40.011 31 46 24 46"
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.15" 
          points="19 46 31 46 31 53 10 53"
        />
        <path 
          stroke="currentColor" 
          strokeLinecap="square" 
          strokeWidth="2" 
          d="M2,54 L61.008474,54"
        />
        
        {/* Contornos adicionais para maior definição */}
        <path 
          stroke="currentColor" 
          strokeWidth="1.5" 
          d="M55.1101377,47.7175322 L32.6054267,36.0222833 L18.985921,36.0222833 L6.50755867,18.1161317"
        />
        <path 
          stroke="currentColor" 
          strokeWidth="1.5" 
          d="M19 46L31 46L31 53L10 53"
        />
      </g>
    </svg>
  );
};

export default ProstheticImplantIcon;
