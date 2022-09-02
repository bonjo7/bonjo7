import { Table, Badge } from 'react-bootstrap'
import { movies } from '../../data'

const BasicExample = ({ version }) => {
  return (
    <>
      <Badge variant='primary'>{version}</Badge>
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
  )
}

export default BasicExample
