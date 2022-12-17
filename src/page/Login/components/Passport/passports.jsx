import React, {useEffect, useReducer, useState} from 'react';
import LoginImg from "../../../../assets/images/loginImg.svg"
import Logo from "../../../../assets/images/logo.svg"
import Button from '@mui/material/Button';
import "../../style.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Toast from "light-toast";
import {useTranslation} from "react-i18next";
import {baseApi} from "../../../../services/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ACTIONS = {
    USER_ADD: "user_add"
};

function reduser(state, action) {
    switch (action.type) {
        case ACTIONS.USER_ADD:
            state = {
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            };
            break;
    }
    return state;
}

const Passports = (key, value) => {
    const [text, setText] = useState('')
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const [id, setId] = useState('')
    const [num, setNum] = React.useState();
    const [numbers, setNumbers] = React.useState();
    const [stre, setStre] = React.useState();
    const initialError = {
        frame: false,
        eText: ''
    };

    const [ePinfl, setEPnfl] = useState(initialError);
    const [ePassport, setEPassport] = useState(initialError);
    const [ePassportNum, setEPassportNum] = useState(initialError);
    const initialUser = {
        id: '',
        pnfl: "",
        pasport_seria: "",
        pasport_seria_code: ""
    }
    const [state, dispatch] = useReducer(reduser, {user: initialUser});

    function getInputValues(e) {
        dispatch({
            type: ACTIONS.USER_ADD,
            payload: {
                key: e.target.name,
                value: e.target.value
            }

        });

    }

    async function addUser() {
        axios.post(`${baseApi}/pasport`, state.user, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {
            toast.success(response.data.Message);
            console.log(response.data)
            if (response.data.status === 'ok') {
                localStorage.setItem('passport', response.data.pasport.id)
                let id = response.data.pasport.id

                setId(id)
                setTimeout(() => {
                    navigate("/register");
                    console.log(id)
                }, 100);

            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    /************ERRORS***************/



    function isUpper(str) {
        return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    }

    function errorPinfl(e) {
        if (e.target.value.length !== 14) {
            setEPnfl({frame: true, eText: "Incorrect PINFL"});
            const regex = /^[0-9\b]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                setNum(e.target.value);
            }

        } else setEPnfl(initialError);
    }

    function errorPassport(e) {
        if (e.target.value.length === 2 && isUpper(e.target.value)){
            setEPassport(initialError);
            const regex = /^[0-2\b]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                setNumbers(e.target.value);
            }
        }
        // else
            // setEPassport({frame: true, eText: "Incorrect passport seria"});
    }

    function errorPasspotNum(e) {
        if (e.target.value.length !== 8){
            setEPassportNum({frame: true, eText: "Incorrect passport number"});
            const regex = /^[0-9\b]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                setNumbers(e.target.value);
            }
        }


        else
            setEPassportNum(initialError);
    }

    /************ERRORS***************/


    return (
        <div className="loginIn">
            <div className="left">
                <div className="lgBlur"></div>
                <img className="loginImg" src={LoginImg} alt=""/>
            </div>
            <div className="right">
                <div className="container">
                    <div className="col-md-10 offset-1">
                        <img src={Logo} alt="" className="loginLogo"/>
                        <div className="loginTitle">Добро пожаловать</div>
                        <h4 style={{color: 'red'}}>{text}</h4>
                        {/*<h4>{JSON.stringify(state.user)}</h4>*/}
                        <div className="form-group mt-5"
                             style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            {/*<label className="label">Введите ПИНФЛ*</label>*/}
                            <Box
                                component="form"
                                style={{width: "90%"}}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    error={ePinfl.frame}
                                    helperText={ePinfl.eText}
                                    className="numberPhone mt-5"
                                    id="outlined-basic"
                                    label="Введите ПИНФЛ*"
                                    variant="outlined"
                                    type="number"
                                    defaultValue={num}
                                    value={num}
                                    inputProps={{maxLength: 14}}
                                    placeholder="1234567891011121314"
                                    onChange={(e) => {
                                        getInputValues(e);
                                        errorPinfl(e);
                                    }}
                                    name={'pnfl'}
                                />
                            </Box>
                            {/*<input type="number" placeholder="+99 890 123 45 67" className="numberPhone"/>*/}
                        </div>
                        <div className="Infopass">
                            <div className="w-100">

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={ePassport.frame}
                                        helperText={ePassport.eText}
                                        className="line"
                                        id="outlined-basic"
                                        label="Введите Серию паспорта*"
                                        variant="outlined"
                                        placeholder="DF"
                                        type="text"
                                        defaultValue={stre}
                                        value={stre}
                                        inputProps={{maxLength: 2, style: {textTransform: "uppercase"}}}
                                        name={'pasport_seria'}
                                        onChange={(e) => {
                                            getInputValues(e);
                                            errorPassport(e);
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="w-100">

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={ePassportNum.frame}
                                        helperText={ePassportNum.eText}
                                        className="line"
                                        id="outlined-basic"
                                        label="Введите номер паспорта*"
                                        variant="outlined"
                                        placeholder="12345689"
                                        defaultValue={numbers}
                                        value={numbers}
                                        inputProps={{maxLength: 7}}
                                        type="number"
                                        onChange={(e) => {
                                            getInputValues(e);
                                            errorPasspotNum(e);
                                        }}
                                        name={'pasport_seria_code'}
                                    />
                                </Box>
                            </div>
                        </div>
                        <Button onClick={addUser} variant="outlined" className="sends"> Продолжить</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Passports;