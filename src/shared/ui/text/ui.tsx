import clsx from "clsx";
import { ElementType, ReactNode, ComponentProps } from "react";

import styles from "./styles.module.scss";

interface TextOwnProps<T extends ElementType = ElementType> {
  className?: string;
  size?: "medium" | "large";
  weight?: 300 | 400;
  children: ReactNode;
  as?: T;
}

const DEFAULT_ELEMENT: ElementType = "div";

export type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<ComponentProps<T>, keyof TextOwnProps<T>>;

export function Text<T extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  size = "medium",
  weight = 400,
  children,
  as,
  ...props
}: TextProps<T>) {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={clsx(
        styles["text"],
        styles[size],
        styles[`weight-${weight}`],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
