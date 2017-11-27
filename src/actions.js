import store from "./store";
export const chat = (text) => {
    // let msg  = ;
    let clone = [...store.getState().chatComent];
    clone.push({
        msg: text
    })
    store.setState({
        chatComent: clone
    });
    const cloneWords = [...store.getState().wordsIdentify];
        for(let i = 0; i < cloneWords.length ; i++){
           let  n = text.indexOf(cloneWords[i]);
           if(n != -1){
               i = cloneWords.length;
               clone.push({
        msg: 'ok'
    })
    store.setState({
        chatComent: clone,
        next: true
    });
           }
     }
        // wordsIdentify.
        // let arrayText = text.split(" ");

}