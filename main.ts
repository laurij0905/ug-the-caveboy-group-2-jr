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
let mySprite: Sprite = null
info.startCountdown(60)
info.setLife(10)
scene.setBackgroundImage(assets.image`myImage2`)
pause(2000)
let myEnemy = sprites.create(assets.image`bat`, SpriteKind.Player)
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
        pause(2000)
        info.changeScoreBy(1)
    }
})
