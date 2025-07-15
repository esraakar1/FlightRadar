import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Error from '../components/Error';
import "bootstrap/dist/css/bootstrap.min.css";
import c from '../utils/nullCheck';
import { open } from '../redux/slices/detailSlice';
import ReactPaginate from 'react-paginate';

const List = () => {

  const dispatch = useDispatch()

  const { flights, isLoading, error } = useSelector((store) => store.flight);

  // kaçıncı elemandan sonra kesilecek
   const [start, setStart] = useState(1);

  //  sayfa başına eleman sayısı
  const perPage = 11;

  // kaçıncı elemana kadar kesicez
   const end = start + perPage;

  // slice metodu ile başlangıç ve bitiş arasını kes
  const currFlights = flights.slice(start, end)

  // toplam sayfa sayısı
  const total = Math.ceil(flights.length / perPage);

  // yeni sayfaya tıklanınca 
  const handlePage = (event) => {
    setStart (event.selected * 10);
  };

  if(isLoading) return <div className='list-wrapper'><Loader /></div>

  if(error) return <div className='list-wrapper'><Error message={error} /></div>

  return (
    <div className='list-container'>
      <table className='table table-hover table-responsive '>
        <thead>
          <tr>
            <th>id</th>
            <th>Kod</th>
            <th>enlem</th>
            <th>boylam</th>
            <th>derece</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
             {currFlights.map((flight, key) => (
              <tr key={key} >
                <td>{c(flight.id)} </td>
                <td>{c(flight.code)} </td>
                <td>{c(flight.lat)} </td>
                <td>{c(flight.lng)} </td>
                <td>{c(flight.deg)} </td>
                <td>
                  <button type='button' onClick={() => dispatch(open(flight.id))}>Detay</button>
                </td>
              </tr>
             ))}
          </tbody>
        
      </table>
    <div className='paginate-wrapper'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        className='pagination'
        onPageChange={handlePage}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      </div>
    </div>
  )
}

export default List