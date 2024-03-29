import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

import { SVG_BASKET, SVG_LOGO } from "../svg";

export type SectionHeroCatalogWithMenuProps = {};

export function SectionHeroCatalogWithMenu() {
  return (
    <section className={styles["section-hero"]}>
      <div className={clsx("container", styles["section-hero__container"])}>
        <header className={styles["section-hero__header"]}>
          <nav>
            <Link href="" className="link-reset">
              {SVG_BASKET}
            </Link>
            <Link href="/catalog" className="link-reset">
              КАТАЛОГ
            </Link>
            <a href="#section-benefit" className="link-reset">
              ОПЛАТА И ДОСТАВКА
            </a>
            <a href="#section-contacts" className="link-reset">
              КОНТАКТЫ
            </a>
          </nav>
        </header>
      </div>
    </section>
  );
}
