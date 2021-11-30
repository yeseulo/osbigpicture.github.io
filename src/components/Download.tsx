import styled, { css } from "styled-components";

import { Language } from "types";
import { mq } from "utils/mq";
import { DOWNLOAD_LABEL, STANDARD } from "data";

type Props = {
  lang: Language;
  grid?: string;
};

const Download = ({ lang, grid }: Props) => {
  return (
    <DownloadContainer grid={grid}>
      <Standard>{STANDARD[lang]}</Standard>
      <Button disabled lang={lang}>
        {DOWNLOAD_LABEL[lang]}
      </Button>
    </DownloadContainer>
  );
};

export default Download;

const DownloadContainer = styled.div<{ grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  margin-top: 1.9rem;
  margin-bottom: 5rem;

  @media ${mq.tablet} {
    margin-top: 1.8rem;
    margin-bottom: 7rem;
  }
`;

const Standard = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  line-height: 1.67;
  text-align: center;

  @media ${mq.tablet} {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

const Button = styled.button<{
  lang: Language;
  disabled?: boolean;
}>`
  display: block;
  margin: 0 auto;
  padding: ${(props) =>
    props.lang === "ko" ? `1.3rem 2.5rem` : `1.4rem 2.2rem 1.2rem`};
  color: #ddd;
  font-size: 3.2rem;
  line-height: 1;
  border: 1px solid #ddd;
  background: none;
  border-radius: 0;

  @media ${mq.tablet} {
    font-size: 3.6rem;
    padding: ${(props) =>
      props.lang === "ko" ? `1.9rem 3rem` : `1.9rem 3rem`};
  }

  @media ${mq.desktop} {
    font-size: 4rem;
    padding: ${(props) =>
      props.lang === "ko" ? `1.9rem 3.5rem` : `1.8rem 3.5rem 2rem`};
  }

  &:disabled {
    background-color: transparent;
    cursor: pointer;
  }

  &:hover {
    color: #fff;
    background-color: #ddd;
  }
`;
