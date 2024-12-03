import React,{ Component} from "react";

class MyCounterComp extends Component{

    constructor(){
        super();
        this.state={
            countNo:0   
        }
    }
    changeIncData=()=>{
        
        this.setState((prevstate)=>({countNo:prevstate.countNo+1}));
    }
    changeDecData=()=>{
        
        this.setState((prevstate)=>({countNo:prevstate.countNo-1}));
    }
    changeResetData=()=>{
        
        this.setState((prevstate)=>({countNo:prevstate.countNo=0}));
    }
    
    render(){
        return(
            <div>
                <h2>
                    This is MyCounterComp
                </h2>
                <p>Count : {this.state.countNo}</p>
                <button type="button" class="btn btn-primary" style={{ margin: "10px" }} onClick={()=>this.changeIncData()}>Count++</button>
                <button type="button" class="btn btn-primary" style={{ margin: "10px" }} onClick={()=>this.changeDecData()}>Count--</button>
                <button type="button" class="btn btn-primary" style={{ margin: "10px" }} onClick={()=>this.changeResetData()}>Reset</button>


            </div>
        )
    }
}
export default MyCounterComp;