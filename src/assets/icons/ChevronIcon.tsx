import { COLOR_BLACK } from "constants/styles";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// default position LEFT chevron
export const ChevronIcon: React.FC<SvgProps> = React.memo(
  ({ width = 9, height = 14, fill = COLOR_BLACK, ...props }) => (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 9 14"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.845 7l5.488 5.488a.833.833 0 11-1.178 1.179L.488 7 7.155.333a.833.833 0 111.178 1.179L2.845 7z"
        fill={fill}
      />
    </Svg>
  )
);
