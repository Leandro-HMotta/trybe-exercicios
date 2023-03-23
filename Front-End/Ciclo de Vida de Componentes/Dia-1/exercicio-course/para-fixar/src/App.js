import React from 'react';
import './App.css';
import RandomUser from './components/RandomUser';

class App extends React.Component {
  state = {
    email: '',
    picture: '',
    firstName: '',
    lastName: '',
    title: '',
    age: 0,
    loading: true,
    arrayFull: [],
  };
  fetchApi = async () => {
    const fetchUser = await fetch('https://api.randomuser.me/');
    const object = await fetchUser.json();

    this.setState({
      arrayFull:object.results,
      email: object.results[0].email,
      title: object.results[0].name.title,
      firstName: object.results[0].name.first,
      lastName: object.results[0].name.last,
      picture: object.results[0].picture.medium,
      age:object.results[0].dob.age,
      loading: false,
    });
  };
  componentDidMount() {
    this.fetchApi();
    console.log(this.state)
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState.person[0].dob.age);
    const AGE = 50;
    if (nextState.arrayFull[0].dob.age < AGE) return true;
    this.fetchApi();
  }

  render() {
    const { email, firstName, lastName, title, picture, age, loading } = this.state;
    if (loading) {
      return <h1> Loading...</h1>
    }
    return (
      <div>
        <RandomUser
          key={firstName}
          title={title}
          name={firstName}
          lastName={lastName}
          email={email}
          age={age}
          picture={picture}
        />
      </div>
    );
  }
}

export default App;
