import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    Fields: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        margin: '140px auto',
    },
    textField: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00000',
              borderRadius: `20px 20px 20px 20px`,
            },
            '&:hover fieldset': {
              borderColor: 'rgb(241, 196, 15)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(241, 196, 15)',
              borderLeftWidth: 6,
              borderRightWidth: 6,
            },
        },
        marginBottom: '20px',
    },
    age: {
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        },
    },
    button: {
        background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        color: '#fff',
        borderRadius: '100px 0px 100px 0px',
        '&:hover': {
            filter: 'brightness(1.03)',
        },
        marginTop: '10px',
    }
}));