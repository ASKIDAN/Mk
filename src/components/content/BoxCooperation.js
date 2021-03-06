import React, { useState } from "react";
import classnames from "classnames";
import InputMask from "react-input-mask";
import TitleText from "../Title";
import Text from "../Text";

import circl1 from "../../images/circleNumber1.png";
import circl2 from "../../images/circleNumber2.png";
import images from "../../images";

import styles from "./BoxCooperation.module.css";
import Button from "../Button/Button";

const Inputs = ({ active }) => (
  <div
    className={classnames(styles.wrap, {
      [styles.show]: active,
    })}
  >
    <div className={styles.inputs}>
      <Text className={styles.clFont}> {"Ваше имя"} </Text>
      <input className={styles.input} type="text" />
      <Text className={styles.clFont}> {"Телефон для связи"} </Text>
      <InputMask
        className={styles.input}
        placeholder="+375 (XX)XXX-XX-XX"
        mask="+375 (99)999-99-99"
        maskChar="_"
      />
    </div>
    <Text>
      {
        "Нажимая на кнопку «Получить консультацию», вы соглашаетесь с условиями  Политики конфиденциальности "
      }
    </Text>
    <Button className={styles.buttonMargin}>{"Получить консультацию"}</Button>
  </div>
);

const BoxCooperation = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.boxs}>
      <div className={styles.boxOne}>
        <TitleText className={styles.clFontSize40}>
          {"Организация сотрудничества"}
        </TitleText>
        <div className={styles.circleOne}>
          <img src={circl1} alt="" width="70px" height="70px" />
          <Text className={styles.clmaxWidth400}>
            {
              "Установив контакт с нашим сотрудником, Вы оговорите нюансы предмета обсуждения и согласуете личную встречу."
            }
          </Text>
        </div>
        <div className={styles.circleTwo}>
          <img src={circl2} alt="" width="70px" height="70px" />
          <Text className={styles.clmaxWidth400}>
            {
              "Юрист изучит документы, необходимые для разработки стратегии решения возникшей ситуации. И заключит договор."
            }
          </Text>
        </div>
        <Text className={styles.clMaxWidth500}>
          {
            "Также в нашей компании возможна удаленная форма обслуживания с оказанием полного комплекса юридических услуг в РБ через современные средства связи и мессенджеры."
          }
        </Text>
      </div>
      <div className={styles.boxTwo}>
        <div className={styles.display}>
          <div className={styles.mobileV}>
            <Text> {"Заполнить форму"} </Text>
            <img
              onClick={() => setActive(!active)}
              src={images.arrowLeft}
              alt=""
              className={classnames(styles.arrow, {
                [styles.arrowActive]: !active,
              })}
              height="13px"
              width="13px"
            />
          </div>
        </div>
        {active ? <Inputs active={active} /> : <Inputs />}
      </div>
    </div>
  );
};

export default BoxCooperation;
