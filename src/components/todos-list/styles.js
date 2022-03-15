import styled from "styled-components";

export const Todo = styled.div`
    background-color: #f5f5f5;
    height: 40px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    padding: 0 10px 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        text-decoration: ${({ completed }) => completed && "line-through"};
    }
`;

export const Button = styled.button`
    background-color: #e54f2d;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 10px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
`;