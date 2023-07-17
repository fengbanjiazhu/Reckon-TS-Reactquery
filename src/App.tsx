import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Summary from "./component/Summary";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header style={headerStyle}>Stock View</Header>
        <Layout hasSider>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>
            <Summary></Summary>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
