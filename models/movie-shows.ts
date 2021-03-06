import { DataTypes } from "sequelize";
import db from "../db/connection";
import { MovieShowStatic } from '../interfaces/movie-show';


const MovieShows = <MovieShowStatic>db.define('movie_shows', {
    price: {
        type: DataTypes.NUMBER
    },
    start_time: {
        type: DataTypes.TIME
    },
    end_time: {
        type: DataTypes.TIME
    },
    day: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    id_room: {
        type: DataTypes.NUMBER
    },
    id_movie: {
        type: DataTypes.NUMBER
    },
});

export default MovieShows;