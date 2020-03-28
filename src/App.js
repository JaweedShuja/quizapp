import React ,{Component} from 'react'
import logo from './Expertizo-logo.png'
import questions from './questions.json'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      Questions:questions,
      qno:0,
      options:[],
      que:questions.question,
      rightAnswer:0,
      wrongAnswer:0,
      topBar:0,
      score:0,
      WintopBar:0,
      max:100,
    }

    this.handleClick = this.handleClick.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }
  handleClick(option){
    
    
    // alert(this.state.Questions.length.toString())

    this.setState({
      topBar:this.state.topBar+5,
    })
    
    if(option == questions[this.state.qno].correct_answer){
      this.setState({
        rightAnswer:this.state.rightAnswer + 1,
        qno:this.state.qno+1,
        WintopBar: this.state.WintopBar + 5,
        score : this.state.score + 5,
      })
    }
    else{
      this.setState({
        wrongAnswer:this.state.wrongAnswer + 1,
        qno:this.state.qno+1,
        max: this.state.max -5,
      })
    }
    this.shuffle()
    

  }
  componentDidMount(){
    this.shuffle()
    // alert(arr)
  }
  shuffle(){
    let arr = ["","","",""];
    let indexForRight = Math.floor((Math.random() * 3) + 0);
    let wrongOptions = questions[this.state.qno].incorrect_answers;
    
    let rightAnswer = questions[this.state.qno].correct_answer
    // alert(indexForRight)
    arr[indexForRight] = rightAnswer;
    // alert(arr)
    let wrongCounter = 0;
    for(let i = 0; i < 4; i++){
      if(arr[i] == ""){
        arr[i] = wrongOptions[wrongCounter];
        wrongCounter++;
      }
      else{
        continue
      }
    }
    
    this.setState({
      options:arr
    })
  }
  render(){
    return(
      <div>
          <div
          style={{
            backgroundColor: 'whitesmoke',
            width: '100%',
            height: 600,
            marginRight:50,
            alignSelf:'center',
            textAlign:'center'
          }}>
            <div style={{height:30, width:`${this.state.topBar}%`, backgroundColor:'black'}}>
             
            </div>
            <h3>Question {this.state.qno + 1} of 20</h3>
            <img src={logo} style={{height:150, width:300}}/>
            <h1 style={{color:'blue'}}>Online Quiz App</h1>

            <div style={{height:70, width:'100%', backgroundColor:'white', marginRight:'10%', textAlign:'center', paddingTop:20}}>
              <h3 >{this.state.Questions[this.state.qno].question}</h3>
              
            </div>

            <div style={{height:100, width:'100%', backgroundColor:'white', marginTop:10}}>
                <button style={{margin:10}} onClick={() => this.handleClick(this.state.options[0])}>{this.state.options[0]}</button>
                <button style={{margin:10}} onClick={() => this.handleClick(this.state.options[1])}>{this.state.options[1]}</button><br/>
                <button style={{margin:10}} onClick={() => this.handleClick(this.state.options[2])}>{this.state.options[2]}</button>
                <button style={{margin:10}} onClick={() => this.handleClick(this.state.options[3])}>{this.state.options[3]}</button>
            </div>
            
            <h3>Score {this.state.score} % | Total Right Answers => {this.state.rightAnswer} | Total Wrong Answers => {this.state.wrongAnswer} | Max Score {this.state.max} %</h3>
            <div style={{height:20, width:`${this.state.WintopBar}%`, backgroundColor:'black'}}>
             
            </div>
        </div>
      </div>
    );
  }
}