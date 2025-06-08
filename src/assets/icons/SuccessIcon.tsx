import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const SuccessIcon = memo((props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 22a10 10 0 100-20 10 10 0 000 20zm4.414-11.836l-5 5a.934.934 0 01-1.324 0l-2.5-2.5a.937.937 0 011.324-1.324l1.836 1.836 4.336-4.34a.937.937 0 011.324 1.324l.004.004z"
      fill="#048E49"
    />
  </Svg>
));
