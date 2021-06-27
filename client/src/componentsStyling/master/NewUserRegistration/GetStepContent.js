import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
    },
    FormContainer: {
        width: '300px',
        height: '580px',
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
        background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
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
}));