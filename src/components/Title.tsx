import styled, { css } from "styled-components";
import { Language } from "../types";

type Props = {
  title: string;
  lang: Language;
  grid?: string;
};

const Title = ({ title, lang, grid }: Props): React.ReactElement => {
  return (
    <TitleContainer lang={lang} grid={grid}>
      {title}
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.h1<{ lang: Language; grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  font-size: 4rem;
  font-weight: normal;
  line-height: ${(props) => (props.lang === "ko" ? 1.35 : 1.2)};
  text-align: center;
`;
