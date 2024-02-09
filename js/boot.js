var boot = function(game) {
};

boot.prototype = {
	preload: function() {
		this.game.load.image('loading', 'assets/sprites/loading.png');
	},

	create: function() {
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// jump to preload state
		this.game.state.start('Preload');
	}
}