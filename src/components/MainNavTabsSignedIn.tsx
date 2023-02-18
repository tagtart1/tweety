import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MainNavTabsSignedInProps {
  userHandle: string;
}

const MainNavTabsSignedIn = ({ userHandle }: MainNavTabsSignedInProps) => {
  const [selectedTab, setSelectedTab] = useState<any>();

  const handleTabSwitch = (e: any) => {
    const target = e.target.firstChild.lastChild;

    if (target === selectedTab) return;
    selectedTab.classList.remove("left-section-tab-selected");
    target.classList.add("left-section-tab-selected");

    setSelectedTab(target);
  };

  useEffect(() => {
    setSelectedTab(document.querySelector(".left-section-tab-selected"));
  }, []);

  return (
    <ul>
      <li className="logo-item">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path
              fill="#ececec"
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            ></path>
          </g>
        </svg>
      </li>
      <Link to="/home">
        <li className="tab-list-item" onClick={handleTabSwitch}>
          <div className="tab-items">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path
                  fill="#ececec"
                  d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
                ></path>
              </g>
            </svg>
            <p className="left-section-tab-selected">Home</p>
          </div>
        </li>
      </Link>
      <Link to="/explore">
        <li className="tab-list-item" onClick={handleTabSwitch}>
          <div className="tab-items">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path
                  fill="#ececec"
                  d="M10.64 3.157l-.36 3.593h4.99l.38-3.892 2.99.299-.36 3.593h2.97v2.5h-3.22l-.55 5.5h2.77v2.5h-3.02l-.39 3.892-2.98-.299.36-3.593H9.23l-.39 3.892-2.98-.299.36-3.593H2.75v-2.5h3.72l.55-5.5H3.75v-2.5h3.52l.38-3.892 2.99.299zm3.83 11.593l.55-5.5h-4.99l-.55 5.5h4.99z"
                ></path>
              </g>
            </svg>
            <p>Explore</p>
          </div>
        </li>
      </Link>

      <li className="tab-list-item" onClick={handleTabSwitch}>
        <div className="tab-items">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                fill="#ececec"
                d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
              ></path>
            </g>
          </svg>
          <p>Notifications</p>
        </div>
      </li>
      <li className="tab-list-item" onClick={handleTabSwitch}>
        <div className="tab-items">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                fill="#ececec"
                d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
              ></path>
            </g>
          </svg>
          <p>Messages</p>
        </div>
      </li>
      <li className="tab-list-item" onClick={handleTabSwitch}>
        <div className="tab-items">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                fill="#ececec"
                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
              ></path>
            </g>
          </svg>

          <p>Bookmarks</p>
        </div>
      </li>

      <li className="tab-list-item" onClick={handleTabSwitch}>
        <div className="tab-items">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                fill="#ececec"
                d="M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23zM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18zM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5z"
              ></path>
            </g>
          </svg>
          <p>Tweety Blue</p>
        </div>
      </li>

      <Link to={`/${userHandle}`}>
        <li
          className="tab-list-item"
          onClick={(e) => {
            handleTabSwitch(e);
          }}
        >
          <div className="tab-items">
            <svg viewBox="0 0 24 24">
              <g>
                <path
                  fill="#ececec"
                  d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
                ></path>
              </g>
            </svg>
            <p>Profile</p>
          </div>
        </li>
      </Link>
      <li className="tab-list-item" onClick={handleTabSwitch}>
        <div className="tab-items">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                fill="#ececec"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </g>
          </svg>
          <p>More</p>
        </div>
      </li>
    </ul>
  );
};

export default MainNavTabsSignedIn;
