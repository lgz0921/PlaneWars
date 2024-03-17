import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        for (let bgNode of this.node.children) {
            const x = bgNode.position.x;
            const y = bgNode.position.y;
            bgNode.setPosition(x, y - 50 * deltaTime);
            if (bgNode.position.y < -850) {
                bgNode.setPosition(x, bgNode.position.y + 2 * 850);
            }
        }
    }
}


