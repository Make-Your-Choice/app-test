import { JSX } from "react";
import { GetProjects } from "./api/route";
import Card from "./components/card";
import styleCard from "./styles/card.module.css"
import styleTitle from "./styles/title.module.css"
import classNames from "classnames";
import Breadcrumb from "./components/breadcrumb";


export default async function Home() {

  const cards = await GetProjects()
  // console.log(cards.items)

  return (
    <main>
      <Breadcrumb
        items={[
          {
            label: "Главная",
            path: "/",
          },
          {
            label: "Кейсы",
            path: "/cases",
          },
        ]}
      />
      <p className={classNames(styleTitle.title_text, styleTitle.title_padding)}>Кейсы</p>
      <div className={styleCard.card_list}>
        {cards.items.map((card: JSX.IntrinsicAttributes & { [x: string]: any; }) => (
          <Card key={card.id} {...card}></Card>
        ))}
      </div>
    </main>
  );
}
