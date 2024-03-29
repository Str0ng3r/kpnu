import styles from "../header/header.module.css";

import logo from '../../img/logo-kpnu-2019_1.png'
export const Header = () => {
  return (
    <header>
      <div className={styles.cont}>
        <nav>
        <img src={logo} alt="logo" className={styles.logotip}/>
          <ul className={styles.nav_list}>
            <li className={styles.nav_link}><a>Студенту</a></li>
            <li className={styles.nav_link}><a>Факультети</a></li>
            <li className={styles.nav_link}><a>Підрозділи</a></li>
            <li className={styles.nav_link}><a>Міжнародна діяльність</a></li>
            <li className={styles.nav_link}><a>Управління</a></li>
            <li className={styles.nav_link}><a>Університет</a></li>
            <li className={styles.nav_link}><a>Наука</a></li>
          </ul>
        </nav>
        <div className={styles.right_side}>
        <div className={styles.social}>
          <a href="" className={styles.social_link}>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className={styles.instagram_icon}
            >
              <defs>
                <clipPath id="clip11_1639">
                  <rect
                    id="Icons/Instagram/Line"
                    width="20.000000"
                    height="20.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Icons/Instagram/Line"
                width="20.000000"
                height="20.000000"
                fill="#212121"
                fill-opacity="0"
              />
              <g clip-path="url(#clip11_1639)">
                <path
                  id="Vector"
                  d="M13.3333 3.33301L6.66663 3.33301C4.82568 3.33301 3.33325 4.82568 3.33325 6.6665L3.33325 13.333C3.33325 15.1743 4.82568 16.6665 6.66663 16.6665L13.3333 16.6665C15.1742 16.6665 16.6666 15.1743 16.6666 13.333L16.6666 6.6665C16.6666 4.82568 15.1742 3.33301 13.3333 3.33301ZM6.66663 1.6665C3.90515 1.6665 1.66663 3.90527 1.66663 6.6665L1.66663 13.333C1.66663 16.0947 3.90515 18.333 6.66663 18.333L13.3333 18.333C16.0947 18.333 18.3333 16.0947 18.3333 13.333L18.3333 6.6665C18.3333 3.90527 16.0947 1.6665 13.3333 1.6665L6.66663 1.6665Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Vector"
                  d="M14.1667 6.6665C14.627 6.6665 15 6.29346 15 5.8335C15 5.37305 14.627 5 14.1667 5C13.7064 5 13.3334 5.37305 13.3334 5.8335C13.3334 6.29346 13.7064 6.6665 14.1667 6.6665Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M14.1667 10C14.1667 12.3013 12.3011 14.167 10 14.167C7.69885 14.167 5.83337 12.3013 5.83337 10C5.83337 7.69922 7.69885 5.8335 10 5.8335C12.3011 5.8335 14.1667 7.69922 14.1667 10ZM12.5 10C12.5 11.3809 11.3807 12.5 10 12.5C8.61926 12.5 7.5 11.3809 7.5 10C7.5 8.61963 8.61926 7.5 10 7.5C11.3807 7.5 12.5 8.61963 12.5 10Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </a>
          <a href="" className={styles.social_link}>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className={styles.facebook_icon}
            >
              <defs>
                <clipPath id="clip11_1640">
                  <rect
                    id="Icons/Facebook/Line"
                    width="20.000000"
                    height="20.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Icons/Facebook/Line"
                width="20.000000"
                height="20.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip11_1640)">
                <path 
                  id="Vector"
                  d="M10 16.6665C13.6819 16.6665 16.6666 13.6816 16.6666 10C16.6666 6.31787 13.6819 3.33301 10 3.33301C6.31812 3.33301 3.33325 6.31787 3.33325 10C3.33325 13.6816 6.31812 16.6665 10 16.6665ZM10 18.333C14.6023 18.333 18.3333 14.6021 18.3333 10C18.3333 5.39746 14.6023 1.6665 10 1.6665C5.39758 1.6665 1.66663 5.39746 1.66663 10C1.66663 14.6021 5.39758 18.333 10 18.333Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path 
                  id="Vector"
                  d="M10 8.3335C10 7.87305 10.373 7.5 10.8333 7.5L11.6666 7.5C12.1268 7.5 12.5 7.12695 12.5 6.66699C12.5 6.20654 12.1268 5.8335 11.6666 5.8335L10.8333 5.8335C9.45251 5.8335 8.33325 6.95264 8.33325 8.3335L8.33325 10L7.5 10C7.03967 10 6.66663 10.373 6.66663 10.8335C6.66663 11.2939 7.03967 11.667 7.5 11.667L8.33325 11.667L8.33325 16.667C8.33325 17.127 8.70642 17.5 9.16663 17.5C9.62683 17.5 10 17.127 10 16.667L10 11.667L11.6666 11.667C12.1268 11.667 12.5 11.2939 12.5 10.8335C12.5 10.373 12.1268 10 11.6666 10L10 10L10 8.3335Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </a>

          <a href="" className={styles.social_link}>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className={styles.twitter_icon}
            >
              <defs>
                <clipPath id="clip11_1638">
                  <rect
                    id="Icons/Twitter/Line"
                    width="20.000000"
                    height="20.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Icons/Twitter/Line"
                width="20.000000"
                height="20.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip11_1638)">
                <path 
                  id="Vector"
                  d="M2.65063 11.6665C1.27258 11.6704 0.382935 13.2402 1.23193 14.4297C2.44788 16.1328 4.65259 17.5 8.3335 17.5C14.0377 17.5 18.6166 12.8516 17.9756 7.35938L18.9147 5.48096C19.5659 4.17871 18.4342 2.69678 17.0062 2.98242L15.7655 3.23047C15.4366 3.05713 15.0962 2.92627 14.8053 2.83105C14.2383 2.64648 13.552 2.5 12.9167 2.5C11.7758 2.5 10.7909 2.79297 10.0082 3.37988C9.2345 3.96045 8.79858 4.72363 8.55945 5.42432C8.44922 5.74707 8.37573 6.07129 8.32874 6.38184C7.88599 6.24268 7.43457 6.05518 6.99255 5.82617C5.98987 5.30713 5.17908 4.64844 4.7218 4.07129C3.95435 3.10254 2.32825 3.17432 1.75757 4.43359C0.953247 6.20801 1.17383 8.31104 1.89685 10.0107C2.13916 10.5806 2.45435 11.1436 2.83948 11.665C2.77356 11.666 2.71045 11.6665 2.65063 11.6665ZM8.33337 15.8335C5.11389 15.8335 3.44922 14.6675 2.58838 13.4614C2.54968 13.4072 2.58875 13.3335 2.65527 13.333C3.53101 13.3306 5.32849 13.2891 6.51404 12.5952C6.57532 12.5596 6.56177 12.4692 6.49451 12.4463C3.73096 11.5171 2.16016 7.58203 3.27551 5.12158C3.30103 5.06494 3.37683 5.05762 3.41528 5.10645C4.68945 6.71436 7.4751 8.28955 9.89868 8.33252C9.95129 8.3335 9.99109 8.28564 9.98303 8.2334C9.88538 7.60059 9.51245 4.1665 12.9167 4.1665C13.7296 4.1665 14.9391 4.56299 15.3846 4.96924C15.4052 4.98828 15.4331 4.99658 15.4604 4.99121L17.333 4.6167C17.401 4.60303 17.4548 4.67383 17.4238 4.73584L16.2625 7.05859C16.2544 7.07471 16.2518 7.09326 16.255 7.11084C17.0684 11.6831 13.3234 15.8335 8.33337 15.8335Z"
                  fill="#777E91"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </a>
        </div>
        <button className={styles.button_call}>Зв'язок з нами</button>
        </div>
      </div>
    </header>
  );
};
