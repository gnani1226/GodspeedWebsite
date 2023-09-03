import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ContentFocused() {
  return (
    <div className='flex flex-col justify-center items-start gap-2'>
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Microservice Framework 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A 4th-Gen “batteries included” “configure over code” framework to build standardised microservices in Nodejs and coming next - Java, Golang and Python.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Developer GPT & CLI </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ask questions on engineering or generate code, Docker files and Helm charts for your microservices. Coming next - develop full apps with UI
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Business Apps Framework </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Create business apps with the framework with applications of Frappe and all the products under Frappeverse          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Developer Portal  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All your tech infrastructure & services listed, documented, deployed & monitored from one place via Backstage
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Observability Setup </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Auto-configured dashboards of your deployed services using Grafana stack, whether self hosted or through Grafana cloud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CI/ CD Automation </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Generate and customise CI/CD pipeline with git-ops, test automation, security scan, static code scan, image scan using Github actions, ArgoCD (or other tools).
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}