import React,{Component} from "react";

class Car extends Component {
  variabel=()=>{
    var a = 1;
    let b = 2;
    const c = 3;

    return {a,b,c};
  }
  coba=(a,b)=>{

    const suka = "Suka makan " + a + " dan " + b 
    const jarang = "Jarang makan " + a + " dan " + b 
    const tidak = "Tidak makan " + a + " dan " + b 
    
    return {suka,jarang,tidak};
  }

  myVehicle=({type, color})=>{
    const message = 'My ' + type + ' is a ' + color + '.';
    return message;
  }
  objectarray=()=>{
    const object = [
      {type: 'baju', color: 'red'},
      {type: 'sepatu', color: 'blue'},
      {type: 'celana', color: 'green'}
    ]
    const myList = object.map(({type, color}) => <p>Warna {type} adalah {color}</p>) // insert jsx to constant variable
    return myList;
  }

  render(){
    const pakai = this.variabel();
    const {suka,jarang,tidak} = this.coba("mie","telor");
    // const array
    const vehicleOne = {type: 'car', color: 'red'}
    var myVehic = this.myVehicle(vehicleOne);
    var barang = this.objectarray();
    return(
      <div>
        <h5>{pakai.a}</h5>
        <h5>{pakai.b}</h5>
        <h5>{pakai.c}</h5>
        <h5>{suka}</h5>
        <h5>{jarang}</h5>
        <h5>{tidak}</h5>
        <h5>{myVehic}</h5>
        <h5>{barang}</h5>
      </div>
    )
  }
}

export default Car;