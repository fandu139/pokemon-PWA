import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../uikit/flex";
import PokemonSmallCard from "../../uikit/smallCard";
import Layout from "../layout";
import Header from "./header";
import Footer from "./footer";
import IFRender from "../../lib/ifrender";
import ButtonCostum from "../../uikit/button"
import Loading from "../../uikit/loading"
import Filter from "./filter"
import { queryGQL } from "../../config/schema"

function ListCard({ data }) {
  return data.map(item => {
    return (
      <PokemonSmallCard
        key={item.id}
        id={item.id}
        image={item.image}
        imageAlt={item.name}
        title={item.name}
        fastAttack={item.attacks}
        specialAttack={item.attacks}
        maxHP={item.maxHP}
        maxCP={item.maxCP}
        classification={item.classification}
        resistant={item.resistant}
        weaknesses={item.weaknesses}
        types={item.types}
      />
    );
  });
}

function getData({page, setData, setDataFilter, setCategory}) {
  const totalData = page * 10;
  axios({
    url: "https://graphql-pokemon.now.sh/",
    method: "post",
    data: {
      query: queryGQL(totalData)
    }
  }).then(result => {
    setData(result.data.data.pokemons);
    setDataFilter(result.data.data.pokemons)
  });
}

function PokemonList({ match }) {
  const [data, setData] = useState('')
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')
  const [dataFilter, setDataFilter] = useState('')

  useEffect(() => {
    getData({page, setData, setDataFilter, setCategory})
  }, [page]);

  function handleAddItem() {
    setPage(page + 1)
  }

  const title = "Pokemon List";

  return (
    <Layout
      title="Pokemon List"
      navigation={{
        component: <Header variant="detail" title={title} />
      }}
      footer={{
        component: 
        <Footer 
          variant="pokemon-list" 
          keyword={title} 
          dataFilter={dataFilter} 
          data={data} 
          setData={setData} 
          category={category} 
          setCategory={setCategory} 
        />
      }}
    >
      <IFRender
        condition={category !== ''}
        ifComponent={
          <Filter 
            dataCategory={category} 
            data={data} 
            setData={setData} 
            dataFilter={dataFilter} 
            setDataFilter={setDataFilter}
          />
        }
      />
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        <IFRender
          condition={data !== ''}
          ifComponent={
            <ListCard data={data} />
          }
          elseComponent={
            <Loading />
          }
        />
      </Flex>
      <IFRender
        condition={data !== ''}
        ifComponent={
          <ButtonCostum typeVarian="success" press={handleAddItem} titleButton={"Add Item"}/>
        }
      />
    </Layout>
  );
}

export default PokemonList;
