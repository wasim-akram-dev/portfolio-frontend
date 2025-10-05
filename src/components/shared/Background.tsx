const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 transition-opacity duration-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        {/* Fine grid lines */}
        <pattern
          id="fineGrid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            className="stroke-gray-300 dark:stroke-gray-700"
            strokeWidth="0.4"
          />
        </pattern>

        {/* Bold grid every 400px or 10px */}
        <pattern
          id="mainGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="400"
            height="400"
            fill="url(#fineGrid)"
            className="stroke-gray-400 dark:stroke-gray-600"
            strokeWidth="1"
            fillOpacity="0"
          />
        </pattern>

        {/* Fill entire background */}
        <rect width="100%" height="100%" fill="url(#mainGrid)" />
      </svg>
    </div>
  );
};

export default Background;
