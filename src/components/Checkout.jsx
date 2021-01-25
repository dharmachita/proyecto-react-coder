import React, {useLayoutEffect,useState,useEffect,useContext} from "react";
import './Checkout.css'
import {useHistory} from 'react-router-dom';
import {valString,valEmail,valTel} from '../utils/validaciones';
import CardPosition from './CardPosition';
import CardButton from './CardButtons';
import CardData from './CardData';
import {CartContext} from '../contexts/CartContext';
import {getFirestore} from '../db';


export default function Checkout() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  //Items del carrito del contexto
  const { itemsCart,vaciarCarrito } = useContext(CartContext);
  const [loading,setLoading]=useState();

  var itemsOrder=[]/*JSON.stringify(itemsCart.items)*/;

  const db=getFirestore()

  const history=useHistory();

  //Habilitador de siguiente
  const [next,setNext]=useState(false);

  //Errores
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

  //Data -> Información del cliente
  const [cliente,setCliente]=useState({
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    provincia:'',
    ciudad:'',
    cp:'',
    calle:''
  })
  
  //Posición del formulario (1,2,3)
  const [pos,setPos] = useState(1);

  //Validaciones dinamicas de los inputs
  const handleInputChange = (e)=>{
    setCliente({
      ...cliente,
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

  //Botones de Navegación
  const anterior = ()=>{pos===1||setPos(pos-1)}
  const siguiente = ()=>{
    pos===3?
    pagar():
    setPos(pos+1)
  }

  //Actualizaciones de Stock
  const updateStock = (itm)=>{
    db.collection('products').doc(itm.producto.id)
      .update({
        stock:itm.producto.stock-itm.cantidad
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  //Genera la orden y redirecciona
  const pagar=()=>{
    setLoading(true);
    itemsCart.items.forEach(item => {
      //Generar el array de productos para el campo de la orden
      itemsOrder.push({itemID:item.producto.id,cantidad:item.cantidad});
      
      //Actualizar Stock
      updateStock(item);
    });
    db.collection('orders').add({
      cliente,
      precioTotal:itemsCart.precioTotal,
      itemsOrder:JSON.stringify(itemsOrder),
      status:"nuevo",
      fecha: new Date()
    })
    .then(docRef=>{
      vaciarCarrito();
      history.push(`/checkout/${docRef.id}`)
    })
    .catch(err=>{
      console.log('Error en la generación de la orden',err)
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  const habilitaSiguiente=()=>{
    switch(pos){
      case 1:
        if([cliente.nombre,cliente.apellido,cliente.email,cliente.telefono].includes('')||
          err.nombre.error||err.apellido.error||err.email.error||err.telefono.error){
          setNext(false);
        }else{
          setNext(true);
        }
        break;
      case 2:
        if([cliente.provincia,cliente.ciudad,cliente.cp,cliente.calle].includes('')||
          err.provincia.error||err.ciudad.error){
          setNext(false);
        }else{
          setNext(true);
        }
        break;
      default:    
    }
  }

  //Si el cart está vacío redirecciona
  useEffect(()=>{
    itemsCart.items.length===0&&
    history.push('/')
    // eslint-disable-next-line
  },[])

  //Habilita el button si cumple con las condiciones
  useEffect(()=>{
    habilitaSiguiente();
    // eslint-disable-next-line
  },[cliente,pos])

  return (

    <div className='cards-container'>
      <h2>Finalizar Compra</h2>

      <CardPosition pos={pos}/>
      
      <CardData 
        pos={pos}
        data={cliente}
        setData={setCliente}
        err={err}
        handleInputChange={handleInputChange}
        cart={itemsCart}
        loading={loading}
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
