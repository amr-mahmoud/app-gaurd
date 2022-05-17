import { useCallback, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../store/provider";
import { PageProps, CardProps } from "./model";
import { Title, PageWrapper, CardsWrapper } from "./Page.style";
import Card from "../../components/card";

const Page = (props: PageProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { tabs, plugins } = state;
  const { title } = props;
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  const targetTab = tabs[path];

  const cardsGenerate = useCallback(() => {
    const cards: CardProps[] = [];
    if (!targetTab) return cards;
    targetTab.active.map((val: string) => {
      return cards.push({
        id: val,
        title: plugins[val]?.title,
        description: plugins[val]?.description,
        active: true,
        disabled: targetTab.disabled.includes(val),
      });
    });

    targetTab.inactive.map((val) => {
      return cards.push({
        id: val,
        title: plugins[val]?.title,
        description: plugins[val]?.description,
        active: false,
        disabled: targetTab.disabled.includes(val),
      });
    });

    return cards.sort((a, b) => a.id.localeCompare(b.id));
  }, [targetTab, plugins]);

  const cards = cardsGenerate();

  return (
    <PageWrapper>
      <Title>{`${title} Plugins`}</Title>
      <CardsWrapper>
        {cards.length > 0 &&
          cards.map((card: CardProps) => (
            <Card
              key={card.title}
              card={card}
              targetTab={targetTab}
              path={path}
              dispatch={dispatch}
            ></Card>
          ))}
      </CardsWrapper>
    </PageWrapper>
  );
};

export default Page;
