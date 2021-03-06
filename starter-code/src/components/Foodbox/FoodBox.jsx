import React from 'react'
import 'bulma/css/bulma.css';

export default function FoodBox(props) {
    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" name="quantity" value={props.quantity} onChange={props.function} /> 
        </div>
        <div className="control">
          <button className="button is-info" onClick={props.add}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}
