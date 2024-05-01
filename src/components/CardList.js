import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import { getCards } from "../api/cardListApi";

const CardListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
// await는 기다려라임
const CardList = () => {
  const [cards, setCards] = useState([]); // 초기 값은 [](빈 비열)이다

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards(); // 함수 호출한거임
        console.log(data);
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // 외부에서 이 함수를 호출해야함
  }, []); // 의존성 배열에 아무것도 안적으면 한번만 실행됨

  return (
    <CardListStyle>
      {cards.map(card => (
        <Card
          key={card.id}
          imgPath={card.imgPath}
          title={card.title}
          tags={card.tags}
          id={card.id}
        />
      ))}
    </CardListStyle>
  );
};

export default CardList;
