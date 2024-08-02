import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function Sidbar() {
  return (
    <>
      <div className="sidebarContainer bg-info vh-100">
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
        ;
      </div>
    </>
  );
}
