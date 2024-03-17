import { _decorator, Component, ImageAsset, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyControl')
export class EnemyControl extends Component {

    isDie: boolean = false

    start() {

    }

    update(deltaTime: number) {
        const x = this.node.position.x;
        const y = this.node.position.y;
        if (!this.isDie) {
            this.node.setPosition(x, y - 400 * deltaTime);
        }
        if (y < -500) {
            this.node.destroy();
        }
    }

    die() {
        this.isDie = true
        resources.load("enemy_die", ImageAsset, (err: any, imageAsset) => {
            this.node.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(imageAsset);
        })
        setTimeout(() => {
            this.node.destroy();
        }, 300)
    }
}
