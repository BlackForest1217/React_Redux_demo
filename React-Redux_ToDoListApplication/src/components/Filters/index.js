import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filtersSlice from './filtersSlice';

export default function Filters() {
  const dispatch = useDispatch();


  const [filterPriorities, setFilterPriorities] = useState([]);

  const handlePriorityChange = (value) => {
    setFilterPriorities(value);
    dispatch(filtersSlice.actions.priorityFilterChange(value));
  }

  return (
    <Row justify='center'>
      <Col sm={24}>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handlePriorityChange}
        >
        </Select>
      </Col>
    </Row>
  );
}
