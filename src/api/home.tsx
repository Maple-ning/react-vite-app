import request from "@/utils/request";

export const getHomeList = () => {
  return request({
    method: "get",
    url: "/home",
  })
}