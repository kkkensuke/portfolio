import axios from "axios";

// Qiita用のaxiosをインスタンス化
const qiitaInstance = axios.create({
  baseURL: "https://qiita.com",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_QIITA_TOKEN}`
  }
});

export default qiitaInstance;