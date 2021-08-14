import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                currentRole: '',
                roleNum = 0,
                };
        }

        changeRoles = () => {
             setInterval(this.currentRole(), 1500)           
        }

        currentRole = () => {
                this.setState(prevState => {
                        return {
                                ...prevState,
                                currentRole: prevState.roles[prevState.roleNum],
                                rollNum = ((prevState.roleNum + 1) % prevState.roles.length),
                                }
                        }
                )
        }

        render(){
           return <h1>Hi, My name is Emiko. I'm a ${this.state.currentRole}.</h1>     
        }      
}

export default Intro;