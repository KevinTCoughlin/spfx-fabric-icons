import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">A</div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">B</div>
        </div>
      </div>
    );
  }
}
