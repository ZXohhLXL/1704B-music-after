import request from "@/utils/request"

let user = {
  login:data => request.post("/api/login",data)
}
export default user