import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ErrorIcon: React.FC<SvgProps> = memo(
  ({ width = 20, height = 20, ...props }) => (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 22a10 10 0 100-20 10 10 0 000 20zM8.836 8.836a.934.934 0 011.324 0l1.836 1.836 1.836-1.836a.937.937 0 011.324 1.324l-1.836 1.836 1.836 1.836a.937.937 0 01-1.324 1.324l-1.836-1.836-1.836 1.836a.937.937 0 01-1.324-1.324l1.836-1.836-1.836-1.836a.934.934 0 010-1.324z"
        fill="#D82039"
      />
    </Svg>
  )
);
