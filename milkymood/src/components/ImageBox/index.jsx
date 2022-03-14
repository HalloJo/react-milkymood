import React from 'react';
import { Image } from './ImageBox.styles';

const ImageBox = ({x, y}) => {
    return (
        <Image $initialX={x} $initialY={y} />
    )
}

export default ImageBox