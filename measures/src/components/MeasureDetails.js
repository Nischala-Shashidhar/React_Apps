import Paper from 'react-md/lib/Papers';
import React, { Component } from 'react';
import SelectDataset from '../components/SelectDataset';
import RefineDataset from '../components/RefineDataset';
import AddComputations from '../components/AddComputations';
import OutputAttributes from '../components/OutputAttributes';
import Summary from '../components/Summary';
import { Tabs, Tab, TabsContainer}  from 'react-md/lib/Tabs';

import '../assets/stylesheets/MeasureDetails.scss';


export default class MeasureDetails extends Component {

    render() {
        return(
            
                <div className='page-container'>
                    <div className='measure-details'>
           <Paper>
            <div className='measure-details-head'>
               <SelectDataset />
               <RefineDataset />
               <AddComputations />
                <OutputAttributes />
                <Summary />
                </div>
                <div className='new-measure-content'>
                   
                 </div>
            </Paper>
            </div>
            </div>
        );
    }
}