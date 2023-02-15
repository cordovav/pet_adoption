import React, { useState, useEffect } from 'react';
import axios from "axios";

function Edit (){
    let id = window.location.href.split('/')
    id = id[id.length -1]
    console.log(id)

    const [editingDog, setEditingDog] = useState(null);
    const [ dogName, setDogName ] = useState('');
    const [ dogBreed, setDogBreed ] = useState('');
    const [ dogAge, setDogAge ] = useState(0);
    const [ dogImage, setDogImage ] = useState('');
    const [ dogEmail, setDogEmail ] = useState('');
    
    const handleEdit = (dog) => {
        const { dog_id, name, breed, age, image,email } = dog;
        setEditingDog({ dog_id, name, breed, age, image, email });
    };

    useEffect(()=> {
        if(editingDog) {
                setDogName(editingDog.dogName);
                setDogBreed(editingDog.dogBreed);
                setDogAge(editingDog.dogAge);
                setDogImage(editingDog.dogImage);
                setDogEmail(editingDog.dogEmail);
            }
        }, [editingDog]);


    const handleUpdate = async () => {
    const updated = {
        dogName,
        dogBreed,
        dogAge,
        dogImage,
        dogEmail,
    }
    
    try {
        const response = await axios.put(`http://localhost:3002/dogs/${id}`, updated);
    } catch (error) {
        console.error(error);
    }
    };
    console.log(dogName);


return(
    <div className="form">
            <h1>Edit Information</h1>
        <form onSubmit={this.handleEdit}>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="text" id="name" name="name" required onChange={(e) => setDogName(e.target.value)}></input>
        <br></br>
        <hr></hr>

        <label htmlFor="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed" required onChange={(e) => setDogBreed(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="age">Age:</label><br></br>
        <input type="number" id="age" name="age" required onChange={(e) => setDogAge(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="image">Image URL:</label><br></br>
        <input type="text" id="image" name="image" required onChange={(e) => setDogImage(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="email">Email:</label><br></br>
        <input type="email" id="email" name="email"required onChange={(e) => setDogEmail(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <button type="submit">Submit</button>
    </form>
    
    </div>
    )
}

export default Edit;