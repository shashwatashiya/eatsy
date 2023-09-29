
import React from 'react';


class UserClass extends React.Component {
 //1. Constructor called 
        constructor(props) {
            super(props);
            //this.state is a big whole object which contains state variables
            this.state = {
                userInfo: {
                    name: "Dummy",
                    location: "Default",
                }
                
            }
           
        }

    //we will have a render method inside that will return jsx
    //3. then componentDidMount
   async  componentDidMount() {
       const data = await fetch( "https://api.github.com/users/shashwatashiya");
       const json = await data.json();

      console.log(json);
       this.setState({userInfo: json});
    }
    //2. then render is caled
    render() {
       
    return (
    
    <div className="user-card">
    
   
    <h2>Name: {this.state.userInfo.name}</h2> {/* iska this. hai kya bhai? that's why have to do super()*/}
    <h3>Location: {this.state.userInfo.location}</h3>
    <h4>Contact: ashiyashashwat@gmail.com</h4>
    </div>
    
    ) 
    }
    
    
    }
    






export default UserClass;
