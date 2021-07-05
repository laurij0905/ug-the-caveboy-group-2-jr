function Walf_On_Floor (mySprite: Sprite) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.y += 1
    }
}
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
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage2`)
pause(2000)
mySprite = sprites.create(assets.image`Ug`, SpriteKind.Player)
mySprite.setPosition(44, 105)
controller.moveSprite(mySprite)
scene.setBackgroundImage(assets.image`cave`)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
