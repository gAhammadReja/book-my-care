import React, { useState } from 'react';

const SearchBox = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const inputStyle = {
        border: '2px solid red',
        padding: '8px',
        borderRadius: '4px',
        flex: '1',
        margin: '2px'
    };

    const buttonStyle = {
        backgroundColor: isHovered ? 'white' : 'red',
        border: isHovered ? '2px solid red' : '2px solid white',
        color: isHovered ? 'red' : 'white',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '2px'
    };

    const onSearch = () => {
        alert(searchValue); // Alert the value of the search box
    };

    const onSearchInputChange = (value) => {
        setSearchValue(value); // Update the searchValue state with the current value of the input field
    };

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '500px',
                maxWidth: '80vw',
                margin: 'auto'
            }}>
                <input
                    placeholder={props.placeholder}
                    type='text'
                    value={searchValue}
                    onChange={(e) => {
                        onSearchInputChange(e.target.value); // Call onSearchInputChange to update the searchValue state
                    }}
                    style={inputStyle}
                />
                <button
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                    onClick={onSearch}
                    style={buttonStyle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default SearchBox;
