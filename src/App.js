import React, { useState, useEffect } from "react";
import Maps from "./maps/Maps";
import { InitialView } from "./data/InitialView"
import Card from "./components/Card";
function App() {
  //FUNCION QUE DA EL TIEMPO ENTRE ANIMACIONES
  useEffect(() => {
    const interval = setInterval(() => {
      cambio()
    }, 15);
    return () => clearInterval(interval);
  });
  // PULSING DOT ICON
  const [pulsing, setPulsing] = useState(true)
  const [carretera, setCarretera] = useState(true)
  const cambiarpulsing = () => { setPulsing(!pulsing) }
  const cambiarcarretera = () => { setCarretera(!carretera) }
  const [data, setData] = useState([
    {
      name: 'b', opacity: 0.8, radius: 50, radiusstatic: 50, coordinates: [
        -79.47629928588867,
        9.037172428991955
      ], color: [255, 116, 0], angle: 0
    },
    {
      name: 'b', opacity: 0.8, radius: 50, radiusstatic: 50, coordinates: [
        -79.48471069335938,
        9.035307588856293
      ], color: [220, 255, 0], angle: 90
    },
    {
      name: 'b', opacity: 0.8, radius: 100, radiusstatic: 100, coordinates: [
        -79.47938919067383,
        9.029543476515242
      ], color: [62, 255, 0], angle: 0
    },
    {
      name: 'b', opacity: 0.8, radius: 100, radiusstatic: 100, coordinates: [
        -79.47097778320312,
        9.033951335422566
      ], color: [0, 255, 174], angle: 90
    },
    {
      name: 'b', opacity: 0.8, radius: 100, radiusstatic: 100, coordinates: [
        -79.48831558227539,
        9.029204408213042
      ], color: [0, 158, 255], angle: 0
    },
    {
      name: 'b', opacity: 0.8, radius: 100, radiusstatic: 100, coordinates: [
        -79.47303771972656,
        9.028865339591997
      ], color: [197, 0, 255], angle: 90
    },
  ])
  const [viatren, setViatren] = useState(true)
  const cambiarviatren = () => { setViatren(!viatren) }


  const [ani, setAni] = useState(true)
  const cambio = () => { setData(data.map(x => ({ ...x, radius: cambiotam(x.radius, x.name, x.radiusstatic) }))) }
  const cambiotam = (x, type, max) => {
    if (type === 'a') {
      return max
    }
    else {
      if (ani) {
        if (x >= max) {
          setAni(!ani)
          return x - (max / 20)
        }
        else {
          return x + (max / 20)
        }
      }
      else {
        if (x <= 1) {
          setAni(!ani)
          return x + (max / 20)
        }
        else {
          return x - (max / 20)
        }
      }
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '300px' }}>
        <Card name='Icono con pulso' onClick={cambiarpulsing} visible={pulsing} />
        <Card name='Autopista' onClick={cambiarcarretera} visible={carretera} />
        <Card name='Vias del tren' onClick={cambiarviatren} visible={viatren} />
      </div>
      <div style={{ display: 'flex', width: 'calc(100% - 300px)', position: 'relative', height: '100vh' }}>
        <Maps viewState={InitialView} data={data} pulsing={pulsing} carretera={carretera} viatren={viatren} />
      </div>
    </div>

  )
}


export default App;