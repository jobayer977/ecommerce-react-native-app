import {
  Button,
  Layout,
  List,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CartItem } from "../../../components/cart-item.component";
import { ImageSourcePropType } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { PrimaryColor } from "../../../constants/color-manager";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
const CartScreen = () => {
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
      title: route.params?.title || "My Cart",
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  const initialProducts: Product[] = [Product.pinkChair(), Product.blackLamp()];
  const styles = useStyleSheet(themedStyle);
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const totalCost = (): number => {
    return products.reduce(
      (acc: number, product: Product): number => acc + product.totalPrice,
      0
    );
  };
  const onItemRemove = (product: Product, index: number): void => {
    products.splice(index, 1);
    setProducts([...products]);
  };
  const onItemChange = (product: Product, index: number): void => {
    products[index] = product;
    setProducts([...products]);
  };
  const renderFooter = (): React.ReactElement => (
    <Layout style={styles.footer}>
      <Text category="h5">Total Cost:</Text>
      <Text category="h5">{`$${totalCost()}`}</Text>
    </Layout>
  );
  const renderProductItem = (
    info: ListRenderItemInfo<Product>
  ): React.ReactElement => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
      onProductChange={onItemChange}
      onRemove={onItemRemove}
    />
  );
  return (
    <Layout style={styles.container} level="2">
      <List
        data={products}
        renderItem={renderProductItem}
        ListFooterComponent={renderFooter}
      />
      <Button style={styles.checkoutButton} size="giant">
        CHECKOUT
      </Button>
    </Layout>
  );
};
export default CartScreen;
const themedStyle = StyleService.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "background-basic-color-3",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  cartItemContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    padding: 16,
  },
  amountContainer: {
    position: "absolute",
    flexDirection: "row",
    left: 16,
    bottom: 16,
  },
  amountButton: {
    borderRadius: 16,
  },
  amount: {
    textAlign: "center",
    width: 40,
  },
  removeButton: {
    position: "absolute",
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
export class Product {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly subtitle: string,
    readonly image: ImageSourcePropType,
    readonly price: number,
    readonly amount: number
  ) {}
  get formattedPrice(): string {
    return `$${this.price}`;
  }
  get totalPrice(): number {
    return this.price * this.amount;
  }
  static pinkChair(): Product {
    return new Product(
      0,
      "Pink Chair",
      "Furniture",
      require("./image-product-1.png"),
      130,
      1
    );
  }
  static blackLamp(): Product {
    return new Product(
      1,
      "Black Lamp",
      "Lighting",
      require("./image-product-1.png"),
      80,
      1
    );
  }
}
