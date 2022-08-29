import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from "react-router-dom";

const SideMenu = () =>{

  return (
    <div
      style={{
        width: 256,
      }}
    >
    
      <Menu style={{height : "100vh"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
         
      >
        <MenuItem key={1} icon ={< MenuFoldOutlined />}>
        <Link  to={"/"}>Dashboard </Link>
        </MenuItem>
        <MenuItem  key={2} icon ={< ContainerOutlined/>}>
        <Link to={"/profile"}>Profile</Link>
        </MenuItem>
        <MenuItem key={3} icon ={<  PieChartOutlined />}>
        <Link to={"/wallet"}>Wallet</Link>
        </MenuItem>
        <MenuItem key={4} icon ={<  AppstoreOutlined />}>
        <Link to={"/history"}>History</Link>
        </MenuItem>
        <MenuItem key={5} icon ={<  MenuUnfoldOutlined />}>
        <Link to={"/logout"}>Logout</Link>
        </MenuItem>
        </Menu>

    </div>
  );
};

export default SideMenu