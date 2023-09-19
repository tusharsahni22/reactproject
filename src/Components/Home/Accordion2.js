import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiOutlineStar} from 'react-icons/ai';
import {MdOutlineLogin} from 'react-icons/md';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {BsTrash3} from 'react-icons/bs';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',

}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontWeight:'bold', fontSize:15, color:'#5239d1' }}>All Items </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography>
            <MdOutlineLogin style={{paddingRight :5}}/>
           Login
          </Typography>
          <Typography>
            <AiOutlineCreditCard style={{paddingRight :5}}/>
           Card
          </Typography>
          <Typography>
          <AiOutlineStar style={{paddingRight :5}}/>
           Favorites
          </Typography>
          
          
        </AccordionDetails>
      </Accordion>
      <div style={{display: 'flex', margin: 10}}>
      <BsTrash3 style={{marginRight:10,marginLeft:10}}/>
      <div style={{paddingBottom:20}}> Trash </div>
      </div>
     
    </div>
  );
}