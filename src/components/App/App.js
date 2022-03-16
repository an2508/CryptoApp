import { useEffect, useState } from 'react';
import '../../index.css';
import { Header } from '../Header/Header';
import { Title } from '../Title/Title';
import { Navbar } from '../Navbar/Navbar'
import Table from '../Table/Table';
import { Card } from '../Card/Card';
import getCurrencies from '../../redux/action/actions'  //thunk function
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { Review } from '../Review/Review';

import { ReactComponent as LogoIcon } from '../../svg/Vector.svg' ////av
import { ReactComponent as LogoIconOne } from '../../svg/svgone.svg'
import { ReactComponent as Dot } from '../../svg/dot.svg'

function App() {

  const data = useSelector(state => state.currencies.currencies)

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies())
  }, [])

  const hello = 'Hello World'

  return (

    <div className='container'>
      <Header />
      <Title />
      <Navbar />
      <Table currencies={data} />

      <div className='card-list'>
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIcon />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIcon />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIcon />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIcon />} />

      </div>

      <div className='card-list'>
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIconOne />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIconOne />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIconOne />} />
        <Card title='Integrated platform' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin accumsan in adipiscing arcu. Et consequat parturient placerat vitae. ' svgFile={<LogoIconOne />} />
      </div>

      <p className='middle_text'>Some of the people below have felt the quality of our platform. You can give your test below. Your next turn. go ahed and prove it</p>
      <div className='review_div'>
        <Review />
        <Review />
        <Review />

      </div>
      <div className='dot'>
        <Dot />
      </div>

    </div>
  );
}

export default App;
