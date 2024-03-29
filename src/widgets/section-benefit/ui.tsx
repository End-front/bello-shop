import clsx from "clsx";

import styles from "./styles.module.scss";

import { Title, Text } from "@/shared/ui";

import { SVG_1, SVG_2, SVG_3 } from "./svg";

export type SectionBenefitProps = {};

export function SectionBenefit() {
  return (
    <section id="section-benefit" className={clsx(styles["section-benefit"])}>
      <div className={clsx("container", styles["section-benefit__container"])}>
        <Title as="h2" size="big" className={styles["section-benefit__title"]}>
          оплата и доставка
        </Title>
        <div className={styles["section-benefit__wrapper"]}>
          <div className={styles["section-benefit__item"]}>
            <div className={styles["section-benefit__icon"]}>{SVG_1}</div>
            <Text
              size="large"
              weight={300}
              className={styles["section-benefit__text"]}
            >
              Предоплата 100%
              <br />
              Оплатить можно счетом любого банка по платёжной ссылке или
              qr-коду.
              <br />
              Вам будет выписан чек об успешной операции.
              <br />
              Мы начнем собирать заказ и отправим вам в ближайшее время.
            </Text>
          </div>
          <div className={styles["section-benefit__item"]}>
            <div className={styles["section-benefit__icon"]}>{SVG_2}</div>
            <Text
              size="large"
              weight={300}
              className={styles["section-benefit__text"]}
            >
              Доставка по Казани осуществляется БЕСПЛАТНО!
              <br />
              Доставку по России вы можете получить с помощью сервисов:OZON,
              СДЭК.
              <br />
              Стоимость доставка зависит от вашего региона.
            </Text>
          </div>
          <div className={styles["section-benefit__item"]}>
            <div className={styles["section-benefit__icon"]}>{SVG_3}</div>
            <Text
              size="large"
              weight={300}
              className={styles["section-benefit__text"]}
            >
              Возврат и обмен осуществляется в течение недели с момента
              получения заказа.
              <br />
              Бланк с инструкцией по возврату и обмену прилагается к каждому
              заказу.
              <br />
              Заказ не должен быть использован и сохранил товарный вид, бирки и
              упаковку.
              <br />
              Расходы по обмену и возврату товара несет покупатель.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
