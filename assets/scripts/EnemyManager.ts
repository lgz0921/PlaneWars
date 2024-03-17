import { _decorator, Component, director, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {
    @property(Prefab)
    enemyPrefab: Prefab = null

    start() {
        this.schedule(() => {
            const enemy = instantiate(this.enemyPrefab)
            enemy.setParent(director.getScene().getChildByName("Canvas"));
            enemy.setPosition(Math.random() * -400 + 200, this.node.position.y)
        }, 1)
    }

    update(deltaTime: number) {

    }
}


