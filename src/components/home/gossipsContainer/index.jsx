import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../../reducers';
import Gossip from '../gossip'

const GossipContainer = ({
    gossips
}) => (
    <div>
        <h2> Ultimos chismes </h2>
        <ul> {console.log(gossips)}
            {
                gossips.map( gossip => <Gossip id={gossip.id} /> )
            }
        </ul>
    </div>
);


export default connect(
    state => ({
        gossips: selectores.getGossips(state),
    }),
    undefined
)(GossipContainer);