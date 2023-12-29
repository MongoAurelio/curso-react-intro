import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
    <div className="CreateTodoButton"
      onClick={
          (event) => {
            console.log('le diste click');
            console.log(event);
            console.log(event.target);
          }
        }>
        <button>+</button>
    </div>
    );
  }
  

export { CreateTodoButton }