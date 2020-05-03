import React from 'react'

export default function FoodForm(props) {
    return (
        <div>
        {props.render ? 
            <form onSubmit={props.submit}>
                <label name="name">food name</label>
                <input type="text" name='name' value={props.name} onChange={props.function}/>
                <label name="calories">calories</label>
                <input type="number" name='calories' value={props.calories} onChange={props.function}/>
                <label name="image">image</label>
                <input type="text" name='image' alt="" value={props.image} onChange={props.function}/>
                <input type="submit" value="submit recipe" />
            </form>
        : ""}
        </div>
    )
}
