import styles from "../styles/Home.module.css"; // or use a dedicated stories.module.css

export default function Stories() {
  const stories = [
    {
      title: "How We Curate Our Products",
      desc: "Read about our sourcing journey and quality checks that ensure only the best make it into our store.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Behind the Scenes",
      desc: "Meet our creative team and discover how our product pages come to life.",
      img: "/images/story1.jpg"
    },
    {
      title: "Customer Journeys",
      desc: "Hear from real customers about their experiences shopping with us.",
      img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <main className={styles.storiesMain}>
      <h1 className={styles.storiesHeading}>Our Stories</h1>
      <div className={styles.storiesGrid}>
        {stories.map(story => (
          <div className={styles.storyCard} key={story.title}>
            <img src={story.img} alt={story.title} className={styles.storyImage} />
            <div className={styles.storyTitle}>{story.title}</div>
            <div className={styles.storyDesc}>{story.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
