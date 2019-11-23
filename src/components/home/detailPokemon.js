import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../uikit/flex";
import PokemonDetailCard from "../../uikit/ detailCard";
import Layout from "../layout";
import Header from "./header";
import Footer from "./footer";
import IFRender from "../../lib/ifrender";
import {
  useParams
} from "react-router-dom";
import Loading from "../../uikit/loading"
import { queryGQLPokemon } from "../../config/schema"

function PokemonDetail({ data }) {
  return data.map(item => {
    return (
      <PokemonDetailCard
        key={item.id}
        image={item.image}
        imageAlt={item.name}
        title={item.name}
        fastAttack={item.attacks}
        specialAttack={item.attacks}
        maxHP={item.maxHP}
        classification={item.classification}
        maxCP={item.maxCP}
        resistant={item.resistant}
        weaknesses={item.weaknesses}
        types={item.types}
      />
    );
  });
}

function getDetailData(id, setData){
  axios({
    url: "https://graphql-pokemon.now.sh/",
    method: "post",
    data: {
      query: queryGQLPokemon(id)
    }
  }).then(result => {
    setData([result.data.data.pokemon]);
  });
}

function PokemonDetailList() {
  let { id } = useParams();
  const [data, setData] = useState('')
  const [fetching] = useState(true)

  useEffect(() => {
    getDetailData(id, setData)
  }, [id]);

  const title = "Pokemon List";

  return (
    <Layout
      title="Pokemon List"
      navigation={{
        component: <Header variant="detail" title={title} />
      }}
      footer={{
        component: <Footer variant="pokemon-list" keyword={title} />
      }}
    >
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        <IFRender
          condition={data !== '' && fetching}
          ifComponent={
            <PokemonDetail data={data} />
          }
          elseComponent={
            <Loading />
          }
          />
      </Flex>
    </Layout>
  );
}

export default PokemonDetailList;
