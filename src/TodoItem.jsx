function TodoItem(props){
    return (
      <li>
        <span>V</span>
        <p>{props.text}</p>
        <span></span>
      </li>
    );
  }

export {TodoItem};