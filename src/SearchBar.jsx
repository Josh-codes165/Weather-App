import { useState } from "react"


function SearchBar({onSearch}) {

    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input) return
        onSearch(input);
        setInput("")

    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={input} 
                placeholder="Enter city name" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar