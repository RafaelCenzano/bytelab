import React from 'react'
import styles from './footer.module.css'

function Icon(props){
  return <a rel="noopener noreferrer" href={props.to} style={{
    color: "#ebebeb",
    fontSize: "2.6rem",
    height: "2.6rem"
  }}>
    <ion-icon name={props.name}>
  </ion-icon></a>
}

function Icon1(props){
  return <a rel="noopener noreferrer" target="_blank" href={props.to} style={{
    color: "#ebebeb",
    fontSize: "2.6rem",
    height: "2.6rem"
  }}>
    <ion-icon name={props.name}>
  </ion-icon></a>
}

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <small>
          Created by <a style={{color: "#ebebeb"}} rel="noopener noreferrer" target="_blank" href="https://ruizalex.com">Alex Ruiz</a>.<br />
          Thanks to Crystal Yao for helping me pick colors.
        </small>
        <div id="footer">
          <Icon1 name="logo-github" to="https://github.com/bytelab-club" />
          <Icon name="logo-slack" to="#slack" />
          <Icon1 name="logo-instagram" to="https://instagram.com/bytelaboratory" />
          <Icon name="mail" to="#footer" />
        </div>
      </div>
    )
  }
}
