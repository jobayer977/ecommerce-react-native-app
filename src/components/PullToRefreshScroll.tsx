import { RefreshControl, ScrollView } from "react-native";

import React from "react";
import { queryClient } from "../config";

interface IFProps {
  children: any;
}
const PullToRefreshScroll: React.FC<IFProps> = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // queryClient
    //   .refetchQueries({
    //     active: true,
    //   })
    //   .then((r) => {
    //     setRefreshing(false);
    //   });

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};
export default PullToRefreshScroll;
