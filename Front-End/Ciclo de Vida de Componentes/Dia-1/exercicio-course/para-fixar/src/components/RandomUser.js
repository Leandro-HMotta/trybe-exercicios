import React from "react";


class RandomUser extends React.Component {


  render() {
    const {title, name, lastName, email, age, picture } = this.props;
    return (
      <div>
         <p>{title} {name} {lastName}.</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <img src={picture} alt={name}></img>
      </div>
    )
  }
}

export default RandomUser;
