import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommissionList } from "./commission/CommissionList";
import { CommissionCreate } from "./commission/CommissionCreate";
import { CommissionEdit } from "./commission/CommissionEdit";
import { CommissionShow } from "./commission/CommissionShow";
import { ReferralList } from "./referral/ReferralList";
import { ReferralCreate } from "./referral/ReferralCreate";
import { ReferralEdit } from "./referral/ReferralEdit";
import { ReferralShow } from "./referral/ReferralShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MIBI Members Club"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Commission"
          list={CommissionList}
          edit={CommissionEdit}
          create={CommissionCreate}
          show={CommissionShow}
        />
        <Resource
          name="Referral"
          list={ReferralList}
          edit={ReferralEdit}
          create={ReferralCreate}
          show={ReferralShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
