import React from "react";

import Text from "../Text";
import TitleText from "../Title";

import images from "../../images";

import styles from "./BoxAdvantages.module.css";

const DATA = [
  {
    img: images.advan1,
    text: "Лицензия на оказание юридических услуг",
  },
  {
    img: images.advan2,
    text: "Опытные сотрудники",
  },
  {
    img: images.advan3,
    text:
      "Коммуникативные навыки – без труда открываем любые двери и быстро решаем нужные вопросы",
  },
  {
    img: images.advan4,
    text: "Скрупулезный поход к ведению документации",
  },
];

const Box = ({ img, text }) => (
  <div className={styles.box}>
    <img src={img} alt="" height="130px" width="230px" />
    <Text className={styles.clmaxWidth230}>{text}</Text>
  </div>
);

const BoxAdvantages = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <TitleText className={styles.clMargin}> {"Наши преимущества"} </TitleText>
      <div className={styles.boxs}>
        {data.map((i, imdex) => (
          <Box key={imdex} img={i.img} text={i.text} />
        ))}
      </div>
      <div className={styles.boxfooter}>
        <img src={images.treangle} alt="" />
        <Text className={styles.clmaxWidth730}>
          {
            "Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай."
          }
        </Text>
      </div>
    </div>
  );
};

const BoxAdvantagesContainer = (props) => {
  const [state, setState] = useSate(DATA);
  useEffect(() => {
    // 1. make reuest
    // 2. setState(response)
  }, []);
  return <BoxAdvantages data={state} {...props} />
};

export default BoxAdvantagesContainer;
