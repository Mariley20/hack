import createStore from "redux-zero";

const chatComent = [{
        msg: 'Hola, Que necesitas Reportar?',
        description: 'accidente, siniestro'
    }

];
const wordsIdentify = ["choque", "accidente", "heridos", "muerte", "murio", "muerto", "muertos"];
const initialState = {
    chatComent: chatComent,
    wordsIdentify: wordsIdentify,
    selected: 0,
    next: false
};

const store = createStore(initialState);
export default store;