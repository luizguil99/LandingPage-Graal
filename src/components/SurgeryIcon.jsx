import React from 'react';

const SurgeryIcon = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 5.284)">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeWidth="2" 
            d="M43.4223796,20.9902774 C44.5081661,22.0760638 46.0081661,22.7476367 47.6650203,22.7476367 C50.9787288,22.7476367 53.6650203,20.0613452 53.6650203,16.7476367 C53.6650203,13.4339282 50.9787288,10.7476367 47.6650203,10.7476367 L47.6650203,5.48499742 L47.6650203,0.33976325" 
            transform="scale(1 -1) rotate(-45 20.675 0)"
          />
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeWidth="2" 
            d="M6.42237964,54.9902774 C7.50816608,56.0760638 9.00816608,56.7476367 10.6650203,56.7476367 C13.9787288,56.7476367 16.6650203,54.0613452 16.6650203,50.7476367 C16.6650203,47.4339282 13.9787288,44.7476367 10.6650203,44.7476367 L10.6650203,39.4849974 L10.6650203,34.3397633" 
            transform="scale(-1 1) rotate(-45 0 73.413)"
          />
          <polygon 
            fill="currentColor" 
            fillOpacity="0.2" 
            points="26.156 7.983 34.131 7.983 34.131 48.988 26.156 48.988" 
            transform="rotate(45 30.144 28.485)"
          />
        </g>
        <g transform="rotate(-45 13.157 -.207)">
          <rect 
            width="6" 
            height="38" 
            y="18" 
            fill="currentColor" 
            fillOpacity="0.2"
          />
          <polygon 
            fill="currentColor" 
            fillOpacity="0.2" 
            points="2 7 4 7 6 18 0 18"
          />
          <polygon 
            fill="currentColor" 
            fillOpacity="0.2" 
            points="2 56 4 56 6 67 0 67" 
            transform="matrix(1 0 0 -1 0 123)"
          />
          <polygon 
            fill="currentColor" 
            fillOpacity="0.15" 
            points="0 0 6 0 4 7 2 7"
          />
          <polygon 
            fill="currentColor" 
            fillOpacity="0.15" 
            points="0 67 6 67 4 74 2 74" 
            transform="matrix(1 0 0 -1 0 141)"
          />
          
          {/* Contornos adicionais para maior definição */}
          <rect 
            width="6" 
            height="38" 
            y="18" 
            stroke="currentColor" 
            strokeWidth="1.5"
          />
          <path 
            stroke="currentColor" 
            strokeWidth="1.5" 
            d="M0,18 L6,18 L6,0 L0,0 Z"
          />
          <path 
            stroke="currentColor" 
            strokeWidth="1.5" 
            d="M0,56 L6,56 L6,74 L0,74 Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SurgeryIcon;
