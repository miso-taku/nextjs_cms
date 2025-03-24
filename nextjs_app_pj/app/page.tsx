import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const date: {
  constents: News[];
} = {
  constents: [
    {
      id: "1",
      title:
        "「BABYMETAL NORTH AMERICA 2025 TOUR」サンフランシスコ公演の追加開催決定!!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/03/20",
      createdAt: "2025/03/20",
    },
    {
      id: "2",
      title: "「BABYMETAL NORTH AMERICA 2025 TOUR」開催決定!!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/03/18",
      createdAt: "2025/03/18",
    },
    {
      id: "3",
      title: "「THE ONE」先行登録開始!! THE ONE TEE 2025 先行販売開始!!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/03/17",
      createdAt: "2025/03/17",
    },
  ],
};

export default function Home() {
  const sliceData = date.constents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>We are BABYMETAL!!!</h1>
          <p className={styles.description}>
            BABYMETAL returns to Europe bringing
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/bg.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={date.constents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
