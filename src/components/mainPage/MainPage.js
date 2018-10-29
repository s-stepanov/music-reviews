import React from 'react';
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import ContentContainer from "../../containers/ContentContainer";
import '../../App.scss';

const MainPage = props => {
  return (
    <div>
      <Menu {...props}/>
      <div className={'row no-gutters'}>
        <div className={'col-2'}>
          <Sidebar/>
        </div>
        <div className={'col-10'}>
          <ContentContainer {...props}/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;