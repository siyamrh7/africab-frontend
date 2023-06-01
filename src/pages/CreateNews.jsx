import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeaderTop from '../components/HeaderTop'
import ImageUploader from '../components/ImageUploader'
import VideoUploader from '../components/VideoUploader'

import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { PostCreateAction } from '../redux/actions/PostActions'
import { NewsCreateAction } from '../redux/actions/NewsActions'
const CreateNews = () => {
    const [state, setState] = useState({
        name: "", author: "",
        website: "",
        description: "",
        images: [],
    })
    var [image, setImages] = useState([])
    var [video, setVideos] = useState([])

    const onchangeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const { token } = useSelector(state => state.AuthReducers)
    const submitHandler = (e) => {
        e.preventDefault()
        var data = { ...state, images: video.concat(image) }


        const formData = new FormData();

        // Append values from state to the FormData object
        formData.append("name", data.name);
        formData.append("author", data.author);
        formData.append("website", data.website);
        formData.append("description", data.description);

        // Map the array of blob URLs to an array of fetch promises
        const fetchPromises = data.images.map(imageUrl => fetch(imageUrl));

        // Use Promise.all() to fetch all the images simultaneously
        Promise.all(fetchPromises)
            .then(responses => {
                // Map the array of responses to an array of blob promises
                const blobPromises = responses.map(response => response.blob());

                // Use Promise.all() again to convert all the blobs to files simultaneously
                return Promise.all(blobPromises);
            })
            .then(blobs => {
                // Append each file to the FormData object with the 'images' name
                blobs.forEach((blob, index) => {
                    console.log(blob)
                    formData.append('images', blob, `media-${index}.${blob.type.split('/')[1]}`);
                });

                // Submit the form data to the server using axios
                return dispatch(NewsCreateAction(formData, token))
            })
            .then(response => {
                console.log('Form data submitted successfully!', response);
            })
            .catch(error => {
                console.error('Error submitting form data', error);
            });
    }





    return (
        <>
            {/* <Header/> */}
            <div className="formbold-main-wrapper">

                <div className="formbold-form-wrapper">
                    {/* <img src="your-image-url-here.jpg"/> */}
                    <form >
                        <div className="formbold-input-group">
                            <label htmlFor="name" className="formbold-form-label"> Title </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Title "
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>
                        <div className="formbold-input-group">
                            <label htmlFor="author" className="formbold-form-label">News Source Name</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="CNN / BBC"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>

                        <div className="formbold-input-group">
                            <label htmlFor="website" className="formbold-form-label"> News Source Link</label>
                            <input
                                type="url"
                                name="website"
                                id="website"
                                placeholder="https://example.com"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>






                        <div>
                            <label htmlFor="description" className="formbold-form-label">
                                Write a well described description
                            </label>
                            <textarea
                                rows="6"
                                name="description"
                                id="description"
                                placeholder="Type here..."
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            ></textarea>
                        </div>
                        <div className='ImageUpload'>
                            <ImageUploader setImages={setImages} />
                            <VideoUploader setVideos={setVideos} />
                        </div>

                        <button className="formbold-btn" onClick={submitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNews