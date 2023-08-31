import {useState, ChangeEvent} from 'react'


const State = () => {
    const [text, setText]= useState<string | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setText(e.target.value);
    }
  return (
    <div>
        <h3>Text is:</h3>
        <p>{text}</p>
        <input type='text' onChange={handleChange} />
    </div>
  )
}

export default State