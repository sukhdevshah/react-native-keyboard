/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Keyboard from '../../index';

class Basic extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            words: []        
        };
    }

    _handlePress() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{this.state.words.join('')}</Text>
                <Keyboard 
                    isRenderDot={true}
                    onPress={this._handlePress.bind(this)} 
                />
            </View>
        );
    }
}


AppRegistry.registerComponent('Basic', () => Basic);
