const url = "http://localhost:39623/api/users";

const userList = () => {
    return $.getJSON(url);
}