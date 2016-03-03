/**
 * Keyboard
 */
'use strict';

import React, {
    View, Text, Image, TouchableHighlight, PropTypes
} from 'react-native';

import styles, {
    keyStyle, BG_COLOR
} from './styles';


const numberKeys = [
    [
        {mainText: '1', otherText: ''},
        {mainText: '2', otherText: 'ABC'},
        {mainText: '3', otherText: 'DEF'}
    ],
    [
        {mainText: '4', otherText: 'GHI'},
        {mainText: '5', otherText: 'JKL'},
        {mainText: '6', otherText: 'MNO'}
    ],
    [
        {mainText: '7', otherText: 'PQRS'},
        {mainText: '8', otherText: 'TUV'},
        {mainText: '9', otherText: 'WXYZ'}
    ]
];


class Keyboard extends React.Component {

    constructor(props) {
        super(props);
    }

    _clearAll() {
        this.props.onClear();
    }

    _onPress(key) {
        if (key === '') {
            return;

        // delete key
        } else if (key === 'del') {
            this.props.onDelete();

        // number key
        } else {
            this.props.onKeyPress(key);
        }
    }

    _renderKey(key, index) {
        return (
            <TouchableHighlight 
                key={index} 
                underlayColor={BG_COLOR} 
                style={keyStyle.wrapper} 
                onPress={this._onPress.bind(this, key.mainText)}
            >
                <View style={keyStyle.bd}>
                    <Text style={keyStyle.mainText}>{key.mainText}</Text>
                    <Text style={keyStyle.otherText}>{key.otherText}</Text>
                </View>
            </TouchableHighlight>    
        );
    }

    _renderNumberKeys() {
        return numberKeys.map((group, groupIndex) => {
            return (
                <View key={groupIndex} style={styles.row}>
                    {group.map(this._renderKey.bind(this))}
                </View>
            );
        });
    }

    _isDecimalPad() {
        return this.props.keyboardType === 'decimal-pad';
    }

    _renderDotKey() {
        let dotNode = null, dotText = '';
        if (this._isDecimalPad()) {
            dotText = '.';
            dotNode = <Text style={[keyStyle.mainText, keyStyle.dot]}>.</Text>;
        }
        return (
            <TouchableHighlight 
                underlayColor="#ffffff" 
                style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]} 
                onPress={this._onPress.bind(this, dotText)}
            >
                <View style={keyStyle.bd}>{dotNode}</View>
            </TouchableHighlight>
        );
    }

    render() {
        let props = this.props;

        return (
            <View style={styles.wrapper}>
                <View style={styles.main}>
                    
                    {this._renderNumberKeys()}

                    <View style={styles.row}>
                        {this._renderDotKey()}
                        
                        <TouchableHighlight 
                            underlayColor={BG_COLOR} 
                            style={keyStyle.wrapper}
                            onPress={this._onPress.bind(this, '0')}
                        >
                            <View style={keyStyle.bd}>
                                <Text style={keyStyle.mainText}>0</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            underlayColor="#ffffff" 
                            style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]}
                            onPress={this._onPress.bind(this, 'del')}
                            onLongPress={this._clearAll.bind(this)}
                        >
                            <View style={keyStyle.bd}>
                                <Image source={require('./images/icon_delete.png')}/>
                            </View>
                        </TouchableHighlight>
                    </View>    
                </View>
            </View>
        );
    }
}


Keyboard.propTypes = {
    // 是否显示小数点符号
    keyboardType :   PropTypes.oneOf(['number-pad', 'decimal-pad']),
    // 点击键盘按键
    onKeyPress   :   PropTypes.func,
    // 点击删除按钮
    onDelete     :   PropTypes.func,
    // 长按删除按钮
    onClear      :   PropTypes.func
};


Keyboard.defaultProps = {
    keyboardType :   'number-pad',
    onKeyPress   :   () => {},
    onDelete     :   () => {},
    onClear      :   () => {}
};


export default Keyboard;









