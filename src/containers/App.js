import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

// Para criar interações entre componentes, precisamos criar uma classe para usar o state
// state é a variavel que interage com o codigo todo e faz as coisas mudarem, geralmente fica na classe pai de todas
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        
        }
    }

    // inicia essa funcao junto com a classe
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }


    // quando tem alguma função que não é parte do react, usa-se a sintaxe das funções de seta.
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) // setter do searchfield
    }


    render() {
        const {robots, searchfield} = this.state
         // filtrando os robos
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // criando uma tela de loading
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(             //text center
                <div className = 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );    
        }
     }
}


export default App;