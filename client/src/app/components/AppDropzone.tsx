import { UploadFile } from '@mui/icons-material';
import { FormControl, FormHelperText, Typography } from '@mui/material';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps {}

export default function AppDropzone(props: Props) {
    const { fieldState, field } = useController({ ...props, defaultValue: null });

    const dzStyles = {
        display: 'flex',
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '20px',
        alignItems: 'center',
        height: 150,
        width: 300
    }

    const dzActive = {
        borderColor: '#9C27B0'
    }

    const onDrop = useCallback((acceptedFiles: any[]) => {
        acceptedFiles[0] = Object.assign(acceptedFiles[0], 
            {preview: URL.createObjectURL(acceptedFiles[0])});
        field.onChange(acceptedFiles[0]);
    }, [field])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <FormControl error={!!fieldState.error} style={isDragActive ? {...dzStyles, ...dzActive} : dzStyles}>
                <input {...getInputProps()} />
                <UploadFile sx={{fontSize: '60px'}} />
                <Typography variant='h5'>Drop image here</Typography>
                <FormHelperText>{fieldState.error?.message}</FormHelperText> 
            </FormControl>
        </div>
    )
} 