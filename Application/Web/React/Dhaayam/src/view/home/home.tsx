import * as React from 'react';
import ComponentBase from '../shared/helpers/componentBase';
import dice from '../../content/images/dice.gif';
import dice0 from '../../content/images/dice-0.gif';
import dice1 from '../../content/images/dice-1.gif';
import dice2 from '../../content/images/dice-2.gif';
import dice3 from '../../content/images/dice-3.gif';

export default class RenderView extends ComponentBase {

    getImage = (count: number) => {
        switch (count) {
            case 0:
                return dice0;
            case 1:
                return dice1;
            case 2:
                return dice2;
            case 3:
                return dice3;
            default:
                return dice0;
        }
    }

    render() {
        let numbers = this.getState('numbers') || [];
        let isPlayer1 = this.getState('isPlayer1');
        return (
            <div>
                <input
                    type='button'
                    onClick={() => this.dispatchStore({
                        rolling: true,
                        numbers: this.getNumbers(),
                        isPlayer1: !this.getState('isPlayer1')
                    })}
                    value={'roll'}
                    // style={{zIndex: 1000, position: 'fixed'}}
                />
                {
                    this.getState('rolling')
                        ?
                        <div
                            onAnimationEndCapture={(e) => {
                                this.dispatchStore({ rolling: false })
                            }}
                            style={{
                                animation: 'backgroundScroll 1s linear 1',
                            }}
                        >
                            <table
                                style={{
                                    animation: 'backgroundScroll 1s linear 1',
                                    transform: `skew(${isPlayer1 ? '-' : ''}10deg, ${isPlayer1 ? '-' : ''}10deg) rotate(-90deg)`,
                                    margin: 'auto',
                                    position: 'relative'
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td style={{ width: 'auto', position: 'relative' }}>
                                            <img src={dice} />
                                        </td>
                                        <td style={{
                                            width: 'auto',
                                            position: 'relative',
                                            left: -55
                                        }}>
                                            <img src={dice} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        (
                            numbers.length === 2
                                ?
                                <table
                                    onAnimationEndCapture={(e) => {
                                        this.dispatchStore({ rolling: false })
                                    }}
                                    style={{
                                        animation: 'backgroundScroll 1s linear 1',
                                        transform: `skew(${isPlayer1 ? '-' : ''}10deg, ${isPlayer1 ? '-' : ''}10deg) rotate(-90deg)`,
                                        margin: 'auto'
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td style={{ width: 'auto', position: 'relative' }}>
                                                <img src={this.getImage(numbers[0])} />
                                            </td>
                                            <td style={{
                                                width: 'auto',
                                                position: 'relative',
                                                left: -55
                                            }}>
                                                <img src={this.getImage(numbers[1])} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                :
                                ''
                        )
                }
                {this.generateTable('Dhayam')}
            </div>
        );
    }
}