import React, { useState } from 'react'
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Select} from '@mui/material';
import {MenuItem} from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


export default function FF() {
    let [ed, setEd] = useState('0.00')
    let [ino, setInp] =useState('')
    let [frm, setFrm] = useState('')
    let [to, setTo] =useState('')
    function exc(){
        if(frm=='INR' && to=='USD'){
            setEd('$'+ino*0.012.toFixed(4))
        }
        else if(frm=='INR' && to=='KRW'){
            setEd('₩'+ino*16.32.toFixed(4))
        }
        else if(frm=='INR' && to=='JPY'){
            setEd('¥'+ino*1.81.toFixed(4))
        }
        else if(frm=='USD' && to=='INR'){
            setEd('₹'+ino*83.22.toFixed(4))
        }
        else if(frm=='USD' && to=='KRW'){
            setEd('₩'+ino*1358.03.toFixed(4))
        }
        else if(frm=='USD' && to=='JPY'){
            setEd('¥'+ino*150.37.toFixed(4))
        }
        else if(frm=='JPY' && to=='INR'){
            setEd('₹'+ino*0.55.toFixed(4))
        }
        else if(frm=='JPY' && to=='KRW'){
            setEd('₩'+ino*9.03.toFixed(4))
        }
        else if(frm=='JPY' && to=='USD'){
            setEd('$'+ino*0.0067.toFixed(4))
        }else if(frm=='KRW' && to=='INR'){
            setEd('₹'+ino*0.061.toFixed(4))
        }
        else if(frm=='KRW' && to=='USD'){
            setEd('$'+ino*0.00074.toFixed(4))
        }
        else if(frm=='KRW' && to=='JPY'){
            setEd('¥'+ino*0.11.toFixed(4))
        }
        else{
            setEd("NaN")
        }
        
    }
    return (
    <>
    <Box
        ml={{lg:65, xs:5}} mr={{lg:65, xs:5}}
        mt={20}
        style={{backgroundColor:"white", padding:"20px", borderRadius:"7px"}}
      // Center vertically in the viewport
    >
    <div>
        <hr style={{backgroundColor:"#4392fe", border:"0px", height:"6px"}}></hr>
        <h2 style={{textAlign:"center"}}>Exchange Calculator</h2>
    </div>

    <div style={{backgroundImage:"linear-gradient(to left top, #104189, #14529f, #1563b6, #1475cd, #0c87e5)", borderRadius:"7px", height:"3.8cm"}}>
        <p style={{width:"100%", textAlign:"center", color:"#d6d6d6",fontSize:"32px", paddingTop:"10px"}}>Exchange Rate</p>
        <p style={{width:"100%", textAlign:"center", color:"white", fontSize:"52px", marginTop:"-3px", paddingBottom:"10px"}}>{ed}</p><br></br>
    </div>


    <div
    display="flex"><br/>
        <TextField id="outlined-basic" label="Amount" variant="outlined" style={{width:"100%"}} onChange={(e) => setInp(e.target.value)}/><br></br><br/>
        <FormControl style={{width:"43%"}}>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setFrm(e.target.value)}
                    label='from'
                >
                    <MenuItem value={'INR'}>INR</MenuItem>
                    <MenuItem value={'JPY'}>JPY</MenuItem>
                    <MenuItem value={'KRW'}>KRW</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
        </FormControl>
        <CompareArrowsIcon style={{marginLeft:"4%", marginRight:"4%", marginTop:"15px"}}/>
        <FormControl style={{width:"43.6%"}}>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setTo(e.target.value)}
                    label="To">
                    <MenuItem value={'INR'}>INR</MenuItem>
                    <MenuItem value={'JPY'}>JPY</MenuItem>
                    <MenuItem value={'KRW'}>KRW</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
        </FormControl><br/><br></br>
        <Button variant="contained" style={{width:"100%"}} onClick={exc}>Exchange</Button>
    </div>
    </Box>
    </>
)
}
