import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar';
import { Searchbar } from './components/Searchbar';

import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      {/* <Sidebar /> */}
      <Searchbar />
      <Map />
    </div>
  )
}

 
