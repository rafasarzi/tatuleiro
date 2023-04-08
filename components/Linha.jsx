import styles from '../styles/Linha.module.css'
import Subdivisao from './subdivisao'

export default function Linha(props) {
    return (
        <div className={styles.linha}>
        
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
           
        </div>
    )
}