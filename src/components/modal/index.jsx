import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/actions';
import Head from './head';
import Loader from '../Loader';
import Error from '../Error';
import Gallery from './Gallery';
import Airport from './Airport';
import Time from './Time';
import Aircraft from './Aircraft';

const Modal = () => {

    const dispatch = useDispatch();

   const { detailId, isLoading, error, info } = useSelector((store) => store.detail);

   useEffect(() => {
    // id yoksa fonksiyonu durdur
    if(!detailId) return;

    // id si bilinen uçuşun detaylarını al 
    dispatch(getDetails(detailId));
   }, [detailId]);

  return (
    detailId && 
  (<div className='modal-outer'>
    <div className='modal-inner'>
    <Head info={info} />
    { isLoading ? (<Loader />) : error ? (<Error message={error} />) : (info && 
       ( <div className='info-wrapper'> 
            <div>
                <Gallery data={info.aircraft.images} />
                <Airport data={info.airport} />
                <Time data={info.time} />
                <Aircraft data={info.aircraft} />
            </div>
        </div>
      ))
     }
     </div>
  </div>

  ))

}

export default Modal;