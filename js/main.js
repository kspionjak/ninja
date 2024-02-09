var game;
var background;
var middleground;
var foreground;
var gameWidth = 500;
var gameHeight = 288;
var scrollSpeed = 120;
var enemyType = 1;
var enemyDead = false;
var enemySpeed = 120;
var enemyJumpFlag = false;
var playerDead = false;

window.onload = function() {
	game = new.Phaser.Game(gameWidth, gameHeight - 48, Phaser.AUTO, "");
	game.state.add('Boot', boot);
	game.state.add('Preload', preload);
	game.state.add('TitleScreen', titleScreen);
	game.state.add('PlayGame', playGame);

	// jump to boot state
	game.state.start("Boot");
}