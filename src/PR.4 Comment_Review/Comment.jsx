import React, { useState } from 'react';
import './assets/css/style.css';
import img1 from './assets/images/user.png'

export default function Comment() {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState({});
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        const newError = {};
        if (input.name && input.email && input.rating && input.comment) {
            const timestamp = new Date().toLocaleString();
            setUsers([...users, { ...input, timestamp }]);
            setInput({});
        } else {
            if (!input.name) {
                newError.name = 'Name is required!';
            }
            if (!input.email) {
                newError.email = 'Email is required!';
            }
            if (!input.rating) {
                newError.rating = 'Rating is required!';
            }
            if (!input.comment) {
                newError.comment = 'Comment is required!';
            }
        }
        setError(newError);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Comment / Review</h3>
                <input type="text" name='name' onChange={handleChange} value={input.name || ''} placeholder="Username *" />
                <p className='error'>{error.name}</p>
                <input type="email" name='email' onChange={handleChange} value={input.email || ''} placeholder="Email *" />
                <p className='error'>{error.email}</p>
                <select name="rating" onChange={handleChange} value={input.rating || ''}>
                    <option value="">Select Rating *</option>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                </select>
                <p className='error'>{error.rating}</p>
                <textarea name="comment" onChange={handleChange} value={input.comment || ''} cols="20" rows="5" placeholder='Comment *'></textarea>
                <p className='error'>{error.comment}</p>
                <button type="submit">Submit</button>
            </form>
            <div className="data">
                <h3>Comments</h3>
                {users.map((user) => (
                    <div className='deta'>
                        <div className="d-flex">
                            <img src={img1} alt="" />
                            <p>{user.name}</p>
                        </div>
                        <p className='prg graylite'>{user.email}</p>
                        <p className='prg bg'>{user.rating}</p>
                        <p className='prg'>{user.comment}</p>
                        <p className='prg rh'>{user.timestamp}</p>
                    </div>
                ))}
            </div>
        </>
    );
}