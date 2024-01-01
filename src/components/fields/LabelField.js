import React from "react";
import { Box, Input, Label, Select, Option } from "../elements";

export default function LabelField({ label, labelDir, fieldSize, option, type, placeholder, ...rest }) {
    return (
        <Box className={`mc-label-field-group ${ label ? labelDir || "label-col" : "" }`}>
            {label && <Label className="mc-label-field-title">{ label }</Label>}
            {type ? 
                <Input 
                    type = { type || "text" } 
                    placeholder = { placeholder || "Type here..." } 
                    className = {`mc-label-field-input ${ fieldSize || "w-md h-sm" }`} 
                    { ...rest } 
                />
            :
                <Select className={`mc-label-field-select ${ fieldSize || "w-md h-sm" }`} { ...rest }>
                    {option.map((item, index) => (
                        <Option key={ index } value={ item }>{ item}</Option>
                    ))}
                </Select>
            }
        </Box>
    )
}