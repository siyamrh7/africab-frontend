import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeaderTop from '../components/HeaderTop'
import ImageUploader from '../components/ImageUploader'
import VideoUploader from '../components/VideoUploader'
import { Benifits, Categories } from '../Constants'

import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { PostCreateAction } from '../redux/actions/PostActions'
const CreatePost = () => {
    const [state, setState] = useState({
        name: "", author: "", slogan: "",
        website: "",
        facebook: "",
        instagram: "",
        category: "",
        description: "",
        price: null,
        benefits: [],
        images: [],
    })
    var [benifit, setBenifit] = useState(["More"])
    var [image, setImages] = useState([])
    var [video, setVideos] = useState([])
    const [location, setLocation] = useState([0, 0]);

    const onchangeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onbenifits = (e) => {
        const value = e.target.value
        var arr = benifit.filter((v) => v !== value)
        if (arr.length == benifit.length) {
            return setBenifit([...benifit, value])
        } else {
            return setBenifit(benifit.filter((v) => v !== value))
        }

    }
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.AuthReducers)
    const submitHandler = (e) => {
        e.preventDefault()
        var data = { ...state, benefits: benifit, images: video.concat(image) }


        const formData = new FormData();

        // Append values from state to the FormData object
        formData.append("name", data.name);
        formData.append("author", data.author);
        formData.append("slogan", data.slogan);
        formData.append("website", data.website);
        formData.append("facebook", data.facebook);
        formData.append("instagram", data.instagram);
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("benefits", data.benefits);
        formData.append("coordinates", JSON.stringify(location));

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
                return dispatch(PostCreateAction(formData, token))
            })
            .then(response => {
                
                console.log('Form data submitted successfully!', response);
            })
            .catch(error => {
                console.error('Error submitting form data', error);
            });
    }
    const [error, setError] = useState(null);




    const locationPermition = (e) => {
        var value = e.target.value
        if (value == "yes") {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLocation([longitude, latitude])
                },
                error => setError(error.message)
            );
        } else {

            setLocation([0, 0]);

        }

    }

    useEffect(() => {
        var e = { target: { value: "yes" } }
        locationPermition(e)
    }, [])

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
                            <label htmlFor="author" className="formbold-form-label"> Author / Business Name </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Enter Business / Author name"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>

                        <div className="formbold-input-group">
                            <label htmlFor="slogan" className="formbold-form-label"> Write a slogan about your business (optional)</label>
                            <input
                                type="text"
                                name="slogan"
                                id="slogan"
                                placeholder="Enter your slogan"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>
                        <div className="formbold-input-group">
                            <label htmlFor="price" className="formbold-form-label"> Pricing & Cost (optional)</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Enter Price / Cost"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>

                        <div className="formbold-input-group">
                            <label htmlFor="website" className="formbold-form-label"> Website / External Link (optional)</label>
                            <input
                                type="url"
                                name="website"
                                id="website"
                                placeholder="https://example.com"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>
                        <div className="formbold-input-group">
                            <label htmlFor="facebook" className="formbold-form-label"> Facebook Link (optional)</label>
                            <input
                                type="url"
                                name="facebook"
                                id="facebook"
                                placeholder="https://facebook.com"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>
                        <div className="formbold-input-group">
                            <label htmlFor="facebook" className="formbold-form-label"> Instagram Link (optional)</label>
                            <input
                                type="url"
                                name="instagram"
                                id="instagram"
                                placeholder="https://instagram.com"
                                onChange={onchangeHandler}
                                className="formbold-form-input"
                            />
                        </div>
                        <div className="formbold-input-group">
                            <label className="formbold-form-label" >
                                Which option best describes this category?
                            </label>

                            <select onChange={onchangeHandler} className="formbold-form-select" name="category" id="category">
                                {
                                    Categories.map((c) => (
                                        <option key={c} value={c}>{c}</option>

                                    ))

                                }

                            </select>
                        </div>

                        <div className="formbold-input-radio-wrapper">
                            <label htmlFor="ans" className="formbold-form-label">
                                Do you want to share your location ?
                            </label>

                            <div className="formbold-radio-flex form-bold-row">
                                <div className="formbold-radio-group">
                                    <label className="formbold-radio-label">
                                        <input
                                            className="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                            onChange={locationPermition}
                                            value="yes"
                                        />
                                        Yes
                                        <span className="formbold-radio-checkmark"></span>
                                    </label>
                                </div>

                                <div className="formbold-radio-group">
                                    <label className="formbold-radio-label">
                                        <input
                                            className="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                            onChange={locationPermition}
                                            value="no"

                                        />
                                        No
                                        <span className="formbold-radio-checkmark"></span>
                                    </label>
                                </div>
                                <div className="formbold-radio-group">
                                    <label className="formbold-radio-label">
                                        <input
                                            className="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                            defaultChecked
                                        />
                                        Maybe
                                        <span className="formbold-radio-checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="formbold-input-radio-wrapper">
                            <label className="formbold-form-label">
                                Which benifits you will provide ?
                            </label>
                            <div className="formbold-radio-flex">
                                {
                                    Benifits.map((b) => (
                                        <div className="formbold-radio-group" key={b}>
                                            {/* <label className="formbold-radio-label" htmlFor={b}>
                                                <input
                                                    className="formbold-input-radio"
                                                    type="radio"
                                                    name={b}
                                                    id={b}
                                                    onChange={(e)=>setState({...state,benefits:e.target.value})}
                                                    value={b}
                                                />
                                                {b}
                                                <span className="formbold-radio-checkmark"></span>
                                            </label> */}
                                            <input onChange={onbenifits} value={b} type="checkbox" id={b} /> <label className="formbold-radio-label" for={b}>{b}</label>

                                        </div>
                                    ))
                                }
                                <div className="formbold-radio-group" >

                                    <input readOnly value="More" type="checkbox" id="More" checked /> <label className="formbold-radio-label" for="More">More</label>

                                </div>

                            </div>
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

export default CreatePost