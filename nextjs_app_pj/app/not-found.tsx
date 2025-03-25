import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>404</dt>
        <dd className={styles.message}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLをご確認下さい。
        </dd>
      </dl>
    </div>
  );
}
