import React from 'react';
import { Button } from 'react-native-elements';

export const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
};

export default function CustomButton({ title, type, onPress }) {
    const isPrimary = type === ButtonType.PRIMARY;
    const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
    const titleStyle = isPrimary ? styles.primaryTitle : styles.secondaryTitle;

    return (
        <Button 
            title={title} 
            onPress={onPress}
            buttonStyle={buttonStyle}
            titleStyle={titleStyle}
        />
    );
}

const styles = {
    primaryButton: {
        backgroundColor: '#2972FF',
        borderRadius: 24,
        height: 56,
    },
    primaryTitle: {
        color: '#FFFFFF',
    },
    secondaryButton: {
        backgroundColor: '#E9F0FF',
        borderRadius: 24,
        height: 56,
    },
    secondaryTitle: {
        color: '#2972FF',
    },
};