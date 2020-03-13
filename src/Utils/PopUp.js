import M from 'materialize-css';


const PopUp = {
    showMessage: (color, msg) => {

        let time = 2000

        M.toast({ html: msg, classes: color, displayLength: time })

    }
}
export default PopUp;