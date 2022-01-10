import React from "react";
import styled from "styled-components";
import Card from "./Card";
import fluidCards from "../../../data/fluidCards";

const CardContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FluidCards = () => {
  return (
    <CardContainer>
      <Card
        src={process.env.PUBLIC_URL + "card/main_card1.png"}
        title={fluidCards.morningDelivery.title}
        text={fluidCards.morningDelivery.text}
      />
      <Card
        src={process.env.PUBLIC_URL + "card/main_card2.png"}
        title={fluidCards.freight.title}
        text={fluidCards.freight.text}
      />
      <Card
        src={process.env.PUBLIC_URL + "card/main_card3.jpg"}
        title={fluidCards.fullfillment.title}
        text={fluidCards.fullfillment.text}
      />
      <Card
        src={process.env.PUBLIC_URL + "card/main_card4.jpg"}
        title={fluidCards.grocery.title}
        text={fluidCards.grocery.text}
      />
    </CardContainer>
  );
};

export default FluidCards;
