import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input';

//Dando um extends em outras props no TYPE
type Props = InputProps & {
  control: Control<any>; //Falo que meu input vai ser controlado pelo react-hook-form
  name: string; //Cada nome tem que ser único dentro do react-hook-form
  error?: FieldError;
}

import { Error } from './styles';

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller 
        name={name}
        control={control}
        //field -> Consigo resgatar o onChange e o value que esta sendo controlado pelo meu react-hook-form
        render={({ field: { onChange, value }}) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />

      {
        error && <Error>{error.message}</Error>
      }
    </>
  );
}