import React from 'react';
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'

class Preloader extends React.Component {
  render = () => {
    return (
      <div className={styles.preloader}>
        <img alt={`preloader`} src={preloader}/>
      </div>
    )
  }
}

export default Preloader;
