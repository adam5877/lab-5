import './App.css';

function GreetingElementwithProp(props) {
    return (
        <div className="App">
            <h1>Welcome, {props.studentname}</h1>
        </div>
    );
}

export default GreetingElementwithProp;
