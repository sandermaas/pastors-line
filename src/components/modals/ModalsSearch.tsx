import React, { useState, useCallback } from 'react'
import debounce from 'lodash/debounce'

interface IModalsSearch {
    onSearch: (query: string) => void
}

const ModalsSearch: React.FunctionComponent<IModalsSearch> = ({ onSearch }) => {
    const [input, setInput] = useState('')
    const delayedInput = useCallback(debounce((q: string) => onSearch(q), 500), [])

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
        delayedInput(event.currentTarget.value)
    }

    return (
        <div className="d-flex align-items-center">
            <p style={{ margin: 0 }}>Search</p>
            <input 
                style={{ marginLeft: '1em', width: '30%' }}
                type="text"
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default ModalsSearch