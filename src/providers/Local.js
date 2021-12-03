import React, { useState } from 'react';

export const LocalContext = React.createContext({});

export const LocalProvider = (props) =>{
  const [origem, setOrigem] = useState([-20.7204, -46.6101])
  const [lugar, setLugar] = useState({})
  const [zoom, setZoom] = useState(18)
  const [menuOpen, setMenuOpen] = useState(true)
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <LocalContext.Provider value={{origem,setOrigem,
                                    lugar,setLugar,
                                    zoom,setZoom,
                                    menuOpen,setMenuOpen,
                                    infoOpen, setInfoOpen}}>
      {props.children }
    </LocalContext.Provider>
  )
}