import { Div, Image, ImageProps, Skeleton } from "react-native-magnus";

import React from "react";

interface IFProps extends Partial<ImageProps> {}
const CachedImage: React.FC<IFProps> = ({ ...rest }) => {
  return (
    <Div h={rest.h || 200} w={rest.w || 230} position="relative">
      <Image {...rest} position="absolute" left={0} top={0} zIndex={2} />
      <Skeleton.Box {...rest} position="absolute" left={0} top={0} zIndex={1} />
    </Div>
  );
};
export default CachedImage;
