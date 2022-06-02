import { useState } from 'react';

import styles from './styles.module.css';

export function Searchbar() {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <input type="text" className={styles.searchContainer} placeholder="Buscar.." value={searchValue} onChange={(e) => setSearchValue(e.target.value.toUpperCase())}/>
  )
}