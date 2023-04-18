/* style.css */
.container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

.list {
    flex-basis: 30%;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.list h2 {
    margin-top: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.list-ul {
    list-style-type: none;
    padding: 0;
}

.list-ul li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.list-ul li:hover {
    background-color: #efefef;
}
