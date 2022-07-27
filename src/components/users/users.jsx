import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
// import * as axios from 'axios'

class Users extends React.Component{
  componentDidMount(){
    this.props.setUsers([{
      "name": "Nastassia_Kauharenia",
      "id": 24911,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "kavak94",
      "id": 24910,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "djakfrostic",
      "id": 24909,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "djakfrostt",
      "id": 24908,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "KitsunneTesting",
      "id": 24907,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "TestingUser",
      "id": 24906,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": "Welcome!",
      "followed": false
    },
    {
      "name": "RedCaptain",
      "id": 24905,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "sanechka",
      "id": 24904,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "nazar2002",
      "id": 24903,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "obvin",
      "id": 24902,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    ])
  }

  render(){
    return (
      this.props.users.map(user => <div className={styles.wrapper} key={user.id}>
        <div className={styles.linksBox}>
          <img className={styles.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
          {
            user.followed
              ? <button onClick={() => {this.props.unfollow(user.id) }} className="button">Follow</button>
              : <button onClick={() => { this.props.follow(user.id) }} className="button">Unfollow</button>
          }

        </div>
        <div className={styles.infoBox}>
          <div className={styles.nameBox}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.status}>{user.status}</span>
          </div>
          <div className={styles.locationBox}>
            <span>{"user.location.country"}</span>
            <span>{"user.location.city"}</span>
          </div>
        </div>
      </div>)
    )
  }
}

export default Users