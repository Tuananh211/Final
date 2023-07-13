import {
  Layout,
  Menu,
  theme,
  Image,
  Avatar,
  Button,
  Input,
  Modal,
  ConfigProvider,
} from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
import {
  FaChessBoard,
  FaRegClock,
  FaCalculator,
  FaRegHandPeace,
} from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { RiChatQuoteLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MdCurrencyExchange } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Pomodoro from "./Pomodoro/App";
import Calculator from "./Calculator/App";
import Chess from "./ChessBoard/App";
import HelloWorld from "./HelloWorld/App";
import ConvertMoney from "./ConvertMoney/App";
import Quotes from "./Quotes";
import Popup from "./Popup/Popup";
import "normalize.css";
import "./App.css";
import img1 from "./assets/img1.png";
import koro from "./assets/Koro.png";
import Info from "./info/Info";
import { useTranslation } from "react-i18next";
// import "../src/languages/index.js";

const App = () => {
  const { i18n, t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modeTheme, setModeTheme] = useState("dark");
  // const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;
  const items = [
    {
      type: "group",
      label: "Menu",
      children: [
        {
          key: "/ChessBoard",
          icon: <FaChessBoard />,
          label: <Link to="/ChessBoard">{t("ChessBoard")}</Link>,
          path: "/ChessBoard",
        },
        {
          key: "/Calculator",
          icon: <FaCalculator />,
          label: <Link to="/Calculator">{t("Calculator")}</Link>,
          path: "/Calculator",
        },
        {
          key: "/Pomodoro",
          icon: <FaRegClock />,
          label: <Link to="/Pomodoro">{t("Poromodo")}</Link>,
          path: "/Pomodoro",
        },
        {
          key: "/HelloWorld",
          icon: <FaRegHandPeace />,
          label: <Link to="/HelloWorld">{t("HelloWorld")}</Link>,
          path: "/HelloWorld",
        },
        {
          key: "/ConvertMoney",
          icon: <MdCurrencyExchange />,
          label: <Link to="/ConvertMoney">{t("ConvertMoney")}</Link>,
          path: "/ConvertMoney",
        },
        {
          key: "/Quotes",
          icon: <RiChatQuoteLine />,
          label: <Link to="/Quotes">{t("Quotes")}</Link>,
          path: "/Quotes",
        },
      ],
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const themeCustom = {
    light: {
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: "orange",
        colorBgLayout: "#91caff",
        colorPrimaryBorder: "#cccc",
        colorBgTextHover: "#F4A460",
      },
    },
    dark: {
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: "#1E90FF",
        colorBgLayout: "#062372",
        colorBgTextHover: "#87CEEB",
      },
    },
  };
  const handleModeTheme = () => {
    setModeTheme(modeTheme === "light" ? "dark" : "light");
    console.log(modeTheme);
  };
  const onChangeLang = (e) => {
    const lang_code = e;
    i18n.changeLanguage(lang_code);
  };

  const currentPath = window.location.pathname;

  return (
    <ConfigProvider theme={themeCustom[modeTheme]}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            className="slider"
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            // style={ {background: 'transparent'}}
            theme={modeTheme}
          >
            <div className="demo-logo-vertical" />
            <Header
              style={{
                padding: "0 24px",
                // borderBottom: "1px solid #cccc"
              }}
            >
              <Image width={30} preview={false} src={img1} />
              <span
                className={` ${collapsed === false ? "headerTitle" : "hide"}`}
              >
                My App
              </span>
            </Header>
            <Info collapsed={collapsed} modeTheme={modeTheme}></Info>
            <Menu
              theme={modeTheme}
              mode="inline"
              items={items}
              defaultSelectedKeys={currentPath}
            ></Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: `${modeTheme === "dark" ? "" : colorBgContainer}`,
                borderBottom: "1px solid #cccc",
              }}
              className="header"
              // theme={modeTheme}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                    color: `${modeTheme === "dark" ? "white" : "black"}`,
                  }}
                />
                <Search
                  className="inputSearch"
                  placeholder="Input search text"
                  enterButton
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "10px",
                }}
              >
                <BsBell
                  style={{
                    fontSize: "25px",
                    marginRight: "20px",
                    color: `${modeTheme === "dark" ? "white" : "black"}`,
                  }}
                ></BsBell>
                <Avatar size={50} src={koro} />

                <FiMoreVertical
                  style={{
                    fontSize: "24px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: `${modeTheme === "dark" ? "white" : "black"}`,
                    cursor:'pointer'
                  }}
                  onClick={() => setModalOpen(true)}
                />
              </div>
            </Header>
            <Modal
              title="Setting"
              centered
              open={modalOpen}
              onOk={() => setModalOpen(false)}
              onCancel={() => setModalOpen(false)}
              width={450}
            >
              <Popup onChange={onChangeLang} onClick={handleModeTheme}></Popup>
            </Modal>
            <Content style={{ width: "100%" }}>
              <div
                style={{
                  // padding: 24,
                  minHeight: "100%",
                  background: `${
                    modeTheme === "dark" ? "#FFE4C4" : colorBgContainer
                  }`,
                }}
              >
                <Switch>
                  <Route path="/Pomodoro">
                    <Pomodoro />
                  </Route>

                  <Route path="/Calculator">
                    <Calculator />
                  </Route>

                  <Route path="/ChessBoard">
                    <Chess />
                  </Route>

                  <Route path="/HelloWorld">
                    <HelloWorld />
                  </Route>
                  <Route path="/ConvertMoney">
                    <ConvertMoney />
                  </Route>

                  <Route path="/Quotes">
                    <Quotes />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
                backgroundColor: "#FFDEAD",
                borderTop: "1px solid #cccc",
              }}
            >
              <span style={{ color: "black" }}>
                Ant Design ©2023 Created by Vũ Đình Tuấn Anh
              </span>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
