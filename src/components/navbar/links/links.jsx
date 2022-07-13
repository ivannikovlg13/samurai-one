import React from 'react';
import styles from './links.module.css'
import LinksItem from './linksItem/linksItem';

const Links = (props) => {
  let linksElements = props.links.map((link, index) => <LinksItem key = {index} path={link.path} name = {link.name}/>)
  return (
    <div className={styles.links} >
      {linksElements}
    </div>
  )
}

export default Links