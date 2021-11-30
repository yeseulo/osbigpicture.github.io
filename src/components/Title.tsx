import { ForwardedRef, forwardRef } from "react";
import styled, { css } from "styled-components";

import { mq } from "utils/mq";
import { Language } from "../types";
import { TITLE } from "data";

type Props = {
  lang: Language;
  grid?: string;
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

const Title = forwardRef(
  ({ lang, grid }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <TitleContainer lang={lang} grid={grid} ref={ref}>
        <TitleText>{TITLE[lang]}</TitleText>
        <Timer>
          10,619 {UNIT[lang].days} 24 {UNIT[lang].hours} 60 {UNIT[lang].minutes}{" "}
          60
          {UNIT[lang].seconds}
        </Timer>
      </TitleContainer>
    );
  }
);

export default Title;

const TitleContainer = styled.header<{ grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  margin-top: ${(props) => (props.lang === "ko" ? `3rem` : `10rem`)};
  line-height: ${(props) => (props.lang === "ko" ? 1.5 : 1.2)};
  text-align: center;
  scroll-margin-top: 7rem;

  @media ${mq.tablet} {
    margin-top: 1.2rem;
    scroll-margin-top: 0;
  }
`;

const TitleText = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.2rem;
  font-weight: normal;

  @media ${mq.tablet} {
    font-size: 3.8rem;
  }
  @media ${mq.desktop} {
    font-size: 4rem;
  }
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
  font-size: 3.2rem;
  font-weight: normal;

  @media ${mq.tablet} {
    font-size: 3.8rem;
  }
  @media ${mq.desktop} {
    font-size: 4rem;
  }
`;
