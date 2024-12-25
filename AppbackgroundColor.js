import './App.css';

function AppColor(props) {
    function changeBackground(e) {
        document.body.style.background = e.target.value;
        alert(`Background changed to ${e.target.value}`);
    }

    return (
        <div className="App">
            <h1>{props.heading}</h1>
            <label>{props.label}</label>
            <button value={props.color} onClick={changeBackground}>
                Change to {props.color}
            </button>
        </div>
    );
}

export default AppColor;
