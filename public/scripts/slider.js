let videoIds = ["JSapXD9vxYA", "vgQNOIhRsV4", "oz-O74SmTSQ", "ZOgBVR21pWg", "GTRRJkfo5Xs"];

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
				4 : "tertiary tertiary-right"
			}
		}
	},
	computed: {
		
	},
	methods: {
		changeVideo: function(direction, position) {
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
		
		//Generate array of fake carousel videos
		for (i=0; i<5; i++) {
			let videoId = videoIds[i];
			let videoEmbed = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
			let videoImage = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
			let channelImage = "https://yt3.ggpht.com/a-/AAuE7mCXgsNVSlp9-BLuKFoaAqKxpjJ0T1NB1yJzdQ=s288-mo-c-c0xffffffff-rj-k-no";
			let video = {
				thumbnail: videoImage,
				embed: videoEmbed,
				position: this.videoPositions[i],
				videoId: videoId,
				active: false,
				channelImage: channelImage,
				channelName: "New Game Plus",
				channelTitle: "Running through some sweet Ninty covers",
				channelViews: 2345
			}
			
			this.videos.push(video);
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