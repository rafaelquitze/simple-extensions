scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tilemap`level1`)
