namespace SpriteKind {
    export const target = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(-50, 50)
    pause(100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.parachuteLeft),
    2000,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.waveRight),
    2000,
    false
    )
})
info.onCountdownEnd(function () {
    game.setDialogFrame(assets.tile`myTile0`)
    game.reset()
})
function Walk_On_Floor (mySprite: Sprite) {
    mySprite.setBounceOnWall(true)
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.y += 1
    }
}
let home_meal: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`UG kills Mamoth`)
pause(2000)
scene.setBackgroundImage(assets.image`cave man back drop`)
pause(2000)
scene.setBackgroundImage(assets.image`myImage2`)
info.startCountdown(60)
info.setLife(10)
pause(2000)
let myEnemy = sprites.create(assets.image`bat`, SpriteKind.Enemy)
let rock = sprites.create(assets.image`boulder`, SpriteKind.target)
rock.setPosition(152, 107)
mySprite = sprites.create(assets.image`Ug`, SpriteKind.Player)
mySprite.setPosition(44, 105)
controller.moveSprite(mySprite)
scene.setBackgroundImage(assets.image`cave`)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
forever(function () {
    myEnemy.setVelocity(5, 5)
    myEnemy.follow(mySprite)
    if (myEnemy.overlapsWith(mySprite)) {
        info.changeScoreBy(-1)
        pause(100)
        myEnemy.setPosition(0, 0)
    }
    if (mySprite.overlapsWith(rock)) {
        animation.runImageAnimation(
        rock,
        assets.animation`rock crush`,
        2000,
        false
        )
        pause(1000)
        info.changeScoreBy(1)
        scene.setBackgroundImage(assets.image`enterance to house`)
        mySprite.setPosition(8, 101)
        home_meal = sprites.create(assets.image`home meal`, SpriteKind.Food)
        home_meal.setPosition(132, 93)
    }
    if (mySprite.overlapsWith(home_meal)) {
        pause(1000)
        info.changeScoreBy(10)
        scene.setBackgroundImage(assets.image`the house`)
        mySprite.setPosition(8, 101)
        home_meal.setPosition(105, 86)
    }
})
