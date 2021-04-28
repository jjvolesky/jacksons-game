namespace SpriteKind {
    export const Flyer = SpriteKind.create()
    export const ofkindChest = SpriteKind.create()
    export const ofkindLava = SpriteKind.create()
}
function levelThree () {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`thirdlevel`)
    tiles.placeOnRandomTile(pc, assets.tile`playerSpawn`)
    for (let chestSpawns of tiles.getTilesByType(assets.tile`chestSpawn`)) {
        closedChest = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.ofkindChest)
        tiles.placeOnTile(closedChest, chestSpawns)
    }
    for (let flyingSpawns of tiles.getTilesByType(assets.tile`flyerSpawn`)) {
        flying = sprites.create(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Flyer)
        flying.follow(pc, 20)
        tiles.placeOnTile(flying, flyingSpawns)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pc.vy = -185
})
function finalLevel () {
    scene.setBackgroundColor(12)
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnRandomTile(pc, assets.tile`playerSpawn`)
}
function levelOne () {
    game.splash("Welcome to Jackson's Game", "Kill enemies, don't touch lava, collect cups, and win the game!")
    game.splash("Look for hidden treasure too!")
    tiles.setTilemap(tilemap`firstlevel`)
    tiles.placeOnRandomTile(pc, assets.tile`playerSpawn`)
    for (let chestSpawns of tiles.getTilesByType(assets.tile`chestSpawn`)) {
        closedChest = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.ofkindChest)
        tiles.placeOnTile(closedChest, chestSpawns)
    }
    for (let walkerSpawns of tiles.getTilesByType(assets.tile`walkerSpawn`)) {
        walker = sprites.create(img`
            . . . . . f f f f f . . . . . . 
            . . . . f e e e e e f . . . . . 
            . . . f d d d d d e e f . . . . 
            . . f f f d d f f d e f f . . . 
            . c d d e e d d d d e d d f . . 
            . c c d d d d c d d e d f f f . 
            . c d c c c c d d d e d f b d f 
            . . c d d d d d d e e f f d d f 
            . . . c d d d d e e f f e f f f 
            . . . . f f f e e f e e e f . . 
            . . . . f e e e e e e e f f f . 
            . . . f e e e e e e f f f e f . 
            . . f f e e e e f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f e e f d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `, SpriteKind.Enemy)
        walker.follow(pc, 30)
        walker.ay = 500
        tiles.placeOnTile(walker, walkerSpawns)
    }
    for (let flyingSpawns of tiles.getTilesByType(assets.tile`flyerSpawn`)) {
        flying = sprites.create(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Flyer)
        flying.follow(pc, 20)
        tiles.placeOnTile(flying, flyingSpawns)
    }
}
sprites.onDestroyed(SpriteKind.Flyer, function (sprite) {
    endthirdlevel += 1
    if (endthirdlevel == 14) {
        finalLevel()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cup`, function (sprite, location) {
    info.changeScoreBy(3)
    nextLevel()
    endthegame += 1
    if (endthegame == 3) {
        game.over(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(sprite, assets.tile`playerSpawn`)
})
function nextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Flyer)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.ofkindChest)) {
        value.destroy()
    }
    currentlevel += 1
    if (currentlevel == 1) {
        levelTwo()
    } else if (currentlevel == 2) {
        levelThree()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ofkindChest, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    otherSprite.destroy()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flyer, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.bottom) {
        pc.vy = -150
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
function levelTwo () {
    scene.setBackgroundColor(12)
    tiles.setTilemap(tilemap`secondlevel`)
    tiles.placeOnRandomTile(pc, assets.tile`playerSpawn`)
    for (let chestSpawns of tiles.getTilesByType(assets.tile`chestSpawn`)) {
        closedChest = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.ofkindChest)
        tiles.placeOnTile(closedChest, chestSpawns)
    }
    for (let walkerSpawns of tiles.getTilesByType(assets.tile`walkerSpawn`)) {
        walker = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .....fffc1111111f.......
            ...fc111cd1111111f......
            ...f1b1b1b1111dddf......
            ...fbfbffcf11fcddf......
            ......fcf111111bbf......
            .......ccbdb1b1fcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........fffffffffff.....
            .........fffffc111cf....
            .........fffff1b1b1f....
            ..........ffffbfbfbf....
            ...........ffff.........
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        walker.follow(pc, 30)
        walker.ay = 500
        tiles.placeOnTile(walker, walkerSpawns)
    }
    for (let flyingSpawns of tiles.getTilesByType(assets.tile`flyerSpawn`)) {
        flying = sprites.create(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Flyer)
        flying.follow(pc, 20)
        tiles.placeOnTile(flying, flyingSpawns)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.bottom) {
        pc.vy = -150
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let walker: Sprite = null
let flying: Sprite = null
let closedChest: Sprite = null
let endthegame = 0
let endthirdlevel = 0
let currentlevel = 0
let pc: Sprite = null
scene.setBackgroundColor(9)
pc = sprites.create(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
pc.ay = 500
scene.cameraFollowSprite(pc)
controller.moveSprite(pc, 100, 0)
info.setLife(7)
info.setScore(0)
currentlevel = 0
endthirdlevel = 0
endthegame = 0
levelOne()
