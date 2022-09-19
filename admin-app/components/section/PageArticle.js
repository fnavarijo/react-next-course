import styles from "../../styles/components/section/PageArticle.module.css";

function PageArticle ({ title, options, children }) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>
          {title}
        </h1>
        <div>
          {options}
        </div>
      </header>
      <hr />
      <section>
        { children } 
      </section>
    </article>
  )
}

export default PageArticle;