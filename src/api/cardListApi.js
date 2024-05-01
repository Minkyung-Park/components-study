import axios from "axios";

export const host = process.env.PUBLIC_URL; // 밖에서도 쓸수 있으니 export해

export const getCards = async () => {
  try {
    const response = await axios.get(`${host}/json/cardList.json`); // axio안에 겟 메서드를 부른다, await는 기다렸다가, get옆에 괄호안에는 백엔드가 주는 주소 적음 없으면 내 파일 경로 적음
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
