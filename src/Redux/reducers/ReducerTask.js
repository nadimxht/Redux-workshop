

const GlobalState=[
  // {
  //   id:0 , 
  //   name:"",
  //   check:false , 
  // },

 

]

const Reducer=(state=GlobalState , action)=>{
  switch(action.type){
    case "ADD" : return [...state , action.payload] ;
    case "DELETE" : return state.filter(e=>e.id!==action.payload) ;
  }
}
export default Reducer ; 