import styles from "../styles/Home.module.css"; // Or about.module.css

export default function About() {
  // Use your own images or external URLs for team members
  const team = [
    { name: "Priya Desai", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rajat Singh", role: "Head of Curation", img: "https://randomuser.me/api/portraits/men/35.jpg" },
    { name: "Anita Kumar", role: "Product Lead", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  ];
  return (
    <main className={styles.aboutMain}>
      <h1 className={styles.aboutHeading}>About Us</h1>
      <h2 className={styles.aboutSubhead}>Our Mission</h2>
      <p className={styles.aboutDesc}>
        We aim to bring high-quality, unique products to customers, curating a hand-picked selection from trusted creators and brands.
      </p>
      <h2 className={styles.aboutSubhead}>Our Team</h2>
      <div className={styles.teamGrid}>
        {team.map(member => (
          <div className={styles.teamCard} key={member.name}>
            <img src={member.img} alt={member.name} className={styles.teamImage} />
            <div className={styles.teamName}>{member.name}</div>
            <div className={styles.teamRole}>{member.role}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
