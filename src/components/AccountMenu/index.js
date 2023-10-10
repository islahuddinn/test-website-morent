import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Logout, Settings } from "@mui/icons-material";
import { Avatar, Divider, IconButton, ListItemIcon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/redux/user/userActions";
import Link from "next/link";

export default function AccountMenu() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogoutUser = () => {
    setAnchorEl(null);
    dispatch(signOut());
  };

  return (
    <div>
      <button
        className="p-[10px] border rounded-full hidden md:block"
        onClick={handleClick}
      >
        <Settings className="fill-secondary-400" />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {user ? (
          <div>
            <MenuItem onClick={handleClose}>
              <Link href="/dashboard">
                <ListItemIcon>
                  <Avatar sx={{ width: 25, height: 25, mr: 1 }} />
                </ListItemIcon>
                Profile
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={LogoutUser}>
              <ListItemIcon>
                <Logout sx={{ width: 25, height: 25, mr: 1 }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleClose}>
              <Link href="/signin">Sign-in</Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Link href="/signup">Sign-up</Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
