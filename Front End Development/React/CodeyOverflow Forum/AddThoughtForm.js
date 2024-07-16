import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';



export function AddThoughtForm(props) {

  const [text, setText] = useState("");
  const handleTextChange = ({target}) => {
    const { value } = target;
    setText(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    if (thought.text !== '') {
      props.addThought(thought);
      setText('');
    }
    else {
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        
        
      />
      <input type="submit" value="Add" />
    </form>
  );
}
