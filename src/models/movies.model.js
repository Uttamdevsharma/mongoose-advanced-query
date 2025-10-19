const {Schema,model} = require('mongoose');

const moviesSchema = new Schema({
    plot: { 
        type: String, 
        required: true 
    },
    genres: [{ 
        type: String 
    }],
    runtime: { 
        type: Number 
    },
    cast: [{ 
        type: String 
    }],
    poster: { 
        type: String 
    },
    title: { 
        type: String, 
        required: true 
    },
    fullplot: { 
        type: String 
    },
    languages: [{ 
        type: String 
    }],
    released: { 
        type: Date 
    },
    directors: [{ 
        type: String 
    }],
    rated: { 
        type: String 
    },
    awards: {
        wins: { type: Number, default: 0 },
        nominations: { type: Number, default: 0 },
        text: { type: String }
    },
    lastupdated: { 
        type: Date 
    },
    year: { 
        type: Number 
    },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
    },
    countries: [{
        type: String
    }],
    type: {
        type: String
    },
    tomatoes: {
        viewer: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number }
        },
        fresh: { type: Number },
        critic: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number }
        },
        rotten: { type: Number },
        lastUpdated: { type: Date }
    },
    num_mflix_comments: { 
        type: Number, 
        default: 0 
    }
    
}, { 
    timestamps: true 
});


const Movie = model("Movie" , moviesSchema)


module.exports = {
    Movie
}
