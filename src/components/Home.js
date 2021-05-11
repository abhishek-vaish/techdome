import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const Home = () => {
  const year = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  var [value, setValue] = useState({
    year: null,
    launch: null,
    landing: null,
  });

  const buttonYear = (new_value) => {
    setValue({ ...value, year: new_value.target.innerText });
  };

  const buttonlaunch = (new_value) => {
    var convert_value = true;
    if (new_value.target.innerText === "False") {
      convert_value = false;
    }
    setValue({ ...value, launch: convert_value });
  };
  const buttonlanding = (new_value) => {
    var convert_value = true;
    if (new_value.target.innerText === "False") {
      convert_value = false;
    }
    setValue({ ...value, landing: convert_value });
  };

  var [data, setData] = useState([]);
  let url = "https://api.spacexdata.com/v3/launches?limit=100";
  const fetchData = (landing, launch, year) => {
    console.log(year, landing, launch);
    if (landing === null && launch === null && year === null) {
      data = null;
      fetch(url)
        .then((response) => response.json())
        .then((value) => setData(value));
    } else if (year !== null) {
      data = null;
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}`
      )
        .then((response) => response.json())
        .then((value) => setData(value));
    } else if (landing !== null) {
      data = null;
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_landing=${landing}`
      )
        .then((response) => response.json())
        .then((value) => setData(value));
    } else if (launch !== null) {
      data = null;
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launch}}`
      )
        .then((response) => response.json())
        .then((value) => setData(value));
    } else if (launch !== null && landing !== null) {
      data = null;
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launch}&launch_landing=${landing}`
      )
        .then((response) => response.json())
        .then((value) => setData(value));
    } else {
      data = null;
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launch}&launch_landing=${landing}&launch_year=${year}`
      )
        .then((response) => response.json())
        .then((value) => setData(value));
    }
  };

  useEffect(() => {
    fetchData(value.landing, value.launch, value.year);
  }, [value]);

  //   data.map((value) => console.log(value));

  return (
    <div>
      <HomePage>
        <Heading>SpaceX Launch Programs</Heading>
        <Section>
          <Filter>
            <Content>
              <FilterHeading>Filters</FilterHeading>
              <LaunchYear>
                <Head>Launch Year</Head>
                <Rectangle></Rectangle>
                <ButtonYear>
                  {year.map((value) => (
                    <Button onClick={buttonYear}>{value}</Button>
                  ))}
                </ButtonYear>
              </LaunchYear>
              <SuccessfulLaunch>
                <Head>Successful Launch</Head>
                <Rectangle></Rectangle>
                <ButtonYear>
                  <Button onClick={buttonlaunch}>True</Button>
                  <Button onClick={buttonlaunch}>False</Button>
                </ButtonYear>
              </SuccessfulLaunch>
              <SuccessfulLanding>
                <Head>Successful Landing</Head>
                <Rectangle></Rectangle>
                <ButtonYear>
                  <Button onClick={buttonlanding}>True</Button>
                  <Button onClick={buttonlanding}>False</Button>
                </ButtonYear>
              </SuccessfulLanding>
            </Content>
          </Filter>
          <MainData>
            <SpaceCard>
              {data.map((value) => {
                {
                  if (value.flight_number < 9) {
                    return (
                      <Card
                        space_name={value.mission_name}
                        image={value.links.mission_patch}
                        ranking={value.flight_number}
                        mission_ids={value.mission_id}
                        launch_year={value.launch_year}
                        success_launch={value.launch_success}
                        success_landing={
                          value.rocket.first_stage.cores[0].land_success
                        }
                      ></Card>
                    );
                  }
                }
              })}
            </SpaceCard>
            <DeveloperName>
              <Content2>Developed By:</Content2>
              <Name>Abhishek Vaish</Name>
            </DeveloperName>
          </MainData>
        </Section>
      </HomePage>
    </div>
  );
};

export default Home;

const HomePage = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`;

const Heading = styled.h1`
  margin-left: 30px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  height: 100%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.13;
  margin: 20px;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 40px;
  border-radius: 4px;
  height: max-content;

  @media (max-width: 700px) {
    margin: 20px 30px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const MainData = styled.div`
  display: flex;
  flex: 0.8;
  margin: 20px 10px 20px 20px;
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media (min-width: 700px) and (max-width: 1024px) {
    margin: 20px 0px 20px 0px;
  }
`;

const Content = styled.div``;

const FilterHeading = styled.h3``;

const LaunchYear = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
`;

const Head = styled.div`
  margin-bottom: 2px;
`;

const Rectangle = styled.div`
  width: 100px;
  height: 1px;
  background-color: #000000;
`;

const ButtonYear = styled.div`
  width: 160px;
`;

const Button = styled.button`
  border: none;
  background-color: #c4e099;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 3px 12px;
  border-radius: 4px;

  &:focus {
    background-color: #7bb901;
  }
`;

const SuccessfulLaunch = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
`;

const SuccessfulLanding = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
`;

const SpaceCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 30px 80px;

  @media (max-width: 700px) {
    grid-template-columns: none;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 250px 250px;
    grid-gap: 30px;
  }
`;

const DeveloperName = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const Content2 = styled.p`
  font-weight: 700;
`;
const Name = styled.p`
  margin-left: 3px;
`;
