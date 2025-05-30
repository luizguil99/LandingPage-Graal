import React from 'react';

const ImplantIcon = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g fillRule="evenodd">
        <path 
          fill="currentColor" 
          fillOpacity="0.2" 
          d="M51.8137386,32 C52.5838535,26.7174939 53,21.8964501 53,19 C53,9.61115925 48.627417,2 42,2 C38.8333333,2 35.6666667,5 32.5,5 C29.3333333,5 26.1666667,2 23,2 C16.372583,2 12,9.61115925 12,19 C12,21.8964501 12.4161465,26.7174939 13.1862614,32 L51.8137386,32 L51.8137386,32 Z" 
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.15" 
          points="24 32 41 32 41 39 38 43 38 58 32.5 62 27 58 27 43 24 39" 
        />
        <path 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeWidth="2" 
          d="M25,6 C20.581722,6 17,9.581722 17,14" 
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.2" 
          points="27 51 38 54 38 56 27 53" 
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.2" 
          points="27 47 38 50 38 52 27 49" 
        />
        <polygon 
          fill="currentColor" 
          fillOpacity="0.2" 
          points="27 43 38 46 38 48 27 45" 
        />
        
        {/* Adicionar contornos para maior definição */}
        <path 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          d="M51.8137386,32 C52.5838535,26.7174939 53,21.8964501 53,19 C53,9.61115925 48.627417,2 42,2 C38.8333333,2 35.6666667,5 32.5,5 C29.3333333,5 26.1666667,2 23,2 C16.372583,2 12,9.61115925 12,19 C12,21.8964501 12.4161465,26.7174939 13.1862614,32 L51.8137386,32 Z" 
        />
        <path 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          d="M24 32 L41 32 L41 39 L38 43 L38 58 L32.5 62 L27 58 L27 43 L24 39 Z" 
        />
      </g>
    </svg>
  );
};

export default ImplantIcon;
