import { Div, DivProps } from "react-native-magnus";

import React from "react";

interface IFProps extends DivProps {
  children: any;
}
const SafeView: React.FC<IFProps> = ({ children, ...rest }: any) => {
  return (
    <Div {...rest} px={16}>
      {children}
    </Div>
  );
};
export default SafeView;
