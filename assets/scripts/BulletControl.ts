import { _decorator, Collider2D, Component, Contact2DType, Director, director, IPhysics2DContact, Node } from 'cc';
import { EnemyControl } from './EnemyControl';
const { ccclass, property } = _decorator;

@ccclass('BulletControl')
export class BulletControl extends Component {
    @property
    speed: number = 800;

    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        const x = this.node.position.x;
        const y = this.node.position.y;
        this.node.setPosition(x, y + this.speed * deltaTime);
        if (y > 820) {
            this.node.destroy();
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        director.once(Director.EVENT_AFTER_PHYSICS, () => {
            if (otherCollider.tag == 1) {
                otherCollider.getComponent(EnemyControl).die();
                this.node.destroy();
            }
        }, this);
       
    }

}


