import React from 'react';

const Acts = props => {
    return(
        <div className='acts'>
            <h2>{props.acts.name}</h2>
        </div>
    )
}

export default Acts;

/* 
"name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "adress": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
     "user_id": 1


         else if(this.props.role == 'teacher'){
      console.log("in teacher componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your College Rollno"
             floatingLabelText="Teacher Id"
             onChange={(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange={(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
    }

        else if(value == 2){
      var localloginComponent=[];
      loginRole='teacher';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your College Rollno"
             floatingLabelText="Teacher Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }

    componentWillMount(){
  // console.log("willmount prop values",this.props);
  if(this.props.role != undefined){
    if(this.props.role == 'name'){
      console.log("in name componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your email to login"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      //this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
    }

*/