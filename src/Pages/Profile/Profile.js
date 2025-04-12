import React from "react";
import { Avatar, Typography, Paper, Divider, Button } from "@mui/material";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <Paper elevation={3} className="profile-card">
        <div className="profile-header">
          <Avatar
            alt="User Profile"
            src="/profile-pic.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h4" className="profile-name">
            John Doe
          </Typography>
          <Typography variant="subtitle1" className="profile-email">
            john.doe@example.com
          </Typography>
          <Button variant="contained" color="primary" className="edit-profile-btn">
            Edit Profile
          </Button>
        </div>

        <Divider sx={{ margin: "20px 0" }} />

        <div className="profile-details">
          <Typography variant="h6">Account Details</Typography>
          <div className="detail-item">
            <span>Member Since:</span>
            <span>January 2023</span>
          </div>
          <div className="detail-item">
            <span>Last Login:</span>
            <span>Today</span>
          </div>
          <div className="detail-item">
            <span>Account Status:</span>
            <span className="status-active">Active</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;
