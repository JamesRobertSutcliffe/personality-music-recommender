```
title: Recommendation system
keywords: #ml #recommendation #song
```

# Recommendation System

The recommendation system is hosted on [HuggingFace Spaces](https://huggingface.co/spaces/patdel0/personality-music-recommender/tree/main).
You can find the API docs [here](https://patdel0-personality-music-recommender.hf.space/docs).

## Fetching song recommendations

```js
fetch('https://patdel0-personality-music-recommender.hf.space/recommend?mbti_type=entj&num_of_songs=20')
```

#### Song object result
```js
{
    "track_id": "2fdMAIsNH4wY7RRda8aCfL",
    "artist_name": "Wilco",
    "track_name": "You and I",
    "distance": 0.3430891495976831 // Lower number means it's a better recommendation
}
```
