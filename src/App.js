import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='middle'>
        <h1>Данные паспорта</h1>
        <div className='body'>
          <img className='image' src='ceo.png' alt='person' />
        </div>
        <div className='card'>
          <div className='childCard'>
            <h3>Личные данные</h3>
            <div className='row'>
              <h4>Имя</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Фамилия</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Отчество</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Место рождения</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Дата рождения</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Пол</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='card'>
          <div className='childCard'>
            <h3>Паспортные данные</h3>
            <div className='row'>
              <h4>ПИНФЛ</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Серия паспорта</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Номер паспорта</h4>
              <h6>Jeck</h6>
            </div>
            {/*  */}
            <div className='row'>
              <h4>Срок действия</h4>
              <h6>Jeck</h6>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='card'>
          <div className='childCard'>
            <p>Кем выдан*</p>
            <input
              className='label'
              type='text'
              placeholder='Напишите кем выдан'
            />
            <br />
            <br />
            <p>Дата выдачи*</p>
            <input className='label' type='text' placeholder='ДД.ММ.ГГГГ' />
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='child'>
          <button className='btn'>Продолжить </button>
        </div>
      </div>
    </div>
  )
}

export default App
