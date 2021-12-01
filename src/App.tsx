import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import GlobalStyles from "components/GlobalStyles";
import Title from "components/Title";
import Download from "components/Download";

import { Language } from "types";
import { ABOUT, ARTICLE1, ARTICLE2, LANGUAGES } from "data";
import { mq } from "utils/mq";

const SCROLL_MARGIN_TOP = 71;

function App() {
  const koreanRef = useRef<HTMLDivElement>(null);
  const englishRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("ko");

  const onClickLanguage = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    lang: Language
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkScrollPosition = (posY: number) => {
      if (!englishRef.current) {
        return false;
      }

      if (posY >= englishRef.current.offsetTop - SCROLL_MARGIN_TOP) {
        setSelectedLanguage("en");
      } else {
        setSelectedLanguage("ko");
      }
    };

    let ticking = false;

    const onWindowScroll = () => {
      let posY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          checkScrollPosition(posY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <LanguageSelector>
        <Button
          selected={selectedLanguage === "ko"}
          onClick={() => onClickLanguage(koreanRef, "ko")}
        >
          {LANGUAGES.ko}
        </Button>
        <Button
          selected={selectedLanguage === "en"}
          onClick={() => onClickLanguage(englishRef, "en")}
        >
          {LANGUAGES.en}
        </Button>
      </LanguageSelector>
      <Container>
        <LanguageContainer grid="language_ko">{LANGUAGES.ko}</LanguageContainer>
        <Title lang="ko" grid="title_ko" ref={koreanRef} />
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
        <LanguageContainer grid="language_en">{LANGUAGES.en}</LanguageContainer>
        <Title lang="en" grid="title_en" ref={englishRef} />
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
  padding: 0rem 1rem 3.3rem;

  @media ${mq.tablet} {
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
    padding: 1rem 2rem 6rem;
    max-width: 164rem;
    margin: 0 auto;
  }

  @media ${mq.desktop} {
    padding-bottom: 12rem;
  }
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
          margin-top: 4rem;
          padding-left: 11.76%;

          @media ${mq.tablet} {
            margin-top: 5rem;
            padding-left: 32.75%;
          }
          @media ${mq.desktop} {
            padding-left: 50%;
          }
        `
      : css``};

  font-size: 1.8rem;
  font-weight: normal;
  line-height: ${(props) => (props.lang === "ko" ? 1.6667 : 1.3333)};

  ${(props) =>
    props.lined
      ? css`
          position: relative;
          margin-top: 4rem;
          padding-top: 4rem;
          @media ${mq.tablet} {
            margin-top: 5rem;
            padding-top: 5rem;
          }

          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: -1rem;
            right: -1rem;
            height: 0;
            border-top: 1px solid #000;

            @media ${mq.tablet} {
              left: ${props.right ? `-2rem` : 0};
              right: ${props.right ? 0 : `-2rem`};
            }
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
  display: none;
  ${(props) =>
    props.grid
      ? css`
          grid-area: ${props.grid};
        `
      : css``};
  font-size: 1.8rem;
  line-height: 1.66667;
  text-transform: uppercase;

  @media ${mq.tablet} {
    display: block;
  }
`;

const LanguageSelector = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;

  @media ${mq.tablet} {
    display: none;
  }
`;

const Button = styled.button<{ selected?: boolean }>`
  display: block;
  width: 50%;
  padding: 1rem 1rem 1.2rem;
  color: #000;
  font-size: 1.8rem;
  line-height: 1;
  background: #fff;
  text-align: left;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          color: #fff;
          background-color: #000;
        `
      : ``}
  border: 0;
  border-radius: 0;
`;
