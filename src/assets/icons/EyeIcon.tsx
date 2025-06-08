import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

import { COLOR_PRIMARY } from "constants/styles";

export const EyeIcon: React.FC<SvgProps> = React.memo(
  ({ width = 20, height = 16, fill = COLOR_PRIMARY, ...props }) => {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 20 16"
        fill="none"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.098 8c0 2.133 1.746 3.87 3.902 3.87 2.146 0 3.893-1.737 3.893-3.87A3.888 3.888 0 0010 4.121C7.844 4.121 6.098 5.857 6.098 8zm9.639-5.954c1.707 1.319 3.16 3.249 4.205 5.663a.729.729 0 010 .572C17.854 13.111 14.137 16 10 16h-.01C5.863 16 2.146 13.11.06 8.281a.728.728 0 010-.572C2.146 2.88 5.863 0 9.99 0H10c2.068 0 4.03.718 5.737 2.046zM10 10.412a2.428 2.428 0 002.43-2.414A2.43 2.43 0 0010 5.574c-.117 0-.234.01-.341.029a1.997 1.997 0 01-2 1.92h-.05c-.028.155-.048.31-.048.475 0 1.328 1.093 2.414 2.44 2.414z"
          fill={fill}
        />
      </Svg>
    );
  }
);
