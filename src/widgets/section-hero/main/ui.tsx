import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

import { SVG_BASKET, SVG_LOGO } from "../svg";

export type SectionHeroWithMenuProps = {};

export function SectionHeroWithMenu() {
  return (
    <section className={styles["section-hero"]}>
      <div className={clsx("container", styles["section-hero__container"])}>
        <div className={styles["section-hero__left"]}>
          <header className={styles["section-hero__left__header"]}>
            <nav>
              <Link href="" className="link-reset">
                {SVG_BASKET}
              </Link>
              <a href="#section-catalog" className="link-reset">
                КАТАЛОГ
              </a>
              <a href="#section-benefit" className="link-reset">
                ОПЛАТА И ДОСТАВКА
              </a>
              <a href="#section-contacts" className="link-reset">
                КОНТАКТЫ
              </a>
            </nav>
          </header>
          <div className={styles["section-hero__left__logo"]}>{SVG_LOGO}</div>
        </div>
        <div className={styles["section-hero__right"]}>
          <Image
            src="/background-section-hero.jpg"
            alt=""
            priority={true}
            fill={true}
          />
        </div>
      </div>
    </section>
  );
}
