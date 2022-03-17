import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

import { useNavigate } from "react-router-dom";

export default function Register(props) {
    let navigate = useNavigate();
    const context = useContext();
    const [errors, setErrors] = useState({});


    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { register: userData } }) {
            context.login(userData);
            navigate("/");
        },
        onError(err, test) {
            if (err.graphQLErrors[0]) {
                console.log(
                    err.graphQLErrors[0],
                    err.graphQLErrors[0].extensions.errors
                );
                setErrors(err.graphQLErrors[0].extensions.errors);
            }
        },
        variables: values,
    });

    function registerUser() {
        addUser();
    }

    return (
        <div className="form-container">
            <Form
                onSubmit={onSubmit}
                noValidate
                className={loading ? "loading" : "register"}
            >
                <Form.Input
                    label="username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                ></Form.Input>
                <Form.Input
                    label="Email"
                    placeholder="Email.."
                    name="email"
                    type="text"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                ></Form.Input>
                <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                ></Form.Input>
                <Form.Input
                    label="Confirm Password"
                    placeholder="Confirm Password.."
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                ></Form.Input>

                <Button type="submit">Submit</Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id
            email
            username
            createdAt
            token
        }
    }
`;
