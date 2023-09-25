import axios from 'axios';

describe('API tests', () => {
  test('should return 5 songs for ENTJ', async () => {
    const response = await axios.get('https://patdel0-personality-music-recommender.hf.space/recommend?mbti_type=entj&num_of_songs=5');
    expect(response.data).toHaveLength(5);
    response.data.forEach((song:any) => {
      expect(song).toHaveProperty('track_id');
      expect(song).toHaveProperty('artist_name');
      expect(song).toHaveProperty('track_name');
      expect(song).toHaveProperty('distance');
    });
  });

  test('should return default number of songs for ENTJ when num_of_songs is not provided', async () => {
    const response = await axios.get('https://patdel0-personality-music-recommender.hf.space/recommend?mbti_type=entj');
    const defaultNum = 10;
    expect(response.data).toHaveLength(defaultNum);
  });
});
