import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useUser, useAuth } from '@clerk/nextjs';

export function UserNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { user } = useUser(); // Access user information
    const { signOut } = useAuth(); // Access signOut for logout functionality

    const handleOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                variant="text"
                onClick={handleOpen}
                sx={{ minWidth: 0, padding: 0, borderRadius: '50%' }}
            >
                <Avatar
                    alt="@username"
                    sx={{ width: 32, height: 32 }}
                />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div style={{ padding: '16px', textAlign: 'left' }}>
                    <Typography variant="body1" fontWeight="bold">
                        {user?.fullName || 'User'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {user?.primaryEmailAddress?.emailAddress || 'No email available'}
                    </Typography>
                </div>
                <Divider />
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <Divider />
                <MenuItem
                    onClick={() => {
                        handleClose();
                        signOut(); // Call Clerk's signOut method
                    }}
                >
                    Log out
                </MenuItem>
            </Menu>
        </>
    );
}
