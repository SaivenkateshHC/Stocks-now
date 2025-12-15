import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = (
    {
        name,
        label,
        placeholder,
        type = 'text',
        register,
        error,
        validation,
        disabled,
        value
    }: FormInputProps
) => {
    return (
        <div className='space-y-2 '>
            <Label htmlFor={name}>{label}</Label>
            <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                {...register(name, validation)}
                className={cn('form-input', { 'opacity-50 cursor-not-allowed': disabled }, { '!border-l-red-500': error })}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
        </div>
    )
}

export default InputField