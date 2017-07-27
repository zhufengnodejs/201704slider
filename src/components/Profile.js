import React from 'react';
export default class Profile extends React.Component{
  render(){
    console.log(this.props);
    console.log(this.props.name);
    return (
      <div>Profile</div>
    )
  }
}