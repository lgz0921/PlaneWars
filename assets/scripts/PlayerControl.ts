import { _decorator, Component, director, EventTouch, instantiate, Node, Prefab, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    @property(Prefab)
    bulletPre: Prefab = null;


    start() {
        this.creatMovePlane();
        this.createAttackBullet();
    }

    creatMovePlane() {
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            const deltal = event.getDelta();
            const x = this.node.position.x;
            const y = this.node.position.y;
            this.node.setPosition(x + deltal.x, y + deltal.y);
        });
    }

    createAttackBullet() {
        this.schedule(() => {
            const bullet = instantiate(this.bulletPre);
            bullet.setParent(director.getScene().getChildByName("Canvas"));
            bullet.setPosition(this.node.position.x, this.node.position.y + 80)
        }, 0.5);
    }

    update(deltaTime: number) {

    }
}


