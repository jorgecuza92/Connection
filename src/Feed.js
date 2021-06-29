import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import {
  CalendarViewDayTwoTone,
  EventNoteTwoTone,
  Subscriptions,
} from "@material-ui/icons";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* input options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteTwoTone} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayTwoTone}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Post */}
      <Post
        name="Eric Andre"
        description="This is a Test"
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
