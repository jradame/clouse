import styles from "./Categories.module.css";
import travelCover from "../../assets/images/travel/venice2016.jpg";

const categories = [
  {
    id: 1,
    label: "Travel + Personal",
    href: "/travel-personal",
    image: travelCover,
  },
  {
    id: 2,
    label: "Collection Two",
    href: "/collection-two",
    image: null,
  },
  {
    id: 3,
    label: "Collection Three",
    href: "/collection-three",
    image: null,
  },
];

function Categories() {
  return (
    <section id="categories" className={styles.section}>
      <h2 className={styles.heading}>Collections</h2>

      <div className={styles.grid}>
        {categories.map((item) => (
          <a key={item.id} href={item.href} className={styles.card}>
            <div className={styles.thumb}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.label}
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.label}>{item.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
