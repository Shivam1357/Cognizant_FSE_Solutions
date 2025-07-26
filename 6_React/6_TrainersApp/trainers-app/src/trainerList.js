import React from 'react'
import trainersMock from './TrainersMock'
import { Link } from 'react-router-dom'

export default function TrainerList() {
    return (
        <div>
            <h3>Trainers List</h3>
            <ul>
                {trainersMock.map((trainer) => 
                    <li key={trainer.trainerId}>
                        <Link to={`/trainer/${trainer.trainerId}`}>
                            {trainer.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
