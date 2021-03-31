import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type DetailsPageParams = {
  id: string  
}

type DetailsPageProps = RouteComponentProps<DetailsPageParams>
 
const DetailsPage = ({ match }: DetailsPageProps) => {

  return ( 
    <div>
      Details: ID = {match.params.id}
    </div>
   );
}
 
export default withRouter(DetailsPage);