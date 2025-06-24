/**
 * BadgeStarIcon - A Lucide-style badge icon with a filled ring between outer and inner circles,
 * and a centered star.
 *
 * @param {Object} props - React props for the SVG element.
 * @param {string} [props.color='currentColor'] - Stroke color of the icon.
 * @param {number|string} [props.size=24] - Width and height of the icon.
 * @param {number} [props.strokeWidth=2] - Stroke width for the icon paths.
 * @param {React.SVGProps<SVGSVGElement>} [props] - Additional SVG props.
 *
 * @returns {JSX.Element} A React component rendering a badge icon with a cyan ring and yellow star.
 */
const BadgeStarIcon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}) => {
  const centerX = 32;
  const centerY = 32;
  const outerStarRadius = 8; // bigger star
  const innerStarRadius = 4;

  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? outerStarRadius : innerStarRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Cyan filled ring between r=30 and r=14 */}
      <path
        d="
          M 32 2
          A 30 30 0 1 1 31.999 2
          M 32 18
          A 14 14 0 1 0 32.001 18
        "
        fillRule="evenodd"
        className="fill-background group-[&[data-state=open]]:fill-[#22d3ee] group-hover:fill-[#22d3ee]/50 transition duration-300 ease-in-out"
      />

      {/* Outer Circle */}
      <circle cx="32" cy="32" r="30" />

      {/* Dashed Circle */}
      <circle cx="32" cy="32" r="22" strokeDasharray="4 4" />

      {/* Inner Circle */}
      <circle cx="32" cy="32" r="14" />

      {/* Star (bigger) */}
      <polygon
        points={points.join(" ")}
        stroke={color}
        className="fill-background group-[&[data-state=open]]:fill-[#facc15] group-hover:fill-[#facc15]/50 transition duration-300 ease-in-out"
      />
    </svg>
  );
};

const Icons = {
  BadgeStarIcon,
};

export default Icons;
