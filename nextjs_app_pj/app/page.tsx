import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

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
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.constent}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
