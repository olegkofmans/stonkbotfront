import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { sendRequest } from '../../redux/actions/actions';
import './main.page.css';

function MainPage() {
  // const isLoading = useSelector((state) => state.isLoading);
  // const data = useSelector((state) => state.data);
  // const error = useSelector((state) => state.error);
  // const dispatch = useDispatch();

  // const handleButtonClick = () => {
  //   dispatch(sendRequest());
  // };

  return (
    <div>
      <div className='example_button'>
        <Link to="/button">Request</Link>
      </div>
      {/* <button onClick={handleButtonClick} disabled={isLoading}>Send request</button>
      {isLoading && <p>Загрузка...</p>}
      {data && <div>Ответ от сервера: {JSON.stringify(data)}</div>}
      {error && <p>Произошла ошибка: {error}</p>} */}
    </div>
  );
}

export default MainPage;