import { observable, action } from 'mobx';

import fetchStories from '../api/requests/fetchStories';

interface IActions {
	label: string;
	nextStage: string | null;
}

interface IStages {
	stage: string;
	title: string;
	actions: IActions[];
}

interface IStory {
	title: string;
	description: string;
	stages: IStages[];
}



export abstract class Store {
	stories = [] as IStory[];
	storieTitles = [] as string[];

	async fetchData():Promise<void> {}

}

class StoriesStore implements Store {
	@observable stories = [] as IStory[];
	@observable storieTitles = [] as string[];


	@action.bound
	async fetchData() {
		const data: IStory[] = await fetchStories();
		const titles = data.map((item) => item.title);
    console.log("StoriesStore -> fetchData -> titles", titles)
		this.stories = data;
		this.storieTitles = titles;
	}

	get allStories() {
		return this.stories;
	}

	get titles() {
		return this.storieTitles;
	}

};

const store = new StoriesStore();

export default store;
