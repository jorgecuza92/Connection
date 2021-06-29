import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat"

function Header() {
  return (
      <div className="header">
        <div className="header__left">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDUxMiA1MTIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PHBhdGggZmlsbD0iIzNBQjM3QyIgZD0iTTE4OC4zLDQ1OC40Yy03LjItNi0xMy4yLTEzLjItMTkuNi0yMC4xYy03LTcuNi0xNC43LTE0LjctMjEuNi0yMi41Yy0zLjgtNC4zLTcuMy05LjctNS45LTE1LjdjMS4zLTUuOSw3LjQtOS4zLDEyLjUtMTEuM2M4LjQtMy4yLDE3LjItNS4zLDI1LjgtNy45YzcuOC0yLjMsMTUuNy00LjIsMjMuNC03Yy0yMi0zLjktNDMuMi0xMy40LTU3LjctMzAuOWMtMTMuMy0xNi4xLTIwLjEtMzctMjEuNi01Ny43Yy0wLjgtMTAuNy0wLjUtMjEuNiwxLjEtMzIuMmMxLjYtMTEsNS4yLTIxLjMsNy43LTMyLjFjLTAuOS0wLjgtMS41LTEuOS0xLjgtM2MtMS41LTIuOC0wLjUtNi42LDIuMi03LjljMC4zLTkuMSwwLjgtMTguMy0wLjEtMjcuNGMtMC45LTguNS0zLjEtMTYuOC00LjMtMjUuM2MtNS41LDIuOC0xMS4yLDUuMS0xNyw3LjFjLTcuMywyLjYtMTQuOCw1LjQtMjIuMyw3LjJjLTcuNSwxLjgtMTUuMiwzLjItMjIuNyw1LjJjLTYuNCwxLjctMTMuMSwzLjUtMTguMiw3LjljMCwwLTAuMSwwLjEtMC4xLDAuMWMtMC42LDIuMy0xLjEsNC41LTEuNyw2LjhjLTAuMSwwLjMtMC4yLDAuNi0wLjQsMC45Yy0wLjEsMC4zLTAuMSwwLjYtMC4xLDAuOWMtMC4zLDEuMS0wLjUsMi4yLTAuOCwzLjNjLTIuNywxMC41LTUuMiwyMS03LjQsMzEuN2MtMTAuOCw1NC42LTEzLDExNi43LDE5LjUsMTY0LjhjMzEuMyw0Ni4zLDg2LjYsNjcuMSwxMzkuNyw3Ni4xYzEuNiwwLjMsMy4yLDAuNSw0LjksMC44QzE5Ny44LDQ2NiwxOTMsNDYyLjMsMTg4LjMsNDU4LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzc0Q0NDRiIgZD0iTTM2MC43LDcwLjZjLTAuMy0wLjMtMC41LTAuNi0wLjctMC45Yy03LjgtMy43LTE1LjgtNi45LTI0LjEtOS41QzI4MS42LDQzLDIyMC42LDQ3LjMsMTY4LjQsNjkuOGMtMjUuMiwxMC45LTQ3LjUsMjYuNS02Ni40LDQ2LjRjLTE0LjYsMTUuNC0yNy4yLDMyLjUtMzguOSw1MC4xYzcuMi0xLjgsMTQuNy0yLjksMjEuNC00LjVjNy41LTEuOCwxNC44LTQuNCwyMi4xLTdjOC4yLTIuOSwxNi41LTYuMSwyMy44LTExYzMuMy0yLjIsOC41LTAuMSw4LjYsNC4xYzAuMiwxMS42LDQuMSwyMi41LDUsMzRjMC41LDYuNiwwLjUsMTMuMywwLjMsMTkuOWMyNy4xLTI2LjEsNTguMS01MCw5NC45LTU5LjNjMzIuNi04LjMsNjgtNS4xLDk4LjMsOS40YzEuMS0wLjIsMi4yLTAuMSwzLjUsMC41YzQuMiwyLDExLjktMiwxNS43LTMuNmM0LjctMS45LDkuMS00LjIsMTQtNS40YzUuOS0xLjQsMTEuOC0yLjksMTcuNS00LjljMi43LTEsNy4yLTIuMiw5LjgtNC41QzM4NS45LDExMi43LDM3Ny4xLDg5LjEsMzYwLjcsNzAuNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTRCNkI5IiBkPSJNNDg3LjksMjM5LjRjLTQuMi0yNy42LTE1LjEtNTQuNC0yOS43LTc4LjFjLTE5LjEtMzEuMi00NC44LTU5LjItNzUuNy03OS4xYzQuOSw3LjksOS4xLDE2LjEsMTMuMywyNC40YzMuOSw3LjgsNy44LDE1LjcsMTIuMiwyMy4zYzMuNSw2LTAuNCwxMS01LjksMTQuMmMtNS41LDMuMi0xMS41LDUuMy0xNy42LDdjLTQuOCwxLjQtMTAuMiwyLTE0LjgsMy45Yy00LjYsMS44LTkuOSw0LjctMTUuNSw2LjdjMTguNywxMi42LDM0LjcsMjkuNSw0My4xLDUwLjhjOC40LDIxLjUsOS43LDQ1LjcsMy40LDY4Yy0yLjEsNy41LTQuOSwxNC45LTguNCwyMS45YzAuOCwwLjgsMS40LDIsMS40LDMuNmMwLDIwLjgtMS42LDQxLjYtMC40LDYyLjRjMTEuNy0xLjksMjIuNS04LjYsMzMuNC0xMy4xYzEyLjctNS4yLDI1LjUtMTAuNCwzOC42LTE0LjVjMC42LTEuNywyLjEtMyw0LjYtMi45YzEuMiwwLDIuMiwwLjIsMy4xLDAuNGMyLTQuNSwzLjktOSw1LjYtMTMuN0M0ODguNiwyOTcuNiw0OTIuMywyNjguMSw0ODcuOSwyMzkuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNzFDNTk4IiBkPSJNNDI3LjcsMzY2LjljLTEyLjQsNS41LTI1LDEyLjYtMzguOSwxM2MtMywwLjEtNS42LTItNS45LTUuMWMtMS42LTE4LjYtMC42LTM3LjItMC4yLTU1LjhjLTUsNy4zLTEwLjksMTQtMTcuNCwyMGMtMTkuMiwxNy42LTQyLjEsMjcuMy02Ny42LDMxLjhjLTIwLDMuNS00MSw1LjktNjEuOCw1LjhjLTAuNiwwLjItMS4zLDAuMy0yLjEsMC4zYy04LjctMC40LTE2LjUsMy4yLTI0LjQsNi40Yy03LjksMy4yLTE2LjEsNS0yNC4zLDcuNWMtMi45LDAuOS0zNC41LDguNS0zMy4yLDEyLjNjMi4zLDYuOCwxMC4xLDEyLjIsMTQuOSwxNy4yYzYuMiw2LjUsMTIuMiwxMy4xLDE4LjMsMTkuN2M5LjcsMTAuNiwyMy4xLDE4LjEsMzAuOCwzMC40YzAuNCwwLjYsMC42LDEuMywwLjgsMS45YzUyLjcsNS42LDEwNy45LTEuOCwxNTQuNC0yNy43YzM4LjctMjEuNSw3My40LTUzLjQsOTUtOTIuNUM0NTMuMSwzNTYuMyw0NDAuMSwzNjEuNCw0MjcuNywzNjYuOXoiPjwvcGF0aD48cGF0aCBkPSJNNTAwLjYsMjU3LjdjLTEuNi01NS41LTMxLjEtMTA4LjgtNjguNi0xNDguM2MtMTguNC0xOS4zLTM5LjQtMzUuNi02My4zLTQ3LjZjLTI0LTEyLjEtNTAuMy0xOS03Ny0yMS43Yy01Ni4xLTUuNy0xMTYuOCw3LjItMTYzLjYsMzkuMmMtMzEsMjEuMi01NC4zLDUxLTc0LjksODIuMWMtMC41LTAuNy0xLjItMS4yLTIuMS0xLjVjLTQuNSw2LjYtOC45LDEzLjQtMTMuMSwyMC4yYy0yLjUsOS4yLTQuNiwxOC42LTYuOCwyNy45Yy0zLjcsMTUuNS02LjcsMzEuMi04LjgsNDdjLTMuOCwyOC45LTQuMSw1OS4xLDIsODcuN2M1LjMsMjQuOCwxNiw0OC4zLDMxLjksNjguMWMxNi45LDIxLDM5LjQsMzYuMyw2My42LDQ3LjVjMjUuMiwxMS42LDUyLjUsMTguNSw3OS44LDIzYzI5LjcsNC44LDYwLjQsNSw5MC4yLDFjNTYuMi03LjYsMTA3LjEtMzMuOSwxNDctNzRDNDc3LDM2OC4xLDUwMi4yLDMxNC43LDUwMC42LDI1Ny43eiBNMTAyLDExNi4zYzE4LjktMjAsNDEuMi0zNS41LDY2LjQtNDYuNEMyMjAuNiw0Ny4zLDI4MS42LDQzLDMzNiw2MC4yYzguMywyLjYsMTYuMyw1LjgsMjQuMSw5LjVjMC4yLDAuMywwLjQsMC42LDAuNywwLjljMTYuNCwxOC41LDI1LjEsNDIuMSwzNy4xLDYzLjVjLTIuNiwyLjMtNywzLjUtOS44LDQuNWMtNS43LDIuMS0xMS42LDMuNS0xNy41LDQuOWMtNC45LDEuMi05LjQsMy40LTE0LDUuNGMtMy44LDEuNi0xMS41LDUuNi0xNS43LDMuNmMtMS4yLTAuNi0yLjQtMC43LTMuNS0wLjVjLTMwLjMtMTQuNS02NS43LTE3LjYtOTguMy05LjRjLTM2LjgsOS4zLTY3LjgsMzMuMi05NC45LDU5LjNjMC4yLTYuNiwwLjItMTMuMy0wLjMtMTkuOWMtMC45LTExLjUtNC44LTIyLjQtNS0zNGMtMC4xLTQuMi01LjMtNi40LTguNi00LjFjLTcuMyw0LjktMTUuNSw4LjEtMjMuOCwxMWMtNy4zLDIuNi0xNC42LDUuMS0yMi4xLDdjLTYuNywxLjYtMTQuMiwyLjctMjEuNCw0LjVDNzQuOCwxNDguNyw4Ny40LDEzMS43LDEwMiwxMTYuM3ogTTE0My41LDIxOC4xYzAsMCwwLTAuMSwwLTAuMWMzNS42LTM1LjksNzcuOS02OC4xLDEzMC42LTY5LjFjNDQuMS0wLjgsOTMuNCwyMy4yLDExMS45LDY0LjhjMTkuMyw0My40LDAuNyw5NC45LTM1LjMsMTIzLjRjLTIxLjcsMTcuMi00OC41LDIyLjgtNzUuNCwyNS44Yy0yOC42LDMuMS01OS45LDUuNy04Ny41LTRjLTEzLjEtNC42LTI1LjItMTIuMS0zNC4xLTIyLjhjLTguMS05LjktMTMuMi0yMS43LTE2LjMtMzRjLTMuMi0xMi42LTMuNy0yNi4xLTIuNy0zOWMwLjUtNi40LDEuNS0xMi43LDIuOS0xOC45YzEuNi03LjYsNC41LTE0LjksNi4xLTIyLjVDMTQ0LjEsMjIwLjIsMTQzLjksMjE5LjEsMTQzLjUsMjE4LjF6IE0xOTcuMSw0NjkuNmMtNTMuMS05LTEwOC40LTI5LjctMTM5LjctNzYuMUMyNC45LDM0NS40LDI3LjEsMjgzLjIsMzgsMjI4LjdjMi4xLTEwLjYsNC42LTIxLjIsNy40LTMxLjdjMC4zLTEuMSwwLjYtMi4yLDAuOC0zLjNjMC0wLjMsMC0wLjYsMC4xLTAuOWMwLjEtMC4zLDAuMi0wLjYsMC40LTAuOWMwLjYtMi4zLDEuMS00LjUsMS43LTYuOGMwLDAsMC4xLTAuMSwwLjEtMC4xYzUuMS00LjQsMTEuOC02LjIsMTguMi03LjljNy41LTIsMTUuMS0zLjQsMjIuNy01LjJjNy42LTEuOSwxNS00LjYsMjIuMy03LjJjNS43LTIsMTEuNS00LjMsMTctNy4xYzEuMiw4LjQsMy40LDE2LjgsNC4zLDI1LjNjMC45LDkuMSwwLjQsMTguMywwLjEsMjcuNGMtMi43LDEuMy0zLjcsNS4xLTIuMiw3LjljMC4yLDEuMSwwLjksMi4yLDEuOCwzYy0yLjUsMTAuOC02LjIsMjEtNy43LDMyLjFjLTEuNSwxMC42LTEuOSwyMS41LTEuMSwzMi4yYzEuNiwyMC43LDguMyw0MS41LDIxLjYsNTcuN2MxNC41LDE3LjUsMzUuNywyNyw1Ny43LDMwLjljLTcuNywyLjgtMTUuNiw0LjctMjMuNCw3Yy04LjYsMi41LTE3LjUsNC43LTI1LjgsNy45Yy01LjIsMi0xMS4yLDUuNC0xMi41LDExLjNjLTEuMyw2LDIuMSwxMS40LDUuOSwxNS43YzYuOCw3LjgsMTQuNSwxNC45LDIxLjYsMjIuNWM2LjQsNi45LDEyLjQsMTQuMSwxOS42LDIwLjFjNC42LDMuOSw5LjUsNy41LDEzLjYsMTEuOUMyMDAuMyw0NzAuMSwxOTguNyw0NjkuOCwxOTcuMSw0NjkuNnogTTM3MS4xLDQ0NC42Yy00Ni41LDI1LjktMTAxLjgsMzMuMy0xNTQuNCwyNy43Yy0wLjEtMC42LTAuNC0xLjMtMC44LTEuOWMtNy44LTEyLjMtMjEuMi0xOS43LTMwLjgtMzAuNGMtNi02LjYtMTIuMS0xMy4yLTE4LjMtMTkuN2MtNC44LTUtMTIuNi0xMC40LTE0LjktMTcuMmMtMS4zLTMuOSwzMC4zLTExLjUsMzMuMi0xMi4zYzguMS0yLjQsMTYuNC00LjMsMjQuMy03LjVjNy45LTMuMiwxNS43LTYuOSwyNC40LTYuNGMwLjgsMCwxLjUtMC4xLDIuMS0wLjNjMjAuNywwLjEsNDEuOC0yLjIsNjEuOC01LjhjMjUuNS00LjUsNDguNC0xNC4zLDY3LjYtMzEuOGM2LjUtNiwxMi40LTEyLjcsMTcuNC0yMGMtMC40LDE4LjYtMS40LDM3LjIsMC4yLDU1LjhjMC4zLDMuMSwyLjksNS4xLDUuOSw1LjFjMTMuOS0wLjMsMjYuNS03LjQsMzguOS0xM2MxMi40LTUuNiwyNS40LTEwLjYsMzguNS0xNC44QzQ0NC41LDM5MS4xLDQwOS44LDQyMy4xLDM3MS4xLDQ0NC42eiBNNDc4LjcsMzI0LjdjLTEuNyw0LjYtMy42LDkuMi01LjYsMTMuN2MtMC45LTAuMy0yLTAuNC0zLjEtMC40Yy0yLjUtMC4xLTMuOSwxLjItNC42LDIuOWMtMTMuMSw0LjEtMjUuOSw5LjMtMzguNiwxNC41Yy0xMC45LDQuNS0yMS42LDExLjEtMzMuNCwxMy4xYy0xLjItMjAuOCwwLjMtNDEuNiwwLjQtNjIuNGMwLTEuNi0wLjUtMi44LTEuNC0zLjZjMy40LTcsNi4zLTE0LjQsOC40LTIxLjljNi4zLTIyLjMsNS4xLTQ2LjUtMy40LTY4Yy04LjMtMjEuMy0yNC40LTM4LjItNDMuMS01MC44YzUuNS0yLDEwLjktNC44LDE1LjUtNi43YzQuNy0xLjksMTAtMi42LDE0LjgtMy45YzYuMS0xLjcsMTIuMS0zLjgsMTcuNi03YzUuNC0zLjEsOS40LTguMiw1LjktMTQuMmMtNC40LTcuNi04LjMtMTUuNC0xMi4yLTIzLjNjLTQuMi04LjMtOC41LTE2LjYtMTMuMy0yNC40YzMwLjgsMTkuOSw1Ni42LDQ3LjksNzUuNyw3OS4xYzE0LjUsMjMuNywyNS41LDUwLjUsMjkuNyw3OC4xQzQ5Mi4zLDI2OC4xLDQ4OC42LDI5Ny42LDQ3OC43LDMyNC43eiI+PC9wYXRoPjwvc3ZnPg=="
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://i.redd.it/ncex5i50bgz41.jpg" title='me'/>
        </div>
      </div>
  );
}

export default Header;
