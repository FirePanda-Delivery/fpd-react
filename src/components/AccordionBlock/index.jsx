import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AccordionBlock.module.scss"

const AccordionBlock = ({questions}) => {
    return (
        <section>
            <div className={styles.blockQuestions}>
                <div className="container">
                    <h2 className={styles.questionsTitle}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                    <div className={styles.accordion}>
                        {
                            questions.map(({title, content, id}) =>
                                <Accordion key={id}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                                      aria-controls="panel2-content" id="panel2-header">
                                        <Typography component="span">{title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionBlock;