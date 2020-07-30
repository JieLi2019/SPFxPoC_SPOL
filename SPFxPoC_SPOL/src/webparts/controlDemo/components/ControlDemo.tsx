import * as React from 'react';
import styles from './ControlDemo.module.scss';
import { IControlDemoProps } from './IControlDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ControlDemo extends React.Component<IControlDemoProps, {}> {
  public render(): React.ReactElement<IControlDemoProps> {
    return (
      <div className={styles.controlDemo}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>SPFx PoC Controls Demo</span>
              <p className={styles.subTitle}>Show the different controls that we can use in SharePoint development.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <p className={styles.description}>Background Color: {this.props.backgroundColor}</p>

              <div className={styles.description}>Test Textarea: {
                this.props.testTextarea != null ? (
                  this.props.testTextarea.split("\n").map((i, key) => {
                    return <div key={key}>{i}</div>;
                  })
                ) : ("Not set")
              }</div>

              <p className={styles.description}>Test Checkbox: {this.props.testCheckbox != null ? (this.props.testCheckbox.toString()) : ("Not set")}</p>

              <p className={styles.description}>Test Dropdown: {this.props.testDropdown}</p>

              <p className={styles.description}>Test Toggle: {this.props.testToggle != null ? (this.props.testToggle.toString()) : ("Not set")}</p>

              <p className={styles.description}>Test Choice Groups: {this.props.testChoiceGroups}</p>

              <div>
                <button type="button" className={styles.button} onClick={this.props.clickHandler}>CLICK ME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
