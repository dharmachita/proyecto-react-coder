import React, { useState, useEffect } from "react";

//Loader
import { ThreeDots } from "svg-loaders-react";

//DB - Storage
import { getStorage } from "../../../db";

//Img Placeholders
import smImg from "../../../assets/150.png";
import lgImg from "../../../assets/300.png";

export default function Imagen({ src, alt, fld, size='sm'}) {
  const [url, setUrl] = useState(smImg);
  const [loading, setLoading] = useState(true);
  const getSize = ()=>{
    size==='sm'?setUrl(smImg):setUrl(lgImg);
  }

  useEffect(() => {
    getSize()
    getStorage()
      .ref(fld)
      .child(`${src}.png`)
      .getDownloadURL()
      .then((val) => setUrl(val))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <ThreeDots fill="red" size="small"/>
      ) : (
        <img src={url} alt={alt} />
      )}
    </div>
  );
}
