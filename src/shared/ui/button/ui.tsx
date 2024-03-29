import clsx from "clsx";
import { ComponentProps, ElementType, ReactNode } from "react";

import styles from "./styles.module.scss";

const DEFAULT_ELEMENT: ElementType = "button";

interface ButtonOwnProps<T extends ElementType> {
  className?: string;
  children: ReactNode;
  as?: T;
}

export type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentProps<T>, keyof ButtonOwnProps<T>>;

export function Button<T extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  as,
  children,
  ...props
}: ButtonProps<T>) {
  const Element = as || DEFAULT_ELEMENT;
  return (
    <Element
      className={clsx("btn-reset", styles["button"], className)}
      {...props}
    >
      {children}
    </Element>
  );
}
