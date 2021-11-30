import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled, { css } from "styled-components";

import { mq } from "utils/mq";
import { Language } from "../types";
import { TITLE } from "data";
import useInterval from "hooks/useInterval";

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

const D_DAY: Date = new Date("2050-12-09:00:00:00+0900");
const TIME_DIFF_KST = 9 * 60 * 60 * 1000;

const Title = forwardRef(
  ({ lang, grid }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const [timer, setTimer] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    const getTime = useCallback(() => {
      let today: Date = new Date();
      const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000;
      today = new Date(utc + TIME_DIFF_KST);

      const gap: number = D_DAY.getTime() - today.getTime();

      const days: number = Math.floor(gap / 1000 / 60 / 60 / 24);
      const hours: number = Math.floor(gap / 1000 / 60 / 60) % 24;
      const minutes: number = Math.floor((gap / 1000 / 60) % 60);
      const seconds: number = Math.floor((gap / 1000) % 60);

      setTimer({
        days,
        hours,
        minutes,
        seconds,
      });
    }, [setTimer]);

    useEffect(() => {
      getTime();
    }, [getTime]);

    useInterval(() => {
      getTime();
    }, 1000);

    return (
      <TitleContainer lang={lang} grid={grid} ref={ref}>
        <TitleText>{TITLE[lang]}</TitleText>
        <Timer>
          <span>
            {timer.days.toLocaleString("ko-KR")} {UNIT[lang].days}
          </span>{" "}
          <span>
            {timer.hours} {UNIT[lang].hours}
          </span>{" "}
          <span>
            {timer.minutes} {UNIT[lang].minutes}
          </span>{" "}
          <span>
            {timer.seconds} {UNIT[lang].seconds}
          </span>
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

  span {
    display: inline-block;
  }
`;
