import React, { useState } from 'react';
import { Link } from 'react-router';
import './multi.scss'

export default function Multi() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    const handleMultiply = () => {
        const result = n1 * n2;
        alert(result);
    };

    return (
        <div>
            <Link to={'/'}>Voltar</Link>

            <input 
                type="number" 
                value={n1} 
                onChange={(e) => setN1(Number(e.target.value))} 
            />
            <input 
                type="number" 
                value={n2} 
                onChange={(e) => setN2(Number(e.target.value))} 
            />
            <button onClick={handleMultiply}>Calcule</button>
        </div>
    );
}
