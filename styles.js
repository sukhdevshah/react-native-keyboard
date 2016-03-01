'use strict';

import React, {StyleSheet} from 'react-native';

const ONE_PIXEL = 1 / React.PixelRatio.get();


export const BG_COLOR = '#d2d5dc';


export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f4f4f4'
    },
    main: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    row: {
        flexDirection: 'row'
    }
});


export let keyStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 48,
        backgroundColor: '#fff'
    },
    bd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: ONE_PIXEL,
        borderTopWidth: ONE_PIXEL,
        borderColor: '#a5a5a5'
    },
    mainText: {
        fontSize: 20,
        color: '#000'
    },
    otherText: {
        fontSize: 10,
        color: '#333',
    },
    bg_d2d5dc: {
        backgroundColor: BG_COLOR
    },
    dot: {
        height: 30,
        fontSize: 30, 
        lineHeight: 25
    }
});
