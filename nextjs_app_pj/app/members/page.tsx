import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/SU_METAL.jpg",
        width: 240,
        height: 240,
      },
      name: "SU-METAL",
      position: "ボーカル&ダンス",
    },
    {
      id: "2",
      image: {
        url: "/MOA_METAL.jpg",
        width: 240,
        height: 240,
      },
      name: "MOA METAL",
      position: "スクリーム&ダンス",
    },
    {
      id: "3",
      image: {
        url: "/MOMO_METAL.jpg",
        width: 240,
        height: 240,
      },
      name: "MOMO METAL",
      position: "スクリーム&ダンス",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーはありません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
