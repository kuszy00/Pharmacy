import { TextField } from "@mui/material";
import { useController, UseControllerProps, useForm } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
    multiline?: boolean;
    rows?: number;
    type?: string;
    helper?: string;
}

export default function AppTextInput(props: Props) {
    const {fieldState, field } = useController({...props, defaultValue: ''})
    if(props.name == 'price') {
        console.log(field.value);
    }
    return (
        <TextField 
            {...props}
            {...field}
            multiline={props.multiline}
            rows={props.rows}
            type={props.type}
            fullWidth
            variant='outlined'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
        />
    )
} 