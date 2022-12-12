import {
  Avatar,
  Button,
  Card,
  Icon,
  IconElement,
  Input,
  Layout,
  List,
  Radio,
  RadioGroup,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { Comment, Product, ProductColor } from "./data";
import { DarkColor, PrimaryColor } from "../../../constants/color-manager";
import { Div, Image } from "react-native-magnus";
import {
  ImageBackground,
  ListRenderItemInfo,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactElement, useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import Feather from "react-native-vector-icons/Feather";
import { ImageAssets } from "../../../lib/assets-managers";
import { ImageStyle } from "react-native";
import { KeyboardAvoidingView } from "../../../components/KeyboardAvoidingView";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="heart" />
);
export const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="message-circle-outline" />
);
export const MoreHorizontalIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="more-horizontal" />
);
const ProductDetailsScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { appFontFamily, isAuthenticated, tokenUser } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
      isAuthenticated: selectIsAuthenticated,
      tokenUser: selectTokenUser,
    })
  );
  useEffect(() => {
    configureHeader();
    return () => {};
  }, []);
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: true,
      statusBarColor: PrimaryColor,
      title: route.params?.title?.slice(0, 25) || "",
      headerShadowVisible: false,
      headerTitleStyle: [
        styles.headerTitleStyle,
        {
          fontFamily: getFontNameType(appFontFamily, "Bold"),
        },
      ],
      headerTitleAlign: "center",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={ImageAssets.black_back}
            h={32}
            w={32}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <Div mr={10} row>
          <Div ml={5}>
            <TouchableOpacity>
              <Feather name="shopping-cart" size={17} color={DarkColor} />
            </TouchableOpacity>
          </Div>
        </Div>
      ),
    });
  };
  const product: Product = Product.pinkChair();
  const keyboardOffset = (height: number): number =>
    Platform.select({
      android: 0,
      ios: height,
    });
  const [comment, setComment] = React.useState<string>();
  const [selectedColorIndex, setSelectedColorIndex] = React.useState<number>();
  const styles = useStyleSheet(themedStyles);
  const onBuyButtonPress = (): void => {
    navigation && navigation.navigate("Payment");
  };
  const onAddButtonPress = (): void => {
    navigation && navigation.navigate("ShoppingCart");
  };
  const renderColorItem = (
    color: ProductColor,
    index: number
  ): React.ReactElement => (
    <Radio key={index} style={styles.colorRadio}>
      {(evaProps) => (
        <Text {...evaProps} style={{ color: color.value, marginLeft: 10 }}>
          {color.description.toUpperCase()}
        </Text>
      )}
    </Radio>
  );
  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/0925a88b-ebaf-4935-208f-fc48a17ec200/public540x720",
        }}
      />
      <Layout style={styles.detailsContainer} level="1">
        <Text category="h6">{product.title}</Text>
        <Text style={styles.subtitle} appearance="hint" category="p2">
          {product.subtitle}
        </Text>
        <Text style={styles.price} category="h4">
          {product.price}
        </Text>
        <Text style={styles.description} appearance="hint">
          {product.description}
        </Text>
        <Text style={styles.sectionLabel} category="h6">
          Size:
        </Text>
        <Text style={styles.size} appearance="hint">
          {product.size}
        </Text>
        <Text style={styles.sectionLabel} category="h6">
          Color:
        </Text>
        <RadioGroup
          style={styles.colorGroup}
          selectedIndex={selectedColorIndex}
          onChange={setSelectedColorIndex}
        >
          {product.colors.map(renderColorItem)}
        </RadioGroup>
        <View style={styles.actionContainer}>
          <Button
            style={styles.actionButton}
            size="giant"
            onPress={onBuyButtonPress}
          >
            BUY
          </Button>
          <Button
            style={styles.actionButton}
            size="giant"
            status="control"
            onPress={onAddButtonPress}
          >
            ADD TO BAG
          </Button>
        </View>
      </Layout>
      <Input
        style={styles.commentInput}
        label={(evaProps) => (
          <Text {...evaProps} style={styles.commentInputLabel}>
            Comments
          </Text>
        )}
        placeholder="Write your comment"
        value={comment}
        onChangeText={setComment}
      />
    </Layout>
  );
  const renderCommentHeader = (comment: Comment): ReactElement => (
    <View style={styles.commentHeader}>
      <Avatar source={comment.author.photo} />
      <View style={styles.commentAuthorContainer}>
        <Text category="s2">{comment.author.fullName}</Text>
        <Text appearance="hint" category="c1">
          {comment.date}
        </Text>
      </View>
      <Button
        style={styles.iconButton}
        appearance="ghost"
        status="basic"
        accessoryLeft={MoreHorizontalIcon}
      />
    </View>
  );
  const renderItem = (
    info: ListRenderItemInfo<Comment>
  ): React.ReactElement => (
    <Card
      style={styles.commentItem}
      header={() => renderCommentHeader(info.item)}
    >
      <Text>{info.item.text}</Text>
      <View style={styles.commentReactionsContainer}>
        <Button
          style={styles.iconButton}
          appearance="ghost"
          status="basic"
          accessoryLeft={MessageCircleIcon}
        >
          {`${info.item.comments.length}`}
        </Button>
        <Button
          style={styles.iconButton}
          appearance="ghost"
          status="danger"
          accessoryLeft={HeartIcon}
        >
          {`${info.item.likes.length}`}
        </Button>
      </View>
    </Card>
  );
  return (
    <KeyboardAvoidingView style={styles.container} offset={keyboardOffset}>
      <List
        style={styles.commentList}
        data={product.comments}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader()}
      />
    </KeyboardAvoidingView>
  );
};
export default ProductDetailsScreen;
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
  headerTitleStyle: {},
  commentList: {
    flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 340,
    width: "100%",
  },
  detailsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  price: {
    position: "absolute",
    top: 24,
    right: 16,
  },
  description: {
    marginVertical: 16,
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: "row",
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: "row",
    marginHorizontal: -8,
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "text-basic-color",
  },
  commentInput: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  commentItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  commentHeader: {
    flexDirection: "row",
    padding: 16,
  },
  commentAuthorContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  commentReactionsContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginHorizontal: -8,
    marginVertical: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
