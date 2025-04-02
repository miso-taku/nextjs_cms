import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>お知らせはありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                width={600}
                height={300}
              />
            ) : (
              <Image src="/no-image.png" alt="" width={600} height={300} />
            )}
            <dl className={styles.constent}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
