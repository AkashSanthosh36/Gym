import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    },
    FormContainer: {
        width: '300px',
        minHeight: '450px',
        height: '520px',
        maxHeight: '550px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '19px',
        backgroundColor: '#fff',
        boxShadow: '0 0 2px rgba(15, 15, 15, 0.28)',
        position: 'relative',
        overflow: 'hidden',
    },
    HeaderStyle: {
        width: '160%',
        height: '550px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
        top: '-290px',
        left: '-70px',
        background: 'rgb(241, 196, 15)',
    },
    HeaderContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
    },
    HeaderText: {
        fontSize: '30px',
        fontWeight: '600',
        lineHeight: '1.24',
        color: '#fff',
        zIndex: '10',
        margin: '0',
    },
    SmallText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: '11px',
        zIndex: '10',
        margin: '0',
        marginTop: '7px',
    },
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
    button: {
        background: 'linear-gradient(58deg, rgba(241, 196, 15, 1) 20%, rgba(243, 172, 18, 1) 100%)',
        color: '#fff',
        borderRadius: '100px 0px 100px 0px',
        '&:hover': {
            filter: 'brightness(1.03)',
        },
        marginTop: '10px',
    }
}));