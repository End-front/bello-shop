import clsx from "clsx";
import { ComponentProps } from "react";
import Image, { ImageProps } from "next/image";

import styles from "./styles.module.scss";

import { Title, Text } from "@/shared/ui";

export type ProductCartStandartProps = {
  className?: string;
  imgAttr: ImageProps;
  name: string;
  sizes?: string;
  composition?: string;
  colors?: string;
  capsula?: string;
  description?: string;
};

export function ProductCartStandart({
  className,
  imgAttr,
  name,
  sizes,
  composition,
  colors,
  capsula,
  description,
}: ProductCartStandartProps) {
  return (
    <div className={clsx(styles["product-cart"], className)}>
      <div className={clsx(styles["product-cart__img"])}>
        <Image fill={true} {...imgAttr} />
      </div>
      <div className={clsx(styles["product-cart__content"])}>
        <Title uppercase={true} className={clsx(styles["product-cart__title"])}>
          {name}
        </Title>
        {(sizes || composition || description) && (
          <Text className={clsx(styles["product-cart__info"])}>
            {sizes && (
              <div className={clsx(styles["product-cart__size"])}>
                Размеры: {sizes}
              </div>
            )}
            {composition && (
              <div className={clsx(styles["product-cart__composition"])}>
                Состав: {composition}
              </div>
            )}
            {colors && (
              <div className={clsx(styles["product-cart__colors"])}>
                Цвета: {colors}
              </div>
            )}
            {capsula && (
              <div className={clsx(styles["product-cart__capsula"])}>
                Капсула: {capsula}
              </div>
            )}
            {description && (
              <div className={clsx(styles["product-cart__description"])}>
                {description}
              </div>
            )}
          </Text>
        )}
      </div>
    </div>
  );
}
