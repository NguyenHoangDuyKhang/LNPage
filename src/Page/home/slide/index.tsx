import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import styles from "./style";
function Slide() {

  const food: [string, number, number][] = [
    ["https://i.pinimg.com/736x/9d/0a/55/9d0a5507ad08f434dfef3ca077f8d8a2.jpg", 260, 290],
    ["https://i.pinimg.com/1200x/f4/7d/37/f47d374643b0281089b96c3b075beecc.jpg", 290, 320],
    ["https://i.pinimg.com/736x/ae/94/97/ae94977fe94c32d093f156476a9890c1.jpg", 320, 350],
  ]

  return (
    <>
      <div style={styles.container}>
        {food.map(([emoji, hueA, hueB], i) => (
          <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </>
  )
}

export default Slide;



interface CardProps {
  emoji: string
  hueA: number
  hueB: number
  i: number
}

export function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const isImage = emoji.startsWith("http");

  return (
    <motion.div
      className={`card-container-${i}`}
      style={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...styles.splash, background }} />
      <motion.div style={styles.card} variants={cardVariants} className="card">
        {isImage ? (
          <img
            src={emoji}
            alt={`card-${i}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
            }}
          />
        ) : (
          emoji
        )}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`
