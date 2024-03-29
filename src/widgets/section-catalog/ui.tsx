import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

import { ProductCartStandart } from "@/etities/product";
import { Button } from "@/shared/ui";

export type SectionCatalogProductsProps = {};

export function SectionCatalogProducts() {
  return (
    <section id="section-catalog" className={clsx(styles["section-catalog"])}>
      <div className={clsx("container", styles["section-catalog__container"])}>
        <div className={clsx(styles["section-catalog__wrapper"])}>
          <ProductCartStandart
            className={styles["section-catalog__item"]}
            imgAttr={{ src: "/product-1.jpg", alt: "" }}
            name="Кроп-топ"
            sizes="S, M"
            composition="хлопок, полиэстер"
            colors="хаки, светлый серый"
            capsula="повседневная, спорт, отдых"
          />
          <ProductCartStandart
            className={styles["section-catalog__item"]}
            imgAttr={{ src: "/product-2.jpg", alt: "" }}
            name="Карго"
            sizes="S, M - оба размера в свободном формате оверсайз"
            composition="полиэстер"
            colors="болотный, светлый серый"
            capsula="спорт, отдых"
          />
          <ProductCartStandart
            className={styles["section-catalog__item"]}
            imgAttr={{ src: "/product-3.jpg", alt: "" }}
            name="Джоггеры"
            sizes="M, L, XL"
            composition="хлопок, полиэстер"
            colors="хаки, белый"
            capsula="повседневная, отдых, спорт"
          />
          <ProductCartStandart
            className={styles["section-catalog__item"]}
            imgAttr={{ src: "/product-4.jpg", alt: "" }}
            name="Боди"
            sizes="S, M, L"
            composition="полиэстер, спандекс"
            colors="черный + принт"
            capsula="повседневная, спорт"
          />
        </div>
        <div className={styles["section-catalog__btn"]}>
          <Button as={"a"} href="https://t.me/bellocloth" target="_blank">
            Cмотреть больше
          </Button>
        </div>
      </div>
    </section>
  );
}
