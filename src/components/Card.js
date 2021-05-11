import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <div>
      <SpaceCard>
        <Image src={props.image}></Image>
        <Content>
          <SpaceName>
            {props.space_name} #<span>{props.ranking}</span>
          </SpaceName>
          <Items>
            <Name>Mission Ids:</Name>
            {props.mission_ids < 0 ? null : <Value>{props.mission_ids}</Value>}
          </Items>
          <Items>
            <Name>Launch Year:</Name>
            <Value>{props.launch_year}</Value>
          </Items>
          <Items>
            <Name>Successful Launch:</Name>
            <Value>{props.success_launch ? "true" : "false"}</Value>
          </Items>
          <Items>
            <Name>Successful Landing:</Name>
            <Value>{props.success_landing ? "true" : "false"}</Value>
          </Items>
        </Content>
      </SpaceCard>
    </div>
  );
};

export default Card;

const SpaceCard = styled.div`
  background-color: #ffffff;
  padding: 20px 20px 30px 20px;
  margin: 0px 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  @media (max-width: 700px) {
    width: 300px;
  }
`;

const Image = styled.img`
  width: 210px;
  background-color: #f2f2f2;
  padding: 0px 10px;
  align: center;
  margin: auto;
`;
const SpaceName = styled.p`
  font-weight: 700;
  color: #5a6090;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const Items = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-content: 700px) {
    padding-left: 100px;
  }
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 10pt;
`;

const Value = styled.p`
  font-size: 10pt;
  margin-left: 4px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    padding-left: 13px;
  }
`;
