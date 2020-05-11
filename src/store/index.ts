import { observable, action } from 'mobx';

import fetchStories from '../api/requests/fetchStories';

import {
	IActions,
	IAsset,
} from '../types';

interface Background {
	color: string;
	img: string;
}

interface IStages {
	stage: string;
	title: string;
	actions: IActions[];
	background: Background;
	assets: IAsset[];
}

interface IPreview {
	title: string;
	background: string;
}

interface IStory {
	title: string;
	description: string;
	stages: IStages[];
	preview: IPreview;
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

};

const store = new StoriesStore();

export default store;
