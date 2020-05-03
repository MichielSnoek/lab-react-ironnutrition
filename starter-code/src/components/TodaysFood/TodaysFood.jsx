import React from 'react'

export default function TodaysFood(props) {
    return (
            <div>
        
          <ul>
            <li>You ordered <strong>{props.quantity}</strong> <strong>{props.name}</strong> with a total of <strong>{props.calories}</strong> calories</li>
          </ul>

        
        </div>
    )
}
