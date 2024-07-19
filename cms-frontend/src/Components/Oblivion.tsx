import styles from "./Oblivious.module.css";
import ProductCard from "./ProductCard";
import Carousel from "../Elememts/ImageCarousel";
import { ImageOperation } from "../Elememts/ImageOperationButtons";
import ImageUploader from "../Elememts/ImageUpload";

export default function Oblivion() {
  return (
    <>
      <div className={styles.workSpace}>
        <p>Welcome to the oblivion</p>
        {/* <ProductCard/> */}
        {/* <Carousel /> */}
        {/* <ImageOperation /> */}
        <ImageUploader />
      </div>
    </>
  );
}
