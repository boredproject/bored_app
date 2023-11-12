import styles from "./SpinningText.module.css";

const SpinningText = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute flex justify-center items-center transform transition-all duration-300 hover:scale-90">
        <svg
          className="md:animate-spin-slow md:hover:animate-spin-medium transition-all"
          id="skyrim"
          viewBox="0 0 100 100"
          width="400"
          height="400"
        >
          <defs>
            <path
              id="circle"
              d="
                      M 50, 50
                      m -35, 0
                      a 35,35 0 1,1 70,0
                      a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fill="white"
            fontWeight="bold" // Utilise camelCase pour les propriétés CSS
            fontSize="7"
            letterSpacing="1.2"
            fontFamily="'Inter', sans-serif"
          >
            <textPath xlinkHref="#circle">
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
              CLICK
              <tspan className={styles.customColor}>ME!</tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SpinningText;
