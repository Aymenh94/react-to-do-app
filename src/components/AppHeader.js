import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import TodoModel from './TodoModel';
import styles from '../styles/modules/app.module.scss';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
      <h1>hello from header</h1>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
