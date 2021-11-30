import GlobalStyles from "components/GlobalStyles";
import styled, { css } from "styled-components";
import Title from "components/Title";
import { Language } from "types";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title
          lang="ko"
          title="서체를 다운받기 위해 남은 시간"
          grid="title_ko"
        />
        <Article lang="ko" grid="article1_ko">
          상호작용을 위한 언어 사용—예를 들어, 대화나 편지교환—은 일종의 거리
          재기에서 시작됩니다. 측정된 심리적·관계적 거리에 따라 단어의 선택과
          용법이 달라집니다. 가령 한국말은 높임말과 반말의 구별이 중요하고
          대부분 첫 대화에서는 상대를 높이는 것이 일반적인데, 이는 자연스럽게
          적당한 거리를 만들어 어떤 오해의 여지를 줄이는 데 도움이 되기
          때문입니다. 흔히 말하는 ‘선을 넘지 않음’의 미덕은 이러한 거리 재기와
          관련이 있습니다. 이런 점을 생각하며 어떤 대화의 녹취록을 읽어 본다면
          등장인물 간의 거리를 쉽게 짐작할 수 있습니다. 인물 간의 관계를
          짐작하거나 대화에 등장하는 특정 용어나 단어, 주제 등을 통해 이 대화가
          언제쯤 일어났는지 추측할 수 있으며, 대화와 녹취록을 읽는 시간적 거리도
          측정할 수 있습니다. 특정 시대에 사용되었던 은어, 유행어를 눈치챌 수
          있다면 말이죠. 집단에 속했거나 어떠한 약속을 공유한 관계에서만 소통
          가능한 언어 사용법도 있습니다. 특정 사이(거리)에서만 사용할 수 있는
          호칭, 해석의 방법을 모르면 전혀 다르게 읽힐 수 있는 단어들은 더욱
          정확한 거리측정이 요구됩니다. 글씨를 디자인하는 일, 포스터나
          웹사이트를 디자인하는 일에도 거리 재기는 중요합니다. 각 요소 간의
          거리를, 각 거리 간의 관계를 정의하는 일은 가장 핵심적인 과제 중
          하나입니다. 작가의 거북목은 이런 행위의 반복에 기인합니다. 실눈을 뜨고
          보기도 하고 멀리 떨어져 보기도 하지만 크기를 줄였다 키우기를
          반복하면서도 모니터에 눈을 가까이 가져가는 습관은 버리기 힘듭니다.
          가까워야 알수 있는 것이 있고, 멀어져야 비로소 보이는 것이 있다는 말은
          많은 이들이 공감하는 표현이지만, 대부분은 가까이 보기를, 가까운 사이가
          되어 서로에 대해 조금 더 알고 알아주기를 바라는 경우가 많은 것
          같습니다. 모니터 위에서 줌인(zoom in)이 크기만 키우는 것이 아니라
          가까이 가는 것이라면, 그것을 통해 전에는 보지 못했던 것을 볼 수
          있다면, 그리하여 그때 그 사람의 말을 더 잘 이해할 수 있었다면 적당한
          거리의 ‘적당함’은 바뀔 수 있을까요?
        </Article>
        <Article lang="ko" grid="article2_ko" lined>
          ‘보고 있어도 보고 싶은~ 보고 있어도 보고 싶은~’. 1996년 KBS에서 방영된
          드라마 〈첫사랑〉에서 주정남(손현주)은 연인 성찬옥(송채환)에게 노래를
          만들어 사랑하는 마음을 전합니다. 슬프고 경쾌한 멜로디에 애틋한 가사로
          부른 이 세레나데는 실제 드라마 밖에서도 적지 않은 인기를 누렸습니다.
          2020년 팬데믹이 선언된 이후 화상통화와 화상회의는 순식간에 우리의
          일상이 되었습니다. 드라마 방영 약 25년 후 ‘보고 있어도 보고 싶다’는
          가사는 연인에 대한 마음을 낭만적으로 표현한 사랑 노래일 뿐 아니라 우
          리의 현실을 있는 그대로 보여주는 가장 정확한 표현이 되었습니다. 어느새
          일상이 된 화상통화는 과거 공상과학 영화·소설 등에서 우리가 가장 흔하게
          상상하던 대표적 미래 기술 중 하나였습니다. 화상통화의 일상화는 코로나
          창궐 훨씬 이전의 일이고 선택적으로 사용되던 기술이었습니다. 한창
          기술이 대중화되던 시기에도 우리는 과거 상상속 모습이나 에스에프 영화의
          장면을 빌려 이 기술을 선진적이고 친근한 것으로 여겼습니다. 코로나가
          창궐하기 직전까지도 일은 대부분 이메일 혹은 실제 만남을 통해 이뤄졌고
          화상통화는 선택지 중 하나였지만, 팬데믹 이후 우리는 화상통화를
          일반적인 소통의 수단으로 받아들여야 했습니다. 그사이 화상통화에 대한
          일종의 공상적 가벼움 혹은 즐거움을 누릴 여유는 온데간데 없이 사라졌고
          모두 갑자기 다가온 미래에 적응하기 위해 고군분투해야 했습니다. 우리가
          상상했던, 언제 어디서든 보다 효과적인 소통을 가능하게 해줄 거라 믿었던
          기술은 아이러니하게도 우리가 얼마나 떨어져 있고, 함께할 수 없는 지를
          극명하게 드러내는 장치가 됐습니다. 흔히들 말과 글에는 진정성이 담겨야
          한다고 합니다. 예를 들어 영혼 없는 열렬한 환영 인사는 있을 수
          없습니다. 손으로 쓴 글자는 비록 삐뚤빼뚤이어도 키보드를 두드리는
          것보다 성의 있다고 여겨집니다. 쓰고 지우고 또 쓰고 지우며 만들어낸
          문장이 아무런 흔적 없이 깔끔하게 프린트되거나 정갈하게 화면 위에
          출력되면 그 진심을 오롯이 눈치채기 어려울 지도 모릅니다. 그래도
          어쩌면, 약 30년 정도가 지나 기술이 발전한다면, 글에 영혼을 담기 조금
          더 쉬워지지 않을까요? 손으로 쓴 글씨도 실물이 아닌 사진기로 찍어 올린
          이미지로 그 마음을 전할 수 있게 되었으니까요. 누군가의 라떼보다 삭막한
          세상을 사는 지금도 영혼을 담기 위해 모두가 노력하고 있는 것,
          ‘진정성’이라는 단어의 전성기는 21세기 이후였던 것을 생각해 본다면
          영혼을 담은 글씨를 만드는 일도 그리 먼 미래의 일은 아닐지도
          모르겠습니다. 가까이 더 가까이…
        </Article>
        <Article lang="ko" grid="about_ko" half>
          오예슬·장우석 <br />
          2013년을 시작으로 다양한 방식의 협업을 이어오고 있다. 주로 웹을
          기반으로 작업하며 외부의 필요에 의한 작업을 이어왔으나 최근의 전지구적
          재앙, Covid-19을 기점으로 스스로 필요를 만드는 지경에 이르렀다.
          ‘다음’을 도모하는 방향으로, 서로의 관심사와 능력을 동력삼아 밀고
          당기며 작업을 이어가고 있다.
        </Article>
        <Title
          lang="en"
          title="The typeface will be available in"
          grid="title_en"
        />
        <Article lang="en" grid="article1_en">
          The use of language for the purpose of interaction—i.e. conversing or
          exchanging letters—begins with gauging the distance. The selection of
          words and their use change depending on the mental and relational
          distance between you and your counterpart. In Korean for instance,
          differentiating between when and to whom to speak casually or in
          honorific terms is crucial. It’s standard practice to speak in
          honorifics when meeting someone for the first time to minimize any
          chances of miscommunication by subtly creating a suitable amount of
          distance between you and the person you are meeting. The common
          courtesy of “not crossing the line” is associated with gauging this
          distance. With this in mind, it isn’t difficult to gauge the distance
          between people featured in a transcript of a conversation. Things like
          what sort of relationship they are in and when and how long ago the
          dialog took place can be surmised from the terminology and vocabulary
          used, and the theme of the conversation. Certain jargons and phrases
          can be hints to the time period. Some forms language can only be used
          within certain groups of people, or among those who have collectively
          made an agreement to use said forms of language. Titles that can only
          be used among people in certain relationships (distances) and words
          that might be misunderstood without understanding their proper context
          warrant even more thorough measurements. Gauging the distance is also
          important when designing typefaces, posters, and websites. Defining
          the distance between each element, the relationships among the
          different parts is one of the key tasks of a designer. And repeating
          this activity inevitably caused tech neck. I squint, I gaze from afar,
          I repeatedly zoom in and out. But I can’t seem to abandon my habit of
          getting up close and personal with the monitor. Many would agree that
          some things can only be seen up close and others at an arm’s length,
          but most of the time, many hope that someone would study them more
          closely, to deepen the relationship and get to know more about them.
          What if zooming in through the monitor is to get more intimate, not
          just increasing the size? And what if you could see things you
          couldn’t before, you were able to understand what they are saying a
          little bit better? Would that change what “suitable” is in a “suitable
          amount of distance”?
        </Article>
        <Article lang="en" grid="article2_en" lined right>
          “Missing you even when I see you/ Missing you even when I see you” In
          a Korean drama entitled ‹First Love› that aired on KBS in 1996, Joo
          Jeong-nam (portrayed by Son Hyun-joo) writes a song for his love
          interest Seong Chan-ok (portrayed by Song Chae-hwan) to express how
          much he loves her. This serenade that is composed of a wistful, yet
          bright melody accompanied by poignant lyrics became quite popular
          outside of the show. After the declaration of the pandemic in 2020,
          video phone calls and conference calls have become a part of our
          everyday lives. Now, 25 years after the show was on, the song “Missing
          You Even When I See You” is not only a romantic song sung by a
          lovelorn character but has become one of the most accurate reflections
          of the reality we face today. Video phone calls that have now become
          ubiquitous was the go-to future technology that was depicted in
          science fiction novels and movies. In fact, this technology was
          already a part of our lives even before the spread of COVID-19 and was
          sometimes used by a number of people. We considered it an advanced
          technology, as we called to mind what we imagined and watched in the
          movies even when it became commercialized. Although the video call was
          an available option to us, most of the work was done over email or
          in-person until right before the spread of the novel disease. But now
          we have had to accept it as a regular part of our communication, and
          in doing so we lost our ability to amuse ourselves with the
          delightfully si-fi technology and instead we’re scurrying to adapt to
          the future that is suddenly upon us. This technology that we believed
          was the key to effective communication no matter where we are
          ironically became a device that showed us how far apart we are, and
          that we aren’t able to be together. They say speech and writing has to
          reflect the person’s sincerity; there is no such thing as an empty
          heartfelt greeting. Handwritten text may look a bit crooked, but it
          feels more sincere than typed text. It might be more difficult to pick
          up on how much heart went into a sentence when it is pristinely
          printed or displayed on a screen compared to something that is
          written, erased and rewritten over and over again. Even so, what if,
          say, 30 years later with technology that much more advanced, wouldn’t
          it be easier to bear our soul through our writing? We can already take
          a photo of our handwritten message and post it to show how we feel.
          Consider this: we are all working hard to capture our souls in writing
          today, although it’s gotten a little bit colder than someone’s
          “good-ole days”; and jinjeongseong (진정성), the Korean word for
          sincerity began to enjoy its heyday only very recently, after the
          start of the 21st century. Perhaps the days of creating writing that
          can really embody our deepest feelings isn’t so far away. Closer, just
          a little closer…
        </Article>
        <Article lang="en" grid="about_en" half>
          Oh Yeseul, Jang Wooseok <br />
          The two have collaborated in many ways since 2013. They mainly did
          web-based work to meet various external demands. However, they are now
          hard-pressed to create their own demands since the global calamity
          that is COVID-19. They each tap into the other’s interests and talents
          to nudge and tug themselves forward towards their next goal.
        </Article>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title_ko title_en"
    "article1_ko article1_en"
    "article2_ko article2_en"
    "about_ko about_en";
  column-gap: 4rem;
  row-gap: 5rem;
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
`;
