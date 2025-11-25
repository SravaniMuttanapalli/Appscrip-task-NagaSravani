import styles from "../styles/Home.module.css"; // or skills.module.css

export default function Skills() {
  const skills = [
    {
      title: "Product Selection",
      desc: "Our team excels at carefully selecting high-quality and trending products for a delightful shopping experience.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
    },
    {
      title: "Customer Service",
      desc: "Dedicated support to solve your issues and guide you through the shopping journey.",
      img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=200&q=80"
    },
    {
      title: "Fast Delivery",
      desc: "We ensure rapid and safe delivery using trusted logistics partners.",
      img: "/images/fastdelivery.jpg"
    },
    {
      title: "Quality Assurance",
      desc: "Every item is hand-checked before it leaves our warehouse, ensuring satisfaction.",
      img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <main className={styles.skillsMain}>
      <h1 className={styles.skillsHeading}>Our Skills & Capabilities</h1>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div className={styles.skillCard} key={skill.title}>
            <img src={skill.img} alt={skill.title} className={styles.skillImage} />
            <div className={styles.skillTitle}>{skill.title}</div>
            <div className={styles.skillDesc}>{skill.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
