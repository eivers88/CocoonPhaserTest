(function () {
    "use strict";

    var game = new Phaser.Game(750, 500, Phaser.CANVAS);

    function Game() {}

    Game.prototype = {
        init: function () {

            this.stage.backgroundColor = '#26ac91';

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

        },
        preload: function () {

            this.load.image('bg', './img/bg.jpg');

        },
        create: function () {

            this.add.sprite(0,0,'bg');

        }
    };

    game.state.add('Game', Game);
    game.state.start('Game');


})();