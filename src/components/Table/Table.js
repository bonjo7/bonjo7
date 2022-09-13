import React, { useEffect } from "react";
import { Table, Badge } from 'react-bootstrap'
import { movies } from '../../data'
import { useUnleashContext, useFlag, useVariant } from '@unleash/proxy-client-react';

const BasicExample = () => {
  const enabled = useFlag('bonjo_test');
  const variant = useVariant('bonjo_test');
  const updateContext = useUnleashContext();

  useEffect(() => {
    // context is updated with userId
    updateContext({ userId: 'bonjo@kargo.com' });
    
  }, []);

  return (
    <>
      {enabled && (
        <>
        <Badge variant='primary'>{variant?.payload?.value}</Badge>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>YEAR</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m, i) => {
              return (
                <tr key={i}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        </>
      )}
    </>
  )
}

export default BasicExample