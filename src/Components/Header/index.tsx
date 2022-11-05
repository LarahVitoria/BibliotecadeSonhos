import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./style";
import { IconContext } from "react-icons";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { AiOutlineFileSearch, AiTwotoneCalendar } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";

interface IPropsHeader {
  toggleTheme(): void;
}

const Header: React.FC<IPropsHeader> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <IconContext.Provider value={{ style: { width: "32px", height:"32px" } }}>
        <LogoContainer>
          <svg
            viewBox="0 0 850 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288.875 261.57C288.875 257.961 287.586 255.148 285.008 253.133C282.477 251.117 278 249.031 271.579 246.875C265.157 244.719 259.907 242.633 255.829 240.617C242.563 234.102 235.93 225.148 235.93 213.758C235.93 208.086 237.571 203.094 240.852 198.781C244.18 194.422 248.868 191.047 254.915 188.656C260.961 186.219 267.758 185 275.305 185C282.665 185 289.25 186.312 295.063 188.938C300.922 191.562 305.469 195.312 308.704 200.188C309.404 201.233 310.028 202.311 310.577 203.422C313.953 210.261 307.362 216.781 299.735 216.781C293.781 216.781 289.524 211.039 285.079 207.078C282.547 204.781 279.102 203.633 274.743 203.633C270.336 203.633 266.844 204.617 264.266 206.586C261.735 208.508 260.469 210.969 260.469 213.969C260.469 216.594 261.875 218.984 264.688 221.141C267.5 223.25 272.446 225.453 279.524 227.75C286.602 230 292.415 232.438 296.961 235.062C308.024 241.438 313.555 250.227 313.555 261.43C313.555 270.383 310.18 277.414 303.43 282.523C296.68 287.633 287.422 290.188 275.657 290.188C267.36 290.188 259.836 288.711 253.086 285.758C246.383 282.758 241.321 278.68 237.899 273.523C236.491 271.353 235.377 269.047 234.556 266.608C232.585 260.747 237.849 255.594 244.033 255.594H244.337C251.654 255.594 256.456 262.765 261.805 267.758C264.665 270.336 269.282 271.625 275.657 271.625C279.735 271.625 282.946 270.758 285.29 269.023C287.68 267.242 288.875 264.758 288.875 261.57Z"
              fill="#49A1D7"
            />
            <path
              d="M412.907 239.703C412.907 249.688 411.055 258.523 407.352 266.211C403.649 273.898 398.375 279.828 391.532 284C384.735 288.125 376.977 290.188 368.258 290.188C359.54 290.188 351.805 288.195 345.055 284.211C338.305 280.18 333.032 274.438 329.235 266.984C325.485 259.531 323.516 250.977 323.329 241.32V235.555C323.329 225.523 325.157 216.688 328.813 209.047C332.516 201.359 337.79 195.43 344.633 191.258C351.524 187.086 359.352 185 368.118 185C376.79 185 384.524 187.062 391.321 191.188C398.118 195.312 403.391 201.195 407.141 208.836C410.938 216.43 412.86 225.148 412.907 234.992V239.703ZM387.805 235.414C387.805 225.242 386.094 217.531 382.672 212.281C379.297 206.984 374.446 204.336 368.118 204.336C355.743 204.336 349.204 213.617 348.5 232.18L348.43 239.703C348.43 249.734 350.094 257.445 353.422 262.836C356.75 268.227 361.696 270.922 368.258 270.922C374.493 270.922 379.297 268.273 382.672 262.977C386.047 257.68 387.758 250.062 387.805 240.125V235.414Z"
              fill="#49A1D7"
            />
            <path
              d="M511.133 279.367C511.133 288.203 500.513 292.697 494.17 286.545L450.313 244V278.781C450.313 284.304 445.836 288.781 440.313 288.781H435.633C430.11 288.781 425.633 284.304 425.633 278.781V210.194C425.633 201.336 436.3 196.852 442.63 203.049L486.524 246.031V196.406C486.524 190.883 491.001 186.406 496.524 186.406H501.133C506.656 186.406 511.133 190.883 511.133 196.406V279.367Z"
              fill="#49A1D7"
            />
            <path
              d="M612.313 278.781C612.313 284.304 607.836 288.781 602.313 288.781H597.774C592.251 288.781 587.774 284.304 587.774 278.781V246.031H551.422V278.781C551.422 284.304 546.945 288.781 541.422 288.781H536.743C531.22 288.781 526.743 284.304 526.743 278.781V196.406C526.743 190.883 531.22 186.406 536.743 186.406H541.422C546.945 186.406 551.422 190.883 551.422 196.406V227.047H587.774V196.406C587.774 190.883 592.251 186.406 597.774 186.406H602.313C607.836 186.406 612.313 190.883 612.313 196.406V278.781Z"
              fill="#49A1D7"
            />
            <path
              d="M714.688 239.703C714.688 249.688 712.836 258.523 709.133 266.211C705.43 273.898 700.157 279.828 693.313 284C686.516 288.125 678.758 290.188 670.04 290.188C661.321 290.188 653.586 288.195 646.836 284.211C640.086 280.18 634.813 274.438 631.016 266.984C627.266 259.531 625.297 250.977 625.11 241.32V235.555C625.11 225.523 626.938 216.688 630.594 209.047C634.297 201.359 639.571 195.43 646.415 191.258C653.305 187.086 661.133 185 669.899 185C678.571 185 686.305 187.062 693.102 191.188C699.899 195.312 705.172 201.195 708.922 208.836C712.719 216.43 714.641 225.148 714.688 234.992V239.703ZM689.586 235.414C689.586 225.242 687.875 217.531 684.454 212.281C681.079 206.984 676.227 204.336 669.899 204.336C657.524 204.336 650.985 213.617 650.282 232.18L650.211 239.703C650.211 249.734 651.875 257.445 655.204 262.836C658.532 268.227 663.477 270.922 670.04 270.922C676.274 270.922 681.079 268.273 684.454 262.977C687.829 257.68 689.54 250.062 689.586 240.125V235.414Z"
              fill="#49A1D7"
            />
            <path
              d="M780.219 261.57C780.219 257.961 778.93 255.148 776.352 253.133C773.821 251.117 769.344 249.031 762.922 246.875C756.5 244.719 751.25 242.633 747.172 240.617C733.907 234.102 727.274 225.148 727.274 213.758C727.274 208.086 728.915 203.094 732.196 198.781C735.524 194.422 740.211 191.047 746.258 188.656C752.305 186.219 759.102 185 766.649 185C774.008 185 780.594 186.312 786.407 188.938C792.266 191.562 796.813 195.312 800.047 200.188C801.328 202.099 802.355 204.121 803.128 206.253C805.15 211.824 800.095 216.781 794.168 216.781H791.07C785.116 216.781 780.868 211.039 776.422 207.078C773.891 204.781 770.446 203.633 766.086 203.633C761.68 203.633 758.188 204.617 755.61 206.586C753.079 208.508 751.813 210.969 751.813 213.969C751.813 216.594 753.219 218.984 756.032 221.141C758.844 223.25 763.79 225.453 770.868 227.75C777.946 230 783.758 232.438 788.305 235.062C799.368 241.438 804.899 250.227 804.899 261.43C804.899 270.383 801.524 277.414 794.774 282.523C788.024 287.633 778.766 290.188 767 290.188C758.704 290.188 751.18 288.711 744.43 285.758C737.727 282.758 732.665 278.68 729.243 273.523C727.839 271.36 726.728 269.063 725.908 266.632C723.927 260.759 729.205 255.594 735.403 255.594H735.68C742.998 255.594 747.799 262.765 753.149 267.758C756.008 270.336 760.625 271.625 767 271.625C771.079 271.625 774.29 270.758 776.633 269.023C779.024 267.242 780.219 264.758 780.219 261.57Z"
              fill="#49A1D7"
            />
            <path
              d="M163.175 187.81C139.689 171.713 129.897 172.32 119.175 198.31C93.2159 201.933 89.5355 206.331 83.6753 229.81C67.9437 237.394 56.4823 249.189 64.421 264.81C69.9627 277.826 82.8452 283.975 99.1753 276.81C113.802 281.028 119.122 280.712 126.175 274.81C128.893 279.242 131.777 279.923 138.675 278.81C161.741 298 170.459 293.194 182.675 272.31C196.581 270.3 205.175 265.81 205.175 253.31C220.175 229.81 215.164 219.835 190.675 208.81C188.635 194.201 185.274 187.643 163.175 187.81Z"
              fill="#49A1D7"
            />
            <path
              d="M107.836 259V217H121.328C125.03 217 128.357 217.846 131.311 219.538C134.264 221.212 136.566 223.587 138.215 226.663C139.884 229.721 140.728 233.154 140.747 236.962V238.894C140.747 242.74 139.932 246.192 138.301 249.25C136.69 252.288 134.408 254.673 131.455 256.404C128.52 258.115 125.241 258.981 121.616 259H107.836ZM117.934 224.817V251.212H121.444C124.34 251.212 126.564 250.183 128.118 248.125C129.671 246.048 130.448 242.971 130.448 238.894V237.077C130.448 233.019 129.671 229.962 128.118 227.904C126.564 225.846 124.301 224.817 121.328 224.817H117.934Z"
              fill="white"
            />
            <path
              d="M171.902 241.202H156.022V251.212H174.779V259H145.925V217H174.836V224.817H156.022V233.673H171.902V241.202Z"
              fill="white"
            />
            <path
              d="M43.6644 156.346C38.4596 158.193 32.7429 155.471 30.8957 150.266L3.3446 72.6354C1.49743 67.4306 4.21931 61.7139 9.4241 59.8667L34.6557 50.9121C47.069 46.5066 57.3078 45.4344 65.3723 47.6956C73.4809 49.941 79.0716 55.3929 82.1445 64.0513C83.916 69.0431 84.2804 73.7137 83.2375 78.063C82.1946 82.4122 79.7402 86.218 75.8742 89.4801C81.3805 89.0181 86.1238 90.1201 90.1041 92.7861C94.0844 95.4522 96.9995 99.3916 98.8495 104.604C102.205 114.058 101.725 122.236 97.4101 129.139C93.1239 135.983 85.1212 141.534 73.4019 145.792L43.6644 156.346ZM42.9419 110.419L51.1492 133.545L66.3897 128.136C70.5864 126.647 73.4741 124.553 75.0529 121.854C76.6161 119.11 76.7783 115.994 75.5398 112.504C72.6864 104.464 67.254 101.841 59.2426 104.634L42.9419 110.419ZM37.533 95.1787L49.6592 90.8752C54.7237 89.028 58.0168 86.8148 59.5387 84.2354C61.0605 81.656 61.1943 78.5992 59.94 75.0652C58.4977 71.0011 56.2923 68.5009 53.3239 67.5648C50.3398 66.5846 46.2414 67.0194 41.0287 68.8694L29.6314 72.9143L37.533 95.1787Z"
              fill="#DB4681"
            />
            <path
              d="M132.102 138.186C131.355 144.941 125.275 149.812 118.52 149.065C111.765 148.319 106.895 142.239 107.641 135.484L116.181 58.1886C116.927 51.434 123.008 46.5633 129.762 47.3096C136.517 48.0558 141.387 54.1365 140.641 60.8911L132.102 138.186Z"
              fill="#49A1D7"
            />
            <path
              d="M155.773 142.76C150.326 141.846 146.652 136.69 147.566 131.243L161.201 50.0042C162.115 44.5575 167.271 40.8832 172.718 41.7973L199.122 46.2289C212.112 48.4091 221.583 52.4464 227.533 58.3407C233.529 64.2428 235.767 71.7242 234.246 80.785C233.37 86.0088 231.419 90.2681 228.394 93.5629C225.37 96.8577 221.375 98.9917 216.412 99.9647C221.449 102.236 225.059 105.504 227.243 109.768C229.427 114.032 230.061 118.891 229.145 124.346C227.485 134.239 223.092 141.154 215.967 145.092C208.896 148.991 199.204 149.955 186.892 147.983L155.773 142.76ZM177.454 102.267L173.392 126.467L189.341 129.144C193.733 129.881 197.274 129.454 199.966 127.862C202.665 126.223 204.321 123.578 204.934 119.926C206.346 111.513 202.872 106.58 194.512 105.13L177.454 102.267ZM180.131 86.3181L192.821 88.4479C198.145 89.2939 202.098 88.9594 204.682 87.4442C207.265 85.929 208.867 83.3223 209.488 79.624C210.201 75.371 209.488 72.1143 207.349 69.8539C205.217 67.5474 201.423 65.9363 195.968 65.0208L184.041 63.019L180.131 86.3181Z"
              fill="#85B86E"
            />
            <path
              d="M277.323 127.009C277.421 127.555 277.944 127.918 278.49 127.817L311.545 121.694C316.548 120.768 321.324 124.169 322.084 129.2L322.787 133.86C323.514 138.671 320.286 143.188 315.499 144.059L266.398 152.991C261.507 153.88 256.822 150.637 255.932 145.746L240.832 62.7337C239.943 57.8433 243.186 53.1578 248.076 52.2683L254.617 51.0786C259.519 50.1868 264.213 53.4484 265.088 58.3542L277.323 127.009Z"
              fill="#EEA360"
            />
            <path
              d="M359.758 134.05C359.123 140.816 353.123 145.786 346.357 145.151C339.591 144.516 334.621 138.516 335.256 131.75L342.524 54.3249C343.159 47.5589 349.159 42.5889 355.925 43.224C362.691 43.8592 367.661 49.8589 367.026 56.6249L359.758 134.05Z"
              fill="#E66E57"
            />
            <path
              d="M469.192 109.685C466.504 119.301 462.341 127.312 456.705 133.719C451.069 140.125 444.393 144.416 436.679 146.591C429.022 148.733 420.996 148.631 412.599 146.283C404.202 143.935 397.29 139.934 391.862 134.279C386.447 128.579 382.915 121.629 381.265 113.429C379.66 105.241 380.068 96.4725 382.487 87.1224L384.04 81.5698C386.741 71.909 390.881 63.8917 396.459 57.5178C402.096 51.1113 408.771 46.8206 416.485 44.6456C424.245 42.4833 432.345 42.5822 440.787 44.9425C449.139 47.2776 456.032 51.3465 461.467 57.1494C466.902 62.9522 470.397 70.0377 471.951 78.4059C473.563 86.7415 473.066 95.6557 470.461 105.149L469.192 109.685ZM446.173 98.7958C448.912 88.9996 449.34 81.1128 447.458 75.1353C445.634 69.1253 441.675 65.2683 435.581 63.5643C423.663 60.2321 414.866 67.4098 409.191 85.0974L407.097 92.324C404.396 101.985 403.922 109.859 405.676 115.947C407.43 122.034 411.467 125.962 417.787 127.729C423.791 129.408 429.131 128.151 433.808 123.958C438.484 119.766 442.183 112.891 444.904 103.333L446.173 98.7958Z"
              fill="#DB4681"
            />
            <path
              d="M561.312 54.0222C561.729 56.752 559.854 59.3028 557.124 59.7196L531.692 63.6027L543.513 141.026C543.93 143.756 542.055 146.306 539.325 146.723L524.814 148.939C522.084 149.356 519.533 147.481 519.116 144.751L507.295 67.3278L482.419 71.126C479.689 71.5428 477.139 69.6678 476.722 66.938L475.355 57.987C474.938 55.2572 476.813 52.7064 479.543 52.2896L554.248 40.8832C556.977 40.4664 559.528 42.3415 559.945 45.0713L561.312 54.0222Z"
              fill="#49A1D7"
            />
            <path
              d="M640.684 104.802C640.308 107.538 637.785 109.45 635.05 109.074L601.552 104.468L598.229 128.639L638.692 134.203C641.427 134.579 643.34 137.102 642.964 139.838L641.74 148.738C641.364 151.474 638.841 153.387 636.106 153.01L581.1 145.447C575.629 144.695 571.803 139.65 572.555 134.178L583.776 52.5711C584.528 47.0997 589.574 43.2742 595.045 44.0265L650.19 51.6089C652.926 51.985 654.839 54.5077 654.463 57.2433L653.229 66.2136C652.853 68.9493 650.33 70.8621 647.595 70.4859L606.992 64.9032L604.052 86.2879L637.549 90.8937C640.285 91.2699 642.198 93.7925 641.822 96.5282L640.684 104.802Z"
              fill="#85B86E"
            />
            <path
              d="M738.626 102.384C741.434 101.886 744.125 103.838 744.151 106.689C744.198 111.79 743.283 116.594 741.406 121.1C738.894 127.068 734.761 132.085 729.008 136.152C723.301 140.211 716.431 142.952 708.4 144.376C695.154 146.725 683.958 144.259 674.812 136.978C665.666 129.697 659.698 118.187 656.907 102.448L656.023 97.4635C654.272 87.5863 654.45 78.6525 656.556 70.6621C658.7 62.6174 662.647 56.0144 668.397 50.8533C674.138 45.6459 681.255 42.2894 689.748 40.7837C701.979 38.6151 712.383 40.1029 720.959 45.2471C728.132 49.5147 733.361 55.8952 736.646 64.3884C737.706 67.1286 735.85 70.028 732.958 70.5409L718.889 73.0353C716.227 73.5072 713.738 71.7501 712.794 69.2173C711.452 65.6162 709.563 63.0376 707.128 61.4814C703.746 59.3199 699.077 58.767 693.123 59.8227C687.077 60.8947 683.047 63.9419 681.034 68.9643C679.02 73.9867 678.824 81.4718 680.445 91.4197L681.709 98.5507C683.616 109.305 686.317 116.752 689.812 120.893C693.354 125.026 698.425 126.507 705.025 125.337C710.61 124.347 714.646 122.274 717.133 119.12C718.875 116.911 719.803 114.065 719.919 110.581C720.008 107.884 721.729 105.38 724.386 104.909L738.626 102.384Z"
              fill="#EEA360"
            />
            <path
              d="M806.79 128.099L773.235 123.871L768.025 135.386C766.217 139.382 762.016 141.734 757.664 141.185L753.03 140.601C746.133 139.732 742.205 132.266 745.396 126.09L785.669 48.1382C787.595 44.4113 791.642 42.2823 795.804 42.8067L804.985 43.9636C809.138 44.4869 812.526 47.5418 813.474 51.619L833.375 137.153C834.953 143.934 829.292 150.211 822.385 149.341L817.623 148.741C813.283 148.194 809.803 144.89 809.03 140.585L806.79 128.099ZM781.477 105.704L803.312 108.456L796.799 71.8465L781.477 105.704Z"
              fill="#E66E57"
            />
            <circle cx="360.336" cy="17.5" r="17.5" fill="#E66E57" />
            <circle cx="132.336" cy="21.5" r="17.5" fill="#49A1D7" />
          </svg>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <FaHome />
                <h4>Home</h4>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <AiOutlineFileSearch />
                <h4>Localizar</h4>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <TbCalendarTime />
                <h4>Emprestar</h4>
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <Switch
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              onChange={toggleTheme}
              checked={title === "dark"}
              activeBoxShadow={shade(0.3, colors.primary)}
              checkedIcon={
                <svg
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "2px",
                    justifyContent: "center",
                  }}
                  height="28px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="icon-29-sun" fill="#000000">
                      <path
                        d="M16.5290527,22 C19.566619,22 22.0290527,19.5375663 22.0290527,16.5 C22.0290527,13.4624337 19.566619,11 16.5290527,11 C13.4914865,11 11.0290527,13.4624337 11.0290527,16.5 C11.0290527,19.5375663 13.4914865,22 16.5290527,22 L16.5290527,22 Z M16.5290527,7 C16.2529104,7 16.0290527,7.2157526 16.0290527,7.49538898 L16.0290527,9.50461102 C16.0290527,9.7782068 16.2609863,10 16.5290527,10 C16.8051951,10 17.0290527,9.7842474 17.0290527,9.50461102 L17.0290527,7.49538898 C17.0290527,7.2217932 16.7971191,7 16.5290527,7 L16.5290527,7 Z M23.2671105,9.79099493 C23.0718484,9.59573278 22.760997,9.59000166 22.5632642,9.78773445 L21.1425297,11.208469 C20.9490683,11.4019304 20.9562386,11.7227637 21.1457902,11.9123153 C21.3410523,12.1075774 21.6519037,12.1133085 21.8496365,11.9155758 L23.270371,10.4948412 C23.4638325,10.3013798 23.4566621,9.9805465 23.2671105,9.79099493 L23.2671105,9.79099493 Z M26.0581055,16.5290527 C26.0581055,16.2529104 25.8423529,16.0290527 25.5627165,16.0290527 L23.5534945,16.0290527 C23.2798987,16.0290527 23.0581055,16.2609863 23.0581055,16.5290527 C23.0581055,16.8051951 23.2738581,17.0290527 23.5534945,17.0290527 L25.5627165,17.0290527 C25.8363123,17.0290527 26.0581055,16.7971191 26.0581055,16.5290527 L26.0581055,16.5290527 Z M23.2671105,23.2671105 C23.4623727,23.0718484 23.4681038,22.760997 23.270371,22.5632642 L21.8496365,21.1425297 C21.6561751,20.9490683 21.3353418,20.9562386 21.1457902,21.1457902 C20.9505281,21.3410523 20.9447969,21.6519037 21.1425297,21.8496365 L22.5632642,23.270371 C22.7567257,23.4638325 23.077559,23.4566621 23.2671105,23.2671105 L23.2671105,23.2671105 Z M16.5290527,26.0581055 C16.8051951,26.0581055 17.0290527,25.8423529 17.0290527,25.5627165 L17.0290527,23.5534945 C17.0290527,23.2798987 16.7971191,23.0581055 16.5290527,23.0581055 C16.2529104,23.0581055 16.0290527,23.2738581 16.0290527,23.5534945 L16.0290527,25.5627165 C16.0290527,25.8363123 16.2609863,26.0581055 16.5290527,26.0581055 L16.5290527,26.0581055 Z M9.79099493,23.2671105 C9.98625707,23.4623727 10.2971084,23.4681038 10.4948412,23.270371 L11.9155758,21.8496365 C12.1090372,21.6561751 12.1018668,21.3353418 11.9123153,21.1457902 C11.7170531,20.9505281 11.4062018,20.9447969 11.208469,21.1425297 L9.78773445,22.5632642 C9.59427302,22.7567257 9.60144335,23.077559 9.79099493,23.2671105 L9.79099493,23.2671105 Z M7,16.5290527 C7,16.8051951 7.2157526,17.0290527 7.49538898,17.0290527 L9.50461102,17.0290527 C9.7782068,17.0290527 10,16.7971191 10,16.5290527 C10,16.2529104 9.7842474,16.0290527 9.50461102,16.0290527 L7.49538898,16.0290527 C7.2217932,16.0290527 7,16.2609863 7,16.5290527 L7,16.5290527 Z M9.79099493,9.79099493 C9.59573278,9.98625707 9.59000166,10.2971084 9.78773445,10.4948412 L11.208469,11.9155758 C11.4019304,12.1090372 11.7227637,12.1018668 11.9123153,11.9123153 C12.1075774,11.7170531 12.1133085,11.4062018 11.9155758,11.208469 L10.4948412,9.78773445 C10.3013798,9.59427302 9.9805465,9.60144335 9.79099493,9.79099493 L9.79099493,9.79099493 Z"
                        id="sun"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
              uncheckedIcon={
                <div
                  style={{
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    height="18.68"
                    width="18.68"
                    style={{
                      paddingTop: "3px",
                    }}
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      style={{ height: "16.68" }}
                      id="Moon"
                      d="M24.86,15.53a.5.5,0,0,0-.57,0A10.71,10.71,0,0,1,9.57.79.5.5,0,0,0,9,0,12.77,12.77,0,1,0,25,16,.5.5,0,0,0,24.86,15.53Z"
                      fill="#000"
                    />
                  </svg>
                </div>
              }
              onColor={colors.secondary}
              offColor={shade(0.3, colors.primary)}
            />
          </MenuItem>
        </Menu>
      </IconContext.Provider>
    </Container>
  );
};

export default Header;
