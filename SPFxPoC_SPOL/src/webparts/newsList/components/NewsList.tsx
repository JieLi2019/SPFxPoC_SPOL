import * as React from 'react';
import styles from './NewsList.module.scss';
import { INewsListProps } from './INewsListProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as testModuleOne from 'testModuleOne';

export default class NewsList extends React.Component<INewsListProps, {}> {
  public render(): React.ReactElement<INewsListProps> {
    return (
      <div className={ styles.newsList }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>News List</span>
              <p className={ styles.subTitle }>Customize the property pane based on the given configuration Json.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>

              <p className={styles.description}>{testModuleOne.sayHi('Jerry')}</p>

              <p className={styles.description}>Custom Configration: {this.props.configurationJson}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
