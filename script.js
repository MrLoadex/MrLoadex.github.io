/* style.css */
body {
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.list {
  flex: 1;
  margin: 0 10px;
}

.list h2 {
  margin-top: 0;
}

.list-ul {
  list-style-type: none;
  padding: 0;
  background-color: #f7f7f7;
  border-radius: 5px;
  min-height: 200px;
  padding: 10px;
}

.list-ul li {
  background-color: #fff;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.list-ul li:hover {
  background-color: #f7f7f7;
}
