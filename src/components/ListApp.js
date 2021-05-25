import React, { useEffect, useState, Fragment } from 'react'
import { Table } from 'semantic-ui-react';
import Tabletop from 'tabletop'

const ListApp = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    Tabletop.init({
      key: "1DzpOAbRvKS7uAg_HeYhgQARnWxmUbrN1rvzjkf_JOL0", // <--- Add new key
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>Token</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, i) => (
            <Table.Row key={i}>
              <Table.Cell>{item.URL}</Table.Cell>
              <Table.Cell>{item.token}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default ListApp