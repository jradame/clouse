import styles from "./Categories.module.css";

const categories = [
  {
    id: 1,
    label: "Travel + Personal",
    href: "/travel-personal",
  },
  {
    id: 2,
    label: "Collection Two",
    href: "/collection-two",
  },
  {
    id: 3,
    label: "Collection Three",
    href: "/collection-three",
  },
];


function Categories() {
  return (
    <section id="categories" className={styles.section}>
      <h2 className={styles.heading}>Collections</h2>

      <div className={styles.grid}>
        {categories.map((item) => (
          <a key={item.id} href={item.href} className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.label}>{item.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
