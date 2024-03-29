import clsx from "clsx";
import { ElementType, ReactNode, ComponentProps } from "react";

import styles from "./styles.module.scss";

import { SteelfishFont } from "@/shared/lib";

type TitleOwnProps<T extends ElementType> = {
  className?: string;
  size?: "standart" | "big";
  uppercase?: boolean;
  children: ReactNode;
  as?: T;
};

const DEFAULT_ELEMENT: ElementType = "div";

export type TitleProps<T extends ElementType> = TitleOwnProps<T> &
  Omit<ComponentProps<T>, keyof TitleOwnProps<T>>;

export function Title<T extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  size = "standart",
  uppercase = false,
  children,
  as,
  ...props
}: TitleProps<T>) {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={clsx(
        styles["title"],
        styles[size],
        uppercase && styles["text-uppercase"],
        SteelfishFont.className,
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
