import React from 'react';
import ReactDOM from 'react-dom';
import CameraFeed from './components/CameraFeed';
import './style.scss';

const App = (props) => {
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);
};

    return (
        <div className="App">
            <h1 className="heading">Image capture test</h1>
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));