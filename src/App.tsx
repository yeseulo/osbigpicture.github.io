import GlobalStyles from "components/GlobalStyles";
import styled, { css } from "styled-components";
import Title from "components/Title";
import Download from "components/Download";
import { Language } from "types";
import { ABOUT, ARTICLE1, ARTICLE2 } from "data";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <LanguageContainer grid="language_ko">한국어</LanguageContainer>
        <Title lang="ko" grid="title_ko" />
        <Download lang="ko" grid="download_ko" />
        <Article
          lang="ko"
          grid="article1_ko"
          dangerouslySetInnerHTML={{ __html: ARTICLE1.ko }}
        />
        <Article
          lang="ko"
          grid="article2_ko"
          lined
          dangerouslySetInnerHTML={{ __html: ARTICLE2.ko }}
        />
        <Article
          lang="ko"
          grid="about_ko"
          half
          dangerouslySetInnerHTML={{ __html: ABOUT.ko }}
        />
        <LanguageContainer grid="language_en">English</LanguageContainer>
        <Title lang="en" grid="title_en" />
        <Download lang="en" grid="download_en" />
        <Article
          lang="en"
          grid="article1_en"
          dangerouslySetInnerHTML={{ __html: ARTICLE1.en }}
        />
        <Article
          lang="en"
          grid="article2_en"
          lined
          right
          dangerouslySetInnerHTML={{ __html: ARTICLE2.en }}
        />
        <Article
          lang="en"
          grid="about_en"
          half
          dangerouslySetInnerHTML={{ __html: ABOUT.en }}
        ></Article>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "language_ko language_en"
    "title_ko title_en"
    "download_ko download_en"
    "article1_ko article1_en"
    "article2_ko article2_en"
    "about_ko about_en";
  column-gap: 4rem;
  padding: 1rem 2rem 5rem;
  max-width: 164rem;
  margin: 0 auto;
`;

const Article = styled.article<{
  lang: Language;
  grid?: string;
  half?: boolean;
  lined?: boolean;
  right?: boolean;
}>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};

  ${(props) =>
    props.half
      ? css`
          margin-top: 5rem;
          padding-left: 50%;
        `
      : css``};

  font-size: 1.8rem;
  font-weight: normal;
  line-height: ${(props) => (props.lang === "ko" ? 1.6667 : 1.3333)};

  ${(props) =>
    props.lined
      ? css`
          position: relative;
          margin-top: 5rem;
          padding-top: 5rem;

          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: ${props.right ? `-2rem` : 0};
            right: ${props.right ? 0 : `-2rem`};
            height: 0;
            border-top: 1px solid #000;
          }
        `
      : css``};

  p {
    margin-top: ${(props) => (props.lang === "ko" ? `3rem` : `2.4rem`)};
    margin-bottom: 0;
    &:first-child {
      margin-top: 0;
    }
  }
`;

const LanguageContainer = styled.div<{ grid?: string }>`
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  font-size: 1.8rem;
  line-height: 1.66667;
  text-transform: uppercase;
`;
