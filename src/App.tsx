import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'antd';

interface DataType {
  key: number;
  name: string;
  image: string;
  price: number;
  sale: number;
  category_id: number;
}
const App: React.FC = () => {
  const [data, setData] = useState<string[]>([])
  const fetchApi = async () => {
    try {
      return await axios.get('/product/').then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  }
  const loadData = async () => {
    await fetchApi()
  }
  useEffect(() => {
    loadData();
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'key',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'key',
    },
    {
      title: 'sale',
      dataIndex: 'sale',
      key: 'key',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'key',
    },
  ];
  const newData = data.map((e: any) => {
    return {
      key: e.id,
      name: e.name,
      image: e.image,
      price: e.price,
      sale: e.sale,
      category: e.category_id
    }
  })

  return (
    <div className="App">
      <Table columns={columns} dataSource={newData} />
    </div>
  );
}

export default App;
