import React from 'react';
import styles from "./AccordionBlock.module.scss"

const AccordionBlock = ({questions}) => {
    const items = document.querySelectorAll("button");
    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        let i;
        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }
    items.forEach(item => item.addEventListener('click', toggleAccordion));

    return (
        <section>
            <div className={styles.blockQuestions}>
                <div className="container">
                    <h2 className={styles.questionsTitle}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                    <div className={styles.accordion}>
                        {
                            questions.map(({title, content, id}) =>
                                <div className={styles.accordionItem} key={id}>
                                    <button aria-expanded="false">
                                        <span className={styles.accordionTitle}>{title}</span>
                                        <span className={styles.icon} aria-hidden="true"></span>
                                    </button>
                                    <div className={styles.accordionContent}>
                                        <p>{content}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionBlock