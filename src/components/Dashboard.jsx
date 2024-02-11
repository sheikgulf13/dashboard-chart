// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/dataSlice';
import Table from './Table';
import Grid from './Grid';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details[0]);

  //Loading API data in a component only once
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className='container'>
      <Table data={data} />
      <h1>Chart</h1>
      <Grid detail={data} />
    </div>
  );
};

export default Dashboard;
