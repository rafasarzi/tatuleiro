import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
     <div 
     style={{ backgroundColor: props.preto ? "#000" : "#333" }}
     className={styles.subdivisao}>
     </div>
    )
  }
  