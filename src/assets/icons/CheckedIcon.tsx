import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

export const CheckedIcon: React.FC<SvgProps> = React.memo(
  ({ width = 16, height = 16, ...props }) => {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <Rect width={16} height={16} rx={3} fill="#2C14DD" />
        <Path
          d="M11.765 5.205a.75.75 0 01.03 1.06l-4.26 4.5a.754.754 0 01-1.078.015l-2.255-2.25a.75.75 0 01.537-1.261.753.753 0 01.525.201l1.71 1.704 3.728-3.94a.752.752 0 011.063-.03z"
          fill="#fff"
        />
      </Svg>
    );
  }
);
