import Carousel from '../Elememts/ImageCarousel'
import styles from './Oblivious.module.css'
import ProductCard from './ProductCard'

export default function Oblivion(){
    return(
        <>
        <div className={styles.workSpace}>
            <p>Welcome to the oblivion</p>
            {/* <ProductCard/> */}
            <Carousel/>
        </div>
        </>
    )
}