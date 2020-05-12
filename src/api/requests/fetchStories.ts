
import stories from '../../static/stories.json';

const fetchStories = async ():Promise<any> => {
	const data = await new Promise((resolve) => setTimeout(() => resolve(stories), 500));
	return data;
}

export default fetchStories;
