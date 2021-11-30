import styled, { css } from "styled-components";
import { Language } from "../types";

type Props = {
  lang: Language;
  grid?: string;
};

const TITLE = {
  ko: "서체를 다운받기 위해 남은 시간",
  en: "The typeface will be available in",
};

const UNIT = {
  ko: {
    days: "일",
    hours: "시간",
    minutes: "분",
    seconds: "초",
  },
  en: {
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
  },
};

const Title = ({ lang, grid }: Props): React.ReactElement => {
  return (
    <TitleContainer lang={lang} grid={grid}>
      <TitleText>{TITLE[lang]}</TitleText>
      <Timer>
        10,619 {UNIT[lang].days} 24 {UNIT[lang].hours} 60 {UNIT[lang].minutes}{" "}
        60
        {UNIT[lang].seconds}
      </Timer>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.header<{ grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  line-height: ${(props) => (props.lang === "ko" ? 1.5 : 1.2)};
  text-align: center;
`;

const TitleText = styled.h1`
  margin-top: 1.2rem;
  margin-bottom: 0;
  font-size: 4rem;
  font-weight: normal;
`;

const Timer = styled.h2<{ grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};

  margin-top: 0;
  margin-bottom: 0;
  font-size: 4rem;
  font-weight: normal;
`;
