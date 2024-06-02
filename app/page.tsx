import { JSX } from "react";
import { GetProjects } from "./api/route";
import Card from "./components/card";
import styleCard from "./styles/card.module.css"
import styleTitle from "./styles/title.module.css"


export default async function Home() {

  const cards = await GetProjects()
  console.log(cards.items)

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      {/* <Navbar/> */}
      <p className={styleTitle.title_text}>Кейсы</p>
      <div className={styleCard.card_list}>
        {cards.items.map((card: JSX.IntrinsicAttributes & { [x: string]: any; }) => (
          <Card key={card.id} {...card}></Card>
        ))}
      </div>
    </main>
  );
}
