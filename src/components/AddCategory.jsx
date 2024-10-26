import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setTnputValue] = useState('')

    const onInputChange = ({ target }) => {
        setTnputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setTnputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
