import { FormControl, InputLabel,  OutlinedInput} from "@mui/material";

interface InputLabelProps {
  id?: string;
  labelName?: string;
  inputError?: boolean;
  valueName?: string;
  setValue: (value: string) => void;
  endAdornment?: any;
  type?: string;
  enable?:any
  rownum?:number
  multiline?:boolean
}

export function InputLabelMui({ id, labelName, inputError, valueName, setValue, endAdornment, type,enable,rownum,multiline }: InputLabelProps) {

    return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} error={inputError}>
        {labelName}
      </InputLabel>
      <OutlinedInput fullWidth
                     sx={{ borderRadius:'16px' }}
                     rows={rownum}
                     multiline={multiline}
                     id={id}
                     value={valueName}
                     label={labelName}
                     onChange={e => setValue(e.target.value)}
                     endAdornment={endAdornment}
                     error={inputError}
                     type={type}
                     disabled={enable}
      />
    </FormControl>

  )

}