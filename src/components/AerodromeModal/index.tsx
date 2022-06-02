import styles from './styles.module.css';

export function AerodromeModal({ icao, setModalIsOpen }: any) {
  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <h1>{icao} DASDAS</h1>

      <button type="button" onClick={handleClose}>Fechar</button>
    </div>
  )
}