import React, { useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const [rev, setRev] = useState('');
    const [totalRev, setTotalRev] = useState([]);
    const [likes, setLikes] = useState([]);

    const history = useNavigate();

    const onChange = (e) => {
        setRev(e.target.value);
    };

    const addNote = async (description, user) => {
        const response = await fetch(`http://localhost:5000/api/comments/addcomment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ description, user })
        });

        if (response.ok) {
            const note = await response.json();
            setTotalRev([...totalRev, note]);
            setLikes([...likes, false]);
            setRev('');
        } else {
            console.log('Error while adding a comment');
        }
    }

    const getNotes = async () => {
        // API call to fetch comments
        const response = await fetch(`http://localhost:5000/api/comments/fetchallcomments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const json = await response.json();
            setTotalRev(json);
            setLikes(new Array(json.length).fill(false));
        } else {
            console.log('Error while fetching comments');
        }
    }

    useEffect(() => {
        getNotes();
    }, []);

    const onPost = () => {
        if (localStorage.getItem('token')) {
            if (rev.trim() !== '') {
                const jsonString = localStorage.getItem('token');
                const jsonData = JSON.parse(jsonString);
                const userData = jsonData.data;
                addNote(rev, userData.name);
            } else {
                alert('Please write something');
            }
        } else {
            alert('Please login to add your experience.');
        }
    };

    const handleHeartClick = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index] = !updatedLikes[index];
        setLikes(updatedLikes);
    };

    return (
        <>
            <div className="h-screen review overflow-scroll">
                <h1 className="text-3xl lg:text-4xl py-9 font-semibold text-center">Share your experience here.</h1>
                <textarea
                    name="review"
                    id="review"
                    rows="7"
                    className="block w-3/4 lg:w-1/2 mx-auto bg-[#f0ebe2ce] p-2 resize-none placeholder-gray-600"
                    style={{ border: '1px solid black' }}
                    placeholder="Write your experience."
                    onChange={onChange}
                    value={rev}
                />
                <button className="bg-[#86c984] block my-3 py-2 rounded-md mentbtn font-semibold w-[200px] mx-auto hover-bg-[#519134]" onClick={onPost}>Post</button>
                <div>
                    <h2 className="text-2xl my-5 font-semibold text-center">Reviews</h2>
                    <div className="w-3/4 lg:w-1/2 mx-auto p-2 mt-3 ">


                        {totalRev.length === 0 ? (
                            <p className='text-center text-xl font-semibold'>No comments available.</p>
                        ) : (
                            totalRev.map((review, index) => (
                                <div className="my-3 bg-[#e2eadd] p-2 mentbtn" style={{ border: '2px solid black' }}>
                                    <div className="text-sm font-mono">{review.user}</div>
                                    <div className="flex justify-between">
                                        <div key={index}>{review.description}</div>
                                        <div
                                            className={`flex items-center w-[20px] ${likes[index] ? 'text-[#ff3030]' : ''}`}
                                            onClick={() => handleHeartClick(index)}
                                        >
                                            <BsHeartFill />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default News;
