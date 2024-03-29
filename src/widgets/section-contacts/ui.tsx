import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

import { Title, Button } from "@/shared/ui";

export type SectionContactsProps = {};

export function SectionContacts() {
  return (
    <section id="section-contacts" className={styles["section-contacts"]}>
      <div className={clsx("container", styles["section-contacts__container"])}>
        <Title size="big" className={styles["section-contacts__title"]}>
          контакты
        </Title>
        <div className={styles["section-contacts__row"]}>
          <div className={styles["section-contacts__left"]}>
            <div className={styles["section-contacts__qr"]}>
              <div className={styles["section-contacts__qr__title"]}>
                мы на OZON
              </div>
              <Image src="/qr-code-ozon.svg" width={280} height={280} alt="" />
            </div>
          </div>
          <Button
            as={"a"}
            href=""
            target="_blank"
            className={styles["section-contacts__right-btn-mob"]}
          >
            Смотреть OZON
          </Button>
          <div className={styles["section-contacts__right"]}>
            <div className={styles["section-contacts__qr"]}>
              <div className={styles["section-contacts__qr__title"]}>
                Telegram
              </div>
              <Image
                src="/qr-code-telegram.svg"
                width={280}
                height={280}
                alt=""
              />
            </div>
            <div className={styles["section-contacts__right__btns"]}>
              <Button
                as={"a"}
                href="https://www.ozon.ru/seller/bello-1709503/products/?miniapp=seller_1709503"
                target="_blank"
              >
                Смотреть OZON
              </Button>
              <Button as={"a"} href="https://t.me/bellocloth" target="_blank">
                Смотреть TG
              </Button>
              <Button
                as={"a"}
                href="https://t.me/Bellostoreadmin"
                target="_blank"
              >
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
