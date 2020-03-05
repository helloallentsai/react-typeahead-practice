import React, { useState } from 'react';

const Autocomplete = ({ options }) => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState(options);
    const [activeIdx, setActiveIdx] = useState(0);

    const handleChange = e => {
        const update = options
            .sort()
            .filter(suggestion => suggestion.indexOf(e.target.value) !== -1);

        setSuggestions(update);
        setInput(e.target.value);
        setActiveIdx(0);
    };

    const handleKeyDown = e => {
        if (e.keyCode === 40) {
            const update = activeIdx + 1;
            const min = Math.min(update, suggestions.length - 1);
            setActiveIdx(min);
        } else if (e.keyCode === 38) {
            const update = activeIdx - 1;
            const max = Math.max(0, update);
            setActiveIdx(max);
        } else if (e.keyCode === 13) {
            const update = suggestions[activeIdx];
            if (suggestions.length === 1 && suggestions[0] === update) {
                setSuggestions(options);
                setInput('');
            } else {
                setSuggestions([update]);
                setInput(update);
            }
            setActiveIdx(0);
        }
    };

    const handleClick = e => {
        if (
            suggestions.length === 1 &&
            suggestions[0] === e.currentTarget.innerText
        ) {
            setSuggestions(options);
            setInput('');
        } else {
            setSuggestions([e.currentTarget.innerText]);
            setInput(e.currentTarget.innerText);
        }
    };

    return (
        <div>
            {!input && <div>search for something</div>}
            {input && <div style={{ visibility: 'hidden' }}>ninja</div>}
            <div>
                <input
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={input}
                ></input>
            </div>
            <div>
                <ul>
                    {input &&
                        suggestions.length > 0 &&
                        suggestions.map((suggestion, idx) => {
                            if (activeIdx === idx) {
                                return (
                                    <li
                                        key={idx}
                                        onClick={handleClick}
                                        name={suggestion}
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'blue'
                                        }}
                                    >
                                        {suggestion}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={idx}
                                        onClick={handleClick}
                                        name={suggestion}
                                    >
                                        {suggestion}
                                    </li>
                                );
                            }
                        })}
                    {input && suggestions.length === 0 && <li>no matches</li>}
                </ul>
            </div>
        </div>
    );
};

export default Autocomplete;
