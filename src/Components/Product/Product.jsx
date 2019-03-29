import React, { useState } from 'react'
import axios from 'axios'

import './Product.css'

export default function name({img, name, price, id}) {
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState('')

    function submit() {
		axios.put(`/api/inventory?id=${id}`, { desc: input })
			.then(() => { });
	};

  function deleteIt() {
      axios.delete(`/api/inventory?id=${id}`)
  }

  return (
      <div className="product">
      <img src={img} alt="Product" />
      <h1>{name}<span>{price}</span></h1>
      <input style={{ display: edit ? '' : 'none'}}
      onChange={(e) => setInput(e.target.value)} />
      {edit
        ? <button onClick={submit}> Submit </button>
        : <button onClick={() => setEdit(!edit)}> Edit </button>
    }
    <button onClick={deleteIt}> Delete </button>
      </div>
  )
}