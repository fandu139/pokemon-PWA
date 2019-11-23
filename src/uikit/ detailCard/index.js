// @flow
import * as React from "react";
import Paragraph from "../paragraph";
import theme from "../../config/styleConst";
import styled from "styled-components";
import Flex from "../flex";
import Card from "../card";
import Image from "../image";

const StyledCard = styled(Card)`
  background: ${theme.colors.orange};
  display: flex;
  padding: 0.5rem;
`;

const ImageWrapper = styled(Flex)`
  background: ${theme.colors.white_1};
  border: 1px solid ${props => theme.colors.gray_light_alt};
  width: auto
  height: auto;
  position: relative;
  overflow: hidden;
`;

const DetailsWrapper = styled.div`
  flex: 1;
  position: absolute;
  margin-left: ${"8dp"};
`;

const PokemonNameWrapper = styled.div`
  height: ${"30dp"};
  margin-bottom: ${"8dp"};
  overflow: hidden;

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-line;
  }
`;

const StyleGroupText = styled.div`
  height: calc(${"16sp"} + ${"10sp"} + ${"12dp"});
  margin-bottom: ${"2dp"};
`;

const StyledTextArea = styled.span`
  margin-left: ${"4dp"};
  font-size: ${props => props.fontSize};
  color: ${props => theme.colors.red};
  font-weight: normal;
`;

/**
 * @param {String} props.image
 * @param {String} props.imageAlt
 * @param {String} props.title
 * @param {Number} props.fastAttack
 * @param {Number} props.specialAttack
 * @param {Number} props.maxHP
 * @return {React.Node}
 */
function DetailCard({
  id,
  image,
  imageAlt,
  title,
  fastAttack,
  specialAttack,
  maxHP,
  maxCP,
  classification,
  resistant,
  weaknesses,
  types
}) {

  return (
    <StyledCard data-testid="pokemon-data-list">
      <ImageWrapper justifyContent="center" alignItems="center">
        <Image source={image} alt={imageAlt} width={'100%'} />
      </ImageWrapper>
      
      <DetailsWrapper>
        <PokemonNameWrapper>
          <Paragraph fontSize={"20px"}>{title}</Paragraph>
        </PokemonNameWrapper>

        <StyleGroupText>
          <Paragraph
            fontColor={theme.colors.orange}
            fontSize={"16px"}
            fontWeight="bold"
          >
            {'Max HP '+maxHP}
          </Paragraph>
          <Paragraph
            fontColor={theme.colors.orange}
            fontSize={"16px"}
            fontWeight="bold"
          >
            {'Max CP '+maxCP}
          </Paragraph>
          <Flex alignItems="center">
            <StyledTextArea fontSize={("10px", "rem")}>
              {classification}
            </StyledTextArea>
          </Flex>
          <Paragraph
            fontColor={theme.colors.red}
            fontSize={"16px"}
            fontWeight="bold"
          >
            {'Type '+types.join(', ')}
          </Paragraph>
        </StyleGroupText>
      </DetailsWrapper>
    </StyledCard>
  );
}


DetailCard.defaultProps = {
  image: '',
  imageAlt: 'No Image',
  title: 'No Description',
  fastAttack: {},
  specialAttack: {},
  maxHP: 0
};

export default DetailCard;
