import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
