import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../uikit/flex";
import PokemonSmallCard from "../../uikit/smallCard";
import Layout from "../layout";
import Header from "./header";
import Footer from "./footer";
import IFRender from "../../lib/ifrender";
import {
  useParams
} from "react-router-dom";
import Loading from "../../uikit/loading"

function PokemonDetail({ data }) {
  return data.map(item => {
    return (
      <PokemonSmallCard
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
      query: `
        query pokemon{
          pokemon(id: "${id}") {
            id
            name
            number
            classification
            types
            resistant
            attacks {
              fast {
                name
                type
                damage
              }
              special {
                name
                type
                damage
              }
            }
            weaknesses
            fleeRate
            maxCP
            evolutions {
              id
              number
            }
            evolutionRequirements{
              amount
              name
            }
            maxHP
            image
          }
        }
      `
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
