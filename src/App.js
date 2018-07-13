




import React from 'react';
import { Admin, Resource } from 'react-admin';



import dataProvider from './api/httpClient'
import authProvider from './api/authClient'

import { CompanyList  } from './endpoints/companies';
import { PurchaseList  } from './endpoints/purchases';



class App extends React.Component {

	render(){
		return (
		<Admin
				title="event jakis"
				authProvider={authProvider}
				dataProvider={dataProvider}
				>

				<Resource name="companies" list={CompanyList} />
				<Resource name="purchases" list={PurchaseList} />
				<Resource name="participants" list={PurchaseList} />
				<Resource name="reports" list={PurchaseList} />
				<Resource name="feed" list={PurchaseList} />


    </Admin>
			)
	}

}


export default App;
