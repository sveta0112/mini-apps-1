//some
class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isHomePage : true,
      isForm1Page : false,
      isForm2Page : false,
      isForm3Page : false,
      isPurchasePage: false,
      username       : "",
      email          : "",
      password       : "",
      line_1: "",
      line_2: "",
      city: "",
      state: "",
      zip_code: "",
      credit_card_num: "",
      expiry_date: "",
      cvv: "",
      billing: "",

    };

    this.enableFormOnePage  = this.enableFormOnePage.bind(this);
    this.enableFormTwoPage  = this.enableFormTwoPage.bind(this);
    this.enableFormThreePage  = this.enableFormThreePage.bind(this);
    this.enablePurchasePage = this.enablePurchasePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  enableFormOnePage() {
    this.setState({
      isHomePage : false,
      isForm1Page : true,
      isForm2Page : false
     
    });
  }


  enableFormTwoPage() {
    this.setState({
      isHomePage : false,
      isForm1Page : false,
      isForm2Page : true
    });
  }

  enableFormThreePage() {
    this.setState({
      isHomePage : false,
      isForm1Page : false,
      isForm2Page : false,
      isForm3Page : true
    });
  }


  enablePurchasePage() {
    this.setState({
      isHomePage : false,
      isForm1Page : false,
      isForm2Page : false,
      isForm3Page : false,
      isPurchasePage: true
    });
  }
  
  formOnePage(){
    return(
      <form>
   	    <label>Name</label>
   	  	<input type="text" name="username" onChange={this.handleChange}/>
   	  	<label>Email</label>
   	  	<input type="text" name="email" onChange={this.handleChange}/>
   	  	<label>Password</label>
   	  	<input type="text" name="password" onChange={this.handleChange}/>
   	  </form>
    );
  };


  formTwoPage(){
    return(
      <form>
   	    <label>Line-1</label>
   	  	<input type="text" name="line_1" onChange={this.handleChange}/>
   	  	<label>Line-2</label>
   	  	<input type="text" name="line_2" onChange={this.handleChange}/>
   	  	<label>City</label>
   	  	<input type="text" name="city" onChange={this.handleChange}/>
   	  	<label>State</label>
   	  	<input type="text" name="state" onChange={this.handleChange}/>
   	  	<label>Zip Code</label>
   	  	<input type="number" name="zip_code" onChange={this.handleChange}/>
   	  	
      </form>
    );
  };


  formThreePage(){
    return(
      
      <form>
        <label>Credit Card</label>
        <input type="number" name="credit_card_num" onChange={this.handleChange}/>
        <label>Expiry date</label>
        <input type="number" name="expiry_date" onChange={this.handleChange}/>
        <label>CVV</label>
        <input type="number" name="cvv" onChange={this.handleChange}/>
        <label>Billing Zip Code</label>
        <input type="number" name="billing"  onChange={this.handleChange}/>
       
      </form>
           
    );
  };

  purchasePage(){
    return(
      
      <div>
         username:{this.state.username}
         email:{this.state.email}
         password:{this.state.password}
         line_1:{this.state.line_1}
         line_2:{this.state.line_2}
         city:{this.state.city}
         state:{this.state.state}
         zip_code:{this.state.zip_code}
         credit_card_num:{this.state.credit_card_num}
         expiry_date:{this.state.expiry_date}
         cvv:{this.state.cvv}
         billing:{this.state.billing}
         <button onClick={this.handleSubmit}>Confirm Purchase</button>
      </div>
           
    );
  };


  handleSubmit(e){
      e.preventDefault();
      alert('hello');
      $.ajax('/userInfo',{
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          username: this.state.username,
          email :this.state.email,
          password :this.state.password,
          line_1:this.state.line_1,
          line_2: this.state.line_2,
          city:this.state.city,
          state:this.state.state,
          zip_code:this.state.zip_code,
          credit_card_num:this.state.credit_card_num,
          expiry_date:this.state.expiry_date,
          cvv:this.state.cvv,
          billing:this.state.billing
          
        }),
        success: (data) => {
          this.setState({ username: '', email: '', password: '',line_1: '', line_2: '', city: '', state: '', zip_code: '', credit_card_num: '', expiry_date: '', cvv: '', billing: ''});
          //this.props.onSuccess();
        }
      });
  }
  



  render() {
    var homeComp = (
        <div>
            <button onClick={this.enableFormOnePage} className="loginbutton">checkout</button>
        </div>
    );

    var firstComp = (
        <div>
           <input onClick={this.enableFormTwoPage} type="submit" value="Next" className="one"/>
        </div>
    );
    var secondComp = (
        <div>
           <input onClick={this.enableFormThreePage} type="submit" value="Next" className="two"/>
        </div>
    );
    var purchaseComp = (
        <div>
           <input onClick={this.enablePurchasePage} type="submit" value="Next" className="three"/>
        </div>
    );
    
    return (
      <div>
        { this.state.isHomePage ? homeComp : null }
        { this.state.isForm1Page ? this.formOnePage() : null }

        { this.state.isForm1Page ? firstComp : null }
        { this.state.isForm2Page ? this.formTwoPage() : null }

        { this.state.isForm2Page ? secondComp : null }
        { this.state.isForm3Page ? this.formThreePage() : null }

        { this.state.isForm3Page ? purchaseComp : null }
        { this.state.isPurchasePage ? this.purchasePage() : null }
        
        
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

// class App extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 		  isForm1Page : false,
// 		  isForm2Page: true,
// 		  isForm3Page: true,
// 		  username : '',
// 		  email: '',
// 		  password: '',
// 		  line1: '',
// 		  line2: '',
// 		  city: '',
// 		  state: '',
// 		  zipcode: '',
// 		  creditCard: '',
// 		  expiryDate: '',
// 		  cvv: '',
// 		  billCode: ''
// 		}

// 		this.enablePasswordPage = this.enablePasswordPage.bind(this);
		
// 	}
// 	enablePasswordPage(){
// 		this.setStaet({
// 			isForm1Page : true,
// 			isForm2Page : false
// 		});
// 	}

// 	passwordpage(){
// 		return(
//            <form>
//            	 <div className="mainapp">
//            	    <label>Name</label>
//            	  	<input type="text" name="name"/>
//            	  	<label>Email</label>
//            	  	<input type="text" name="email"/>
//            	  	<label>Password</label>
//            	  	<input type="number" name="password"/>
//            	  	<input type="submit" value="Next"/>
//            	 </div>
//            </form>
// 		);
// 	}

// 	render(){
// 		var usernameComp = (
//            <div>
//            	  <form>
//            	    <label>Line-1</label>
//            	  	<input type="number" name="cc"/>
//            	  	<label>Line-2</label>
//            	  	<input type="number" name="ed"/>
//            	  	<label>City</label>
//            	  	<input type="number" name="cvv"/>
//            	  	<label>State</label>
//            	  	<input type="text" name="state"/>
//            	  	<label>Zip Code</label>
//            	  	<input type="number" name="billing"/>
//            	  	<input type="submit" value="Next"/>
//            	  </form>
//            </div>
// 		);
// 		return(
//            <div>
//            	  {this.state.isForm1Page ? usernameComp : null}
//            </div>
// 		);
// 	}
// }


// class Form1 extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		if(this.props.currentStep !== 1){
// 			return null;
// 		}
// 		return(
//            <div>
//            	  <form>
//            	    <label>Name</label>
//            	  	<input type="text" name="name"/>
//            	  	<label>Email</label>
//            	  	<input type="text" name="email"/>
//            	  	<label>Password</label>
//            	  	<input type="number" name="password"/>
//            	  	<input type="submit" value="Next"/>
//            	  </form>
//            </div>
// 		);
// 	}
// }

// class Form2 extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return(
//            <div>
//            	  <form>
//            	    <label>Line-1</label>
//            	  	<input type="number" name="cc"/>
//            	  	<label>Line-2</label>
//            	  	<input type="number" name="ed"/>
//            	  	<label>City</label>
//            	  	<input type="number" name="cvv"/>
//            	  	<label>State</label>
//            	  	<input type="text" name="state"/>
//            	  	<label>Zip Code</label>
//            	  	<input type="number" name="billing"/>
//            	  	<input type="submit" value="Next"/>
//            	  </form>
//            </div>
// 		);
// 	}
// }


// class Form3 extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return(
//            <div>
//            	  <form>
//            	    <label>Credit Card</label>
//            	  	<input type="number" name="cc"/>
//            	  	<label>Expiry date</label>
//            	  	<input type="number" name="ed"/>
//            	  	<label>CVV</label>
//            	  	<input type="number" name="cvv"/>
//            	  	<label>Billing Zip Code</label>
//            	  	<input type="number" name="billing"/>
//            	  	<input type="submit" value="Next"/>
//            	  </form>
//            </div>
// 		);
// 	}
// }
// ReactDOM.render(<App/>, document.getElementById("app"));