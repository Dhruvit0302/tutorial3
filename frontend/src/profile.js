import React, { useState } from "react";

function Profile() {
  return (
    <form>
      <div>
        <label>
          First Name:
          {localStorage.getItem("firstname")}
        </label>
      </div>
      <div>
        <label>
          Last Name:
          {localStorage.getItem("lastname")}
        </label>
      </div>
      <div>
        <label>
          Email:
          {localStorage.getItem("email")}
        </label>
      </div>
    </form>
  );
}
export default Profile;
