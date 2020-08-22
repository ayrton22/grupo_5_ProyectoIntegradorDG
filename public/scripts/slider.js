let videoIds = [];
const juegos = document.querySelectorAll('.datos_slider div');

juegos.forEach(function(element){
	videoIds.push({
		id:element.children[0].innerText,
		video:element.children[1].innerText,
		title:element.children[2].innerText,
		description: element.children[3].innerText,
		imagen: element.children[4].innerText,
	});
});


Vue.component('video-carousel', {
	data: function() {
		return {
			currentVideo: 0, //refers to tertiary video on leftmost; main video with be currentVideo+2
			totalVideos: 8,
			videos: [],
			videoPositions: {
				0 : "tertiary tertiary-left",
				1 : "secondary secondary-left",
				2 : "main",
				3 : "secondary secondary-right",
				4 : "tertiary tertiary-right",
				5 : "no visible"
			}
		}
	},
	computed: {
		
	},
	methods:{
		 changeVideo: function(direction, position, noVisible) {
		if(direction == "left") {
			this.currentVideo--;
			if(this.currentVideo < 0) {
				this.currentVideo = 4;
			}
			
		} else if (direction == "right") {
			this.currentVideo++;
			if(this.currentVideo > 4) {
				this.currentVideo = 0;
			}
		} else {
			switch(position) {
				case 'secondary secondary-right':
					this.changeVideo('left');
					break;
				case 'secondary secondary-left':
					this.changeVideo('right');
					break;
				case 'tertiary tertiary-right':
					this.changeVideo('left');
					this.changeVideo('left');
					break;
				case 'tertiary tertiary-left':
					this.changeVideo('right');
					this.changeVideo('right');
					break;
			}
		}
		
		this.videos.forEach((video, i)=>{
			video.active = false;
			let newIndex = i+this.currentVideo;
			if(newIndex > 4) {
				newIndex %= 5;
			}
			video.position = this.videoPositions[newIndex];
		});
		
	}
},
	mounted: function() {

		//Generate randoms carrusel videos
			let arraynumrandom = [];
			let verificador = 0;
			while(arraynumrandom.length < 5)
			{
				let random = Math.floor(Math.random() * videoIds.length);
				if (arraynumrandom.length == 0){
					arraynumrandom.push(random);
					this.videos.push({
						thumbnail: videoIds[random].imagen,
						embed: "https://www.youtube.com/embed/" + videoIds[random].video + "?autoplay=1",
						position: this.videoPositions[arraynumrandom.length-1],
						videoId: arraynumrandom.length-1,
						active: false,
						channelImage: "https://yt3.ggpht.com/a-/AAuE7mCXgsNVSlp9-BLuKFoaAqKxpjJ0T1NB1yJzdQ=s288-mo-c-c0xffffffff-rj-k-no",
						channelName: videoIds[random].title,
						channelTitle: "Running through some sweet Ninty covers",
						channelDescription: videoIds[random].description,
						channelDetail: videoIds[random].id
					});
				}else{
					for(let j = 0; j < arraynumrandom.length; j++){
						if(random != arraynumrandom[j]){
							verificador++;
					}
					if(verificador == arraynumrandom.length){ 
						arraynumrandom.push(random);
						this.videos.push({
							thumbnail: videoIds[random].imagen,
							embed: "https://www.youtube.com/embed/" + videoIds[random].video + "?autoplay=1",
							position: this.videoPositions[arraynumrandom.length-1],
							videoId: arraynumrandom.length-1,
							active: false,
							channelImage: "https://yt3.ggpht.com/a-/AAuE7mCXgsNVSlp9-BLuKFoaAqKxpjJ0T1NB1yJzdQ=s288-mo-c-c0xffffffff-rj-k-no",
							channelName: videoIds[random].title,
							channelTitle: "Running through some sweet Ninty covers",
							channelDescription: videoIds[random].description,
							channelDetail: videoIds[random].id
						});
				}
				
				}
				verificador = 0;
			}
			
		}
	}
});

let app = new Vue({
	el: '#container',
	data: {
		users: []
	},
	methods: {
		
	},
	mounted: function() {
		let self = this;
		
		// Generate array of fake users
		for(let i=0;i<15; i++) {
			//generate random user
			let user = {
				imageLink: faker.internet.avatar(),
				username: faker.internet.userName(),
				playing: faker.company.companyName(),
				playingDisplay: null,
				viewers: chance.integer({min: 0, max: 999}),
				id: null
			}
			user.id = user.username;
			if(user.playing.length > 20) {
				user.playingDisplay = user.playing.slice(0,20) + "...";
			} else {
				user.playingDisplay = user.playing;
			}
			self.users.push(user);
		}
	}
});