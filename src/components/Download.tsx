import styled, { css } from "styled-components";
import { Language } from "types";

type Props = {
  lang: Language;
  grid?: string;
};

const LABEL = {
  ko: "서체 다운로드",
  en: "Download typeface",
};

const STANDARD = {
  ko: "한국 표준시",
  en: "KST",
};

const Download = ({ lang, grid }: Props) => {
  console.log(lang);

  return (
    <DownloadContainer grid={grid}>
      <Standard>{STANDARD[lang]}</Standard>
      <Button disabled lang={lang}>
        {LABEL[lang]}
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
  margin-top: 2rem;
  margin-bottom: 7rem;
`;

const Standard = styled.div`
  margin-top: 1.8rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  line-height: 1.67;
  text-align: center;
`;

const Button = styled.button<{
  lang: Language;
  disabled?: boolean;
}>`
  display: block;
  margin: 0 auto;
  padding: ${(props) =>
    props.lang === "ko" ? `1.9rem 3.5rem` : `1.8rem 3.5rem 2rem`};
  color: #ddd;
  font-size: 4rem;
  line-height: 1;
  border: 1px solid #ddd;

  &:disabled {
    background-color: transparent;
    cursor: pointer;
  }

  &:hover {
    color: #fff;
    background-color: #ddd;
  }
`;
