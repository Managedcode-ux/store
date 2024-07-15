// import img_woods_wide from   "../assets/img_woods_wide.jpg"
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./imageCarousel.module.css";
import { IconTrash, IconReplace } from "@tabler/icons-react";

type ImageMap = Map<number, HTMLElement>;

const slides = [
  { src: "src/assets/images/img_woods_wide.jpg", alt: "The woods" },
  { src: "src/assets/images/img_5terre_wide.jpg", alt: "Cinque Terre" },
  {
    src: "src/assets/images/img_mountains_wide.jpg",
    alt: "Mountains and fjords",
  },
  { src: "src/assets/images/img_lights_wide.jpg", alt: "Northern Lights" },
  { src: "src/assets/images/img_nature_wide.jpg", alt: "Nature and sunrise" },
  { src: "src/assets/images/img_snow_wide.jpg", alt: "Snowy Mountains" },
];

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [caption, setCaption] = useState(slides[1].alt);
  const [modalState, setModalState] = useState(false);

  const itemsRef = useRef<ImageMap | null>(null);

  const getMap = useCallback(() => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }, []);

  const scrollToImage = useCallback(
    (index: number) => {
      const map = getMap();
      const node = map.get(index);
      node?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [getMap],
  );

  useEffect(() => {
    setCaption(slides[slideIndex].alt);
    scrollToImage(slideIndex);
  }, [slideIndex, scrollToImage]);

  const handleNext = (type: string) => {
    if (type === "next") {
      setSlideIndex((index) => (index + 1) % slides.length);
    }

    if (type === "prev") {
      setSlideIndex((index) => (index - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className={styles.container}>
      {/* Operations */}
      <div style={{ display: "flex", gap: "2px" }}>
        <IconTrash />
        <IconReplace />
      </div>
      {/* Image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.myImgContiner}
          style={{ display: index === slideIndex ? "block" : "none" }}
          onClick={() => setModalState(true)}
        >
          <div
            className={styles.numbertext}
          >{`${index + 1}/${slides.length}`}</div>
          <img
            src={slide.src}
            style={{ width: "100%", height: "100%" }}
            alt={slide.alt}
          />
        </div>
      ))}

      {/* Modal */}
      <div
        className={styles.modal}
        style={{ display: modalState ? "block" : "none" }}
      >
        <span className={styles.close} onClick={() => setModalState(false)}>
          &times;
        </span>
        <img
          className={styles.modalContent}
          src={slides[slideIndex].src}
          alt="The woods"
        />
        <div id={styles.caption}>{caption}</div>
      </div>

      {/* previous and next button */}
      <a className={styles.prev} onClick={() => handleNext("prev")}>
        &#10094;
      </a>
      <a className={styles.next} onClick={() => handleNext("next")}>
        &#10095;
      </a>

      {/* Image Text */}
      {/* <div className={styles.captionContainer}>
                <p>{caption}</p>
            </div> */}

      {/* Thumbnail/demo Images */}
      <div className={styles.PreviewContainer}>
        {slides.map((slide, index) => (
          <img
            src={slide.src}
            className={`${styles.demo} ${styles.cursor} ${index === slideIndex ? styles.active : ""}`}
            style={{ width: "100%" }}
            onClick={() => {
              setSlideIndex(index);
              setCaption(slide.alt);
            }}
            alt={slide.alt}
            key={index}
            ref={(node: HTMLElement | null) => {
              const map = getMap();
              if (node) {
                map.set(index, node);
              } else {
                map.delete(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
