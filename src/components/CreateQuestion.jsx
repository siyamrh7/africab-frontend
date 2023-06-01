import React, { useEffect, useState } from 'react'
import Header from './Header'
import HeaderTop from './HeaderTop'
import ImageUploader from './ImageUploader'
import VideoUploader from './VideoUploader'

import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionCreateAction } from '../redux/actions/CommunityActions'
import { NewsCreateAction } from '../redux/actions/NewsActions'
const CreateQuestion = ({answer}) => {
    const [state, setState] = useState({
        question: "", answer: "",
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
        formData.append("question", data.question);
        formData.append("answer", data.answer);
     

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
                return dispatch(QuestionCreateAction(formData, token))
            })
            .then(response => {
                console.log('Form data submitted successfully!', response);
            })
            .catch(error => {
                console.error('Error submitting form data', error);
            });
    }


    useEffect(()=>{
        if(answer){
          setState(answer)
        }
          },[answer])

    return (
        <>
            {/* <Header/> */}
            <div className="formbold-main-wrapper" style={{  position: "absolute" ,width:"100%", overflow:"scroll"}}>

                <div className="formbold-form-wrapper">
                    {/* <img src="your-image-url-here.jpg"/> */}
                    <form >
                        <div className="formbold-input-group">
                            <label htmlFor="name" className="formbold-form-label">Question </label>
                            <textarea
                                type="text"
                                name="question"
                                id="name"
                                placeholder="Enter Question "
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                                rows={"3"}
                                value={state.question}
                                style={{fontWeight:"bold"}}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="formbold-form-label">
                                Write the answer if you have (optional)
                            </label>
                            <textarea
                                rows="6"
                                name="answer"
                                id="description"
                                placeholder="Type here..."
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            ></textarea>
                        </div>
                        <div className='ImageUpload'>
                            <ImageUploader setImages={setImages} />
                            {/* <VideoUploader setVideos={setVideos} /> */}
                        </div>

                        <button className="formbold-btn" onClick={submitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateQuestion