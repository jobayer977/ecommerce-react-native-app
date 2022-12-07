import { Button, ListItem, ListItemProps, Text } from "@ui-kitten/components";
import { Icon, IconElement } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";

import { ImageStyle } from "react-native";
import { Product } from "../screens/dashboard/home/CartScreen";
import React from "react";

export type CartItemProps = ListItemProps & {
  index: number;
  product: Product;
  onProductChange: (product: Product, index: number) => void;
  onRemove: (product: Product, index: number) => void;
};

export const CartItem = (props: CartItemProps): React.ReactElement => {
  const { style, product, index, onProductChange, onRemove, ...listItemProps } =
    props;

  const decrementButtonEnabled = (): boolean => {
    return product.amount > 1;
  };

  const onRemoveButtonPress = (): void => {
    onRemove(product, index);
  };

  const onMinusButtonPress = (): void => {
    const updatedProduct: Product = new Product(
      product.id,
      product.title,
      product.subtitle,
      product.image,
      product.price,
      product.amount - 1
    );

    onProductChange(updatedProduct, index);
  };

  const onPlusButtonPress = (): void => {
    const updatedProduct: Product = new Product(
      product.id,
      product.title,
      product.subtitle,
      product.image,
      product.price,
      product.amount + 1
    );

    onProductChange(updatedProduct, index);
  };

  return (
    <ListItem {...listItemProps} style={[styles.cartItemContainer, style]}>
      <Image style={styles.image} source={product.image} />
      <View style={styles.detailsContainer}>
        <Text category="s1">{product.title}</Text>
        <Text appearance="hint" category="p2">
          {product.subtitle}
        </Text>
        <Text category="s2">{product.formattedPrice}</Text>
        <View style={styles.amountContainer}>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryLeft={MinusIcon}
            onPress={onMinusButtonPress}
            disabled={!decrementButtonEnabled()}
          />
          <Text style={styles.amount} category="s2">
            {`${product.amount}`}
          </Text>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryLeft={PlusIcon}
            onPress={onPlusButtonPress}
          />
        </View>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryLeft={CloseIcon}
        onPress={onRemoveButtonPress}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
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

export const CloseIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="close" />
);

export const MinusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="minus" />
);

export const PlusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="plus" />
);
