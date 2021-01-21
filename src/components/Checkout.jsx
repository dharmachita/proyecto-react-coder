import React, {useLayoutEffect,useState,useEffect,useContext} from "react";
import './Checkout.css'
import {useHistory} from 'react-router-dom';
import {valString,valEmail,valTel} from '../utils/validaciones';
import CardPosition from './CardPosition';
import CardButton from './CardButtons';
import CardData from './CardData';
import {CartContext} from '../contexts/CartContext';

export default function Checkout() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  const { itemsCart } = useContext(CartContext);

  const history=useHistory();

  const [next,setNext]=useState(false);

  const [err,setErr]=useState({
    nombre:{error:false,msjError:''},
    apellido:{error:false,msjError:''},
    email:{error:false,msjError:''},
    telefono:{error:false,msjError:''},
    provincia:{error:false,msjError:''},
    ciudad:{error:false,msjError:''},
    cp:{error:false,msjError:''},
    calle:{error:false,msjError:''}
  })

  const [data,setData]=useState({
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    provincia:'',
    ciudad:'',
    cp:'',
    calle:''
  })
 
  const [pos,setPos] = useState(1);

  const handleInputChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    switch(e.target.name){
      case 'nombre':
      case 'apellido':
      case 'provincia':
      case 'ciudad':
        setErr({
          ...err,
          [e.target.name]:{
            error:valString(e.target).err,
            msjError:valString(e.target).msj
          }
        })
        break;
      case 'email':
        setErr({
          ...err,
          [e.target.name]:{
            error:valEmail(e.target).err,
            msjError:valEmail(e.target).msj
          }
        })
        break;
        case 'telefono':
          setErr({
            ...err,
            [e.target.name]:{
              error:valTel(e.target).err,
              msjError:valTel(e.target).msj
            }
          })
          break;
      default:
        setErr({
          ...err
        })    
    }

  }

  const anterior = ()=>{pos===1||setPos(pos-1)}
  const siguiente = ()=>{
    pos===3?
    history.push('/scheckout'):
    setPos(pos+1)
  }

  const habilitaSiguiente=()=>{
    switch(pos){
      case 1:
        if([data.nombre,data.apellido,data.email,data.telefono].includes('')||
          err.nombre.error||err.apellido.error||err.email.error||err.telefono.error){
          setNext(false);
        }else{
          setNext(true);
        }
        break;
      case 2:
        if([data.provincia,data.ciudad].includes('')||
          err.provincia.error||err.ciudad.error){
          setNext(false);
        }else{
          setNext(true);
        }
        break;
      default:    
    }
  }

  useEffect(()=>{
    habilitaSiguiente();
    // eslint-disable-next-line
  },[data,pos])

  return (

    <div className='cards-container'>
      <h2>Finalizar Compra</h2>

      <CardPosition pos={pos}/>
      
      <CardData 
        pos={pos}
        data={data}
        err={err}
        handleInputChange={handleInputChange}
        cart={itemsCart}
        />
      
      <CardButton 
        anterior={anterior}
        siguiente={siguiente}
        pos={pos}
        next={next}
      />

    </div>

  );
}
