import './App.css';
import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import DoneListContainer from "./Container/DoneListContainer"
import { getTodos } from './api/todos';
import { connect } from 'react-redux';
import { initTodos } from './actions';
import NotFound from './Components/NotFound'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar } from 'antd';



class App extends Component {

  componentDidMount() {
    getTodos().then(
      response => {
        this.props.initTodos(response.data)
      }
    )
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentWillMount() {
    getTodos().then(
      response => {
        this.props.initTodos(response.data)
      }
    )
  }

  render() {

    const { Header, Content, Footer, Sider } = Layout;
    const { collapsed } = this.state;
    const { SubMenu } = Menu;

    return (
      <Layout className="Layout" style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="sider">

            <div className="logo" />

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/" >Go to List Page</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/done" >Go to Done Page</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content className="site-content" style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                  <div>
                    <Avatar size="small" icon={<UserOutlined />} /> Justine/Vance
                  </div>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                <Route exact path="/" component={ToDoList} />
                <Route path="/done" component={DoneListContainer} />
                <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2020 Created by us. XD</Footer>
          </Layout>
        </BrowserRouter>
      </Layout>


      // <div className="App">
      //   <header className="App-header">
      //     {/* <React.Fragment> */}
      //       <BrowserRouter>
      //         <ul>
      //           <li>
      //             <Link to="/" >Go to List Page</Link>
      //           </li>
      //           <li>
      //           <Link to="/done" >Go to Done Page</Link>
      //           </li>
      //         </ul>
      //         <Switch>
      //         <Route path="/done" component={DoneListContainer} />
      //         <Route exact path="/" component={ToDoList} />
      //         <Route path="*" component={NotFound}/>
      //         </Switch>
      //       </BrowserRouter>
      //     {/* </React.Fragment> */}
      //   </header>
      // </div>



    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  initTodos: todos => dispatch(initTodos(todos))
})


export default connect(null, mapDispatchToProps)(App);
